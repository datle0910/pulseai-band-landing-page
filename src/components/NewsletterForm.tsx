import { useState } from 'react'
import { Mail, Loader2, User, Phone, ChevronDown } from 'lucide-react'
import toast from 'react-hot-toast'
import { validateNewsletterForm } from '../utils/validation'
import { trackEvent } from '../utils/tracking'
import type { NewsletterFormData, FormErrors } from '../utils/validation'

const interestOptions = [
  { value: '', label: 'Chọn nhu cầu quan tâm...' },
  { value: 'health-tracking', label: 'Theo dõi sức khỏe' },
  { value: 'sleep-tracking', label: 'Theo dõi giấc ngủ' },
  { value: 'fitness', label: 'Tập luyện thể thao' },
  { value: 'launch-info', label: 'Nhận thông tin ra mắt sản phẩm' },
  { value: 'purchase-consult', label: 'Tư vấn mua hàng' },
]

const initialFormData: NewsletterFormData = {
  fullName: '',
  email: '',
  phone: '',
  interest: '',
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<NewsletterFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateNewsletterForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      interest: formData.interest,
      source: 'PulseAI Band Landing Page',
      submittedAt: new Date().toISOString(),
    }

    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL

    try {
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          throw new Error(`Webhook responded with status ${response.status}`)
        }
      } else {
        // No webhook configured — simulate success for demo
        console.log(
          '%c[PulseAI] %cWebhook not configured. Simulating successful submission.',
          'color: #14b8a6; font-weight: bold;',
          'color: #64748b;'
        )
        console.log('%c[PulseAI] %cForm data:', 'color: #14b8a6; font-weight: bold;', 'color: #0f172a;', payload)
        // Small delay to simulate network request
        await new Promise((resolve) => setTimeout(resolve, 800))
      }

      // Track successful submission
      trackEvent('newsletter_submit', {
        email: formData.email.trim(),
        interest: formData.interest,
      })

      toast.success(
        'Đăng ký thành công! PulseAI Band sẽ gửi thông tin mới nhất đến bạn.',
        { duration: 4000 }
      )

      setFormData(initialFormData)
    } catch (error) {
      console.error('[PulseAI] Webhook submission failed:', error)
      toast.error('Không thể gửi đăng ký. Vui lòng thử lại sau.', {
        duration: 4000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Mail size={24} className="text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Đăng ký nhận tin từ PulseAI Band
          </h2>
          <p className="mt-3 text-base text-teal-100/80">
            Nhận thông tin mới nhất về sản phẩm, ưu đãi đặc biệt và mẹo chăm sóc sức khỏe.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full name */}
          <div>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Họ tên *"
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/15 backdrop-blur-sm border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? 'border-red-300 focus:ring-red-300/50'
                    : 'border-white/20 focus:ring-white/30'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-200 pl-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/15 backdrop-blur-sm border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-300/50'
                    : 'border-white/20 focus:ring-white/30'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-200 pl-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại (không bắt buộc)"
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/15 backdrop-blur-sm border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-red-300 focus:ring-red-300/50'
                    : 'border-white/20 focus:ring-white/30'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-200 pl-1">{errors.phone}</p>
            )}
          </div>

          {/* Interest */}
          <div>
            <div className="relative">
              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`w-full appearance-none px-4 py-3.5 rounded-xl bg-white/15 backdrop-blur-sm border text-sm focus:outline-none focus:ring-2 transition-all ${
                  formData.interest ? 'text-white' : 'text-white/50'
                } ${
                  errors.interest
                    ? 'border-red-300 focus:ring-red-300/50'
                    : 'border-white/20 focus:ring-white/30'
                }`}
              >
                {interestOptions.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    className="bg-teal-700 text-white"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.interest && (
              <p className="mt-1.5 text-xs text-red-200 pl-1">{errors.interest}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-teal-600 text-sm font-semibold shadow-lg shadow-teal-700/20 hover:shadow-xl hover:bg-teal-50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Đang gửi...
              </>
            ) : (
              'Đăng ký nhận tin'
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-teal-200/60">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
        </p>
      </div>
    </section>
  )
}

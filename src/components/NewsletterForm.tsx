import { useState } from 'react'
import { Mail, Loader2, User, Phone, ChevronDown, ShieldCheck } from 'lucide-react'
import toast from 'react-hot-toast'
import { validateNewsletterForm } from '../utils/validation'
import { trackEvent } from '../utils/tracking'
import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../utils/animations'
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
    <section id="newsletter" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 transition-colors duration-300">
      
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,212,191,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Card Container */}
        <div className="bg-slate-950/45 border border-white/5 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Decorative Top Accent line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]" />

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6 border border-teal-500/20 text-teal-400">
              <Mail size={20} />
            </div>

            <h2 className="text-3xl font-black text-white leading-[1.1] tracking-tighter">
              Sẵn sàng hiểu cơ thể mình rõ hơn?
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-semibold">
              Đăng ký để nhận thông tin ra mắt, tư vấn phiên bản phù hợp và bản demo AI Health Insight.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            
            {/* Full name */}
            <div>
              <div className="relative">
                <User
                  size={15}
                  className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Họ tên *"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition-all ${
                    errors.fullName
                      ? 'border-rose-500/50 focus:ring-rose-500/10'
                      : 'border-white/5 focus:border-teal-500/55'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-400 pl-1 font-semibold">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition-all ${
                    errors.email
                      ? 'border-rose-500/50 focus:ring-rose-500/10'
                      : 'border-white/5 focus:border-teal-500/55'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-400 pl-1 font-semibold">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone
                  size={15}
                  className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại (không bắt buộc)"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/60 border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition-all ${
                    errors.phone
                      ? 'border-rose-500/50 focus:ring-rose-500/10'
                      : 'border-white/5 focus:border-teal-500/55'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 text-xs text-rose-400 pl-1 font-semibold">{errors.phone}</p>
              )}
            </div>

            {/* Interest */}
            <div>
              <div className="relative">
                <ChevronDown
                  size={15}
                  className="absolute right-4.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4.5 py-3.5 rounded-xl bg-slate-900/60 border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition-all ${
                    formData.interest ? 'text-white' : 'text-slate-500'
                  } ${
                    errors.interest
                      ? 'border-rose-500/50 focus:ring-rose-500/10'
                      : 'border-white/5 focus:border-teal-500/55'
                  }`}
                >
                  {interestOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-slate-950 text-white"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.interest && (
                <p className="mt-1.5 text-xs text-rose-400 pl-1 font-semibold">{errors.interest}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4] text-white text-xs font-black uppercase tracking-wider shadow-lg disabled:opacity-75 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Đang gửi...
                </>
              ) : (
                'Đăng ký nhận tin'
              )}
            </motion.button>
          </form>

          {/* Microcopy footer */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[9px] text-slate-500 font-black uppercase tracking-widest">
            <ShieldCheck size={13} className="text-teal-400" />
            Không spam. Chỉ gửi thông tin ra mắt và tư vấn phù hợp.
          </div>
          
        </div>
      </motion.div>
    </section>
  )
}

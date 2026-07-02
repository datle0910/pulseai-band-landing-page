import { useState } from 'react'
import { Mail, Loader2, User, Phone, ChevronDown } from 'lucide-react'
import toast from 'react-hot-toast'
import { validateNewsletterForm } from '../utils/validation'
import { trackEvent } from '../utils/tracking'
import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../utils/animations'
import { submitToWebhook } from '../utils/webhook'
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
      source: 'PulseAI Band Landing Page' as const,
      submittedAt: new Date().toISOString(),
    }

    const response = await submitToWebhook(payload)

    if (response.status === 'error') {
      toast.error(response.message || 'Không thể gửi đăng ký. Vui lòng thử lại sau.', {
        duration: 4000,
      })
      setIsSubmitting(false)
      return
    }

    if (response.status === 'demo') {
      toast.success(
        'Đăng ký thành công ở chế độ demo. Bạn có thể cấu hình webhook thật trong .env.',
        { duration: 4000 }
      )
    } else {
      toast.success(
        'Đăng ký thành công! Dữ liệu đã được gửi tới hệ thống tư vấn PulseAI Band.',
        { duration: 4000 }
      )
    }

    // Track successful submission
    trackEvent('newsletter_submit', {
      email: formData.email.trim(),
      interest: formData.interest,
    })

    setFormData(initialFormData)
    setIsSubmitting(false)
  }

  return (
    <section id="newsletter" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-slate-950" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Header */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Sẵn sàng trải nghiệm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  sức khỏe thông minh hơn?
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Đăng ký ngay để nhận thông tin mới nhất về sản phẩm, ưu đãi đặc biệt dành cho khách hàng đặt trước.
              </p>
              
              <div className="hidden lg:flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                    <CheckIcon />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Không spam. Hủy đăng ký bất kỳ lúc nào.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <CheckIcon />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Tư vấn chuyên sâu từ chuyên gia.</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full name */}
              <div>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Họ tên *"
                    className={`w-full pl-11 pr-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:bg-white/10 transition-all duration-300 ${
                      errors.fullName ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:ring-teal-500/50'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="mt-2 text-xs text-red-400 pl-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full pl-11 pr-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:bg-white/10 transition-all duration-300 ${
                      errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:ring-teal-500/50'
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-2 text-xs text-red-400 pl-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại (không bắt buộc)"
                    className={`w-full pl-11 pr-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:bg-white/10 transition-all duration-300 ${
                      errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:ring-teal-500/50'
                    }`}
                  />
                </div>
                {errors.phone && <p className="mt-2 text-xs text-red-400 pl-1">{errors.phone}</p>}
              </div>

              {/* Interest */}
              <div>
                <div className="relative">
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full appearance-none px-4 py-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border text-sm focus:outline-none focus:ring-2 focus:bg-white/10 transition-all duration-300 ${
                      formData.interest ? 'text-white' : 'text-slate-500'
                    } ${
                      errors.interest ? 'border-red-500/50 focus:ring-red-500/50' : 'border-white/10 focus:ring-teal-500/50'
                    }`}
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-slate-800 text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.interest && <p className="mt-2 text-xs text-red-400 pl-1">{errors.interest}</p>}
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-7 py-4 mt-2 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 text-sm font-bold shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed border border-white/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  'Đăng ký nhận tin'
                )}
              </motion.button>

              <div className="lg:hidden mt-6 text-center">
                <p className="text-xs text-slate-500">Không spam. Hủy đăng ký bất kỳ lúc nào.</p>
              </div>
            </form>
          </div>
        </div>
        
        <p className="mt-6 text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
          Webhook-ready: Dữ liệu có thể gửi tới Google Sheets, Formspree, Web3Forms hoặc Make.
        </p>
      </motion.div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

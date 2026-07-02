import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { trackEvent } from '../utils/tracking'
import toast from 'react-hot-toast'
import { fadeUp, viewportConfig } from '../utils/animations'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Vui lòng nhập email của bạn')
      return
    }

    if (!validateEmail(email)) {
      setError('Email không hợp lệ')
      return
    }

    setStatus('loading')
    trackEvent('newsletter_signup', { email })

    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL

    try {
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, source: 'PulseAI Landing Page', timestamp: new Date().toISOString() }),
        })
        
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setStatus('success')
      toast.success('Đăng ký thành công! PulseAI sẽ sớm liên hệ với bạn.', {
        position: 'bottom-center',
        duration: 5000,
      })
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('idle')
      setError('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.')
      toast.error('Có lỗi xảy ra. Xin hãy thử lại.')
    }
  }

  return (
    <section id="newsletter" className="relative py-24 sm:py-32 bg-[#0f172a] dark:bg-[#020617]">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-teal-500 text-sm font-semibold mb-4 tracking-wide text-center">Đăng ký sớm</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-center">
            Nhận thông tin ra mắt{' '}
            <span className="text-slate-400">và ưu đãi dành riêng cho bạn.</span>
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto mb-10 text-center leading-relaxed">
            Để lại email để nhận thông báo khi PulseAI Band chính thức mở bán, kèm hướng dẫn chọn phiên bản phù hợp.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative mb-5">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="you@email.com"
                className="w-full h-12 pl-4 pr-28 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <>
                    Đăng ký
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute -bottom-6 left-0 w-full text-center text-rose-400 text-xs font-medium"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>

          <p className="text-center text-[11px] text-slate-500">
            Không spam. Chỉ gửi thông tin ra mắt và tư vấn phù hợp.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

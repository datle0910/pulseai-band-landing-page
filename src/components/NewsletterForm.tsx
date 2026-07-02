import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader2, ShieldCheck } from 'lucide-react'
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
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-16 border border-white/20 shadow-2xl text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Sẵn sàng trải nghiệm <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">sức khỏe thông minh hơn?</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Đăng ký ngay để nhận ưu đãi sớm nhất khi PulseAI Band chính thức ra mắt và các kiến thức chăm sóc sức khỏe độc quyền.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative mb-6">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Nhập email của bạn..."
                className="w-full h-14 pl-6 pr-32 rounded-full bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all shadow-inner"
                disabled={status === 'loading' || status === 'success'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-semibold flex items-center justify-center transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -bottom-6 left-0 w-full text-center text-rose-400 text-sm font-medium"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
            <ShieldCheck size={16} className="text-teal-400" />
            Không spam. Chỉ gửi thông tin ra mắt và tư vấn phù hợp.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

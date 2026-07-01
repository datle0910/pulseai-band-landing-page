import { Mail } from 'lucide-react'

export default function NewsletterForm() {
  return (
    <section id="newsletter" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
          <Mail size={24} className="text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          Đăng ký nhận tin từ PulseAI Band
        </h2>
        <p className="mt-3 text-base text-teal-100/80">
          Nhận thông tin mới nhất về sản phẩm, ưu đãi đặc biệt và mẹo chăm sóc sức khỏe.
        </p>

        {/* Form placeholder */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email của bạn..."
            className="flex-1 px-5 py-3.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
            readOnly
          />
          <button
            type="button"
            className="px-7 py-3.5 rounded-full bg-white text-teal-600 text-sm font-semibold shadow-lg shadow-teal-700/20 hover:shadow-xl hover:bg-teal-50 transition-all"
          >
            Đăng ký
          </button>
        </div>

        <p className="mt-4 text-xs text-teal-200/60">
          Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
        </p>
      </div>
    </section>
  )
}

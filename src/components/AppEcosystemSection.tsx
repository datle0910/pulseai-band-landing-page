import { motion } from 'framer-motion'
import { Smartphone, RefreshCcw, BellRing } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import PhoneMockup from './PhoneMockup'

export default function AppEcosystemSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-slate-50 dark:bg-slate-900/50 -translate-y-1/2 skew-y-3 -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Mọi dữ liệu. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Một màn hình.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Kết nối PulseAI Band với điện thoại thông minh để mở khóa toàn bộ sức mạnh của hệ sinh thái chăm sóc sức khỏe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Phone Mockup (Center/Left on desktop) */}
          <motion.div
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PhoneMockup />
          </motion.div>

          {/* Benefits Cards (Right on desktop) */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6 items-start group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center flex-shrink-0 border border-teal-100 dark:border-teal-500/20 group-hover:scale-110 transition-transform">
                <RefreshCcw className="w-7 h-7 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Đồng bộ theo thời gian thực</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Dữ liệu từ cổ tay lập tức được đồng bộ hóa lên đám mây, giúp bạn theo dõi biểu đồ sức khỏe chi tiết từng giây.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6 items-start group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-100 dark:border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quản lý toàn diện</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Xem báo cáo chuyên sâu, đặt mục tiêu luyện tập và quản lý các thiết lập của vòng tay trực tiếp trên ứng dụng.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex gap-6 items-start group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center flex-shrink-0 border border-violet-100 dark:border-violet-500/20 group-hover:scale-110 transition-transform">
                <BellRing className="w-7 h-7 text-violet-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Nhận thông báo thông minh</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Không bỏ lỡ cuộc gọi hay tin nhắn quan trọng. Tùy chỉnh những thông báo bạn muốn nhận ngay trên PulseAI Band.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

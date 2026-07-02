import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import PhoneMockup from './PhoneMockup'
import { Smartphone, RefreshCcw, BellRing } from 'lucide-react'

export default function AppEcosystemSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_60%)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_60%)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
              Mọi dữ liệu sức khỏe <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500">
                trong một ứng dụng.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 max-w-lg">
              Kết nối liền mạch với smartphone. PulseAI App tổng hợp, phân tích và trình bày dữ liệu của bạn một cách trực quan, khoa học nhất.
            </motion.p>

            <div className="space-y-6">
              <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Đồng bộ tức thì</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Dữ liệu được cập nhật real-time ngay khi mở ứng dụng thông qua Bluetooth 5.3.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Báo cáo chuyên sâu</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Xem biểu đồ giấc ngủ, xu hướng nhịp tim và mức độ stress chi tiết theo tuần, tháng.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                  <BellRing className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Thông báo thông minh</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Tùy chỉnh thông báo cuộc gọi, tin nhắn và cảnh báo sức khỏe gửi đến vòng tay.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={viewportConfig}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl rotate-12 opacity-80 blur-2xl -z-10" 
              />
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-80 blur-2xl -z-10" 
              />
              
              <PhoneMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

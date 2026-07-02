import { Sparkles, BatteryFull, ShieldAlert, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import PremiumProductVisual from './PremiumProductVisual'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Gradients & Aceternity UI Background Beams */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/20 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950/80 pointer-events-none z-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 90, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -90, 60, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Left (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Top Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-6 border border-teal-200/50 dark:border-teal-900/50"
            >
              <Cpu size={14} className="animate-pulse" />
              AI Health Wearable
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Hiểu cơ thể bạn <br className="hidden sm:block" />
              trước khi cơ thể <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">lên tiếng.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium"
            >
              Theo dõi giấc ngủ, nhịp tim và phục hồi hằng ngày, chuyển hóa dữ liệu thành gợi ý sức khỏe thông minh bằng AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#store"
                onClick={() => trackCtaClick('hero_buy')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xl transition-all"
              >
                Mua Ngay
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all shadow-sm"
              >
                Khám phá tính năng
              </a>
            </motion.div>
          </motion.div>

          {/* Graphic Right (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <PremiumProductVisual />
          </div>

        </div>

        {/* Support Stat Icons / Trust indicators - Separated as a horizontal brand strip at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mt-20 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full flex flex-wrap justify-center gap-12 sm:gap-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center border border-teal-100 dark:border-teal-900/30 text-teal-600 dark:text-teal-400">
              <BatteryFull size={20} />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">10 ngày pin</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Sử dụng liên tục</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/30 text-cyan-600 dark:text-cyan-400">
              <ShieldAlert size={20} />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">IP68 chống nước</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Chống nước & Bụi</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center border border-violet-100 dark:border-violet-900/30 text-violet-600 dark:text-violet-400">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">24/7 health tracking</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">AI theo dõi chủ động</div>
            </div>
          </div>
        </motion.div>

        </div>
    </section>
  )
}

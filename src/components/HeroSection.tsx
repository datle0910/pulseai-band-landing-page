import { Battery, ShieldCheck, Sparkles, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import PremiumProductVisual from './PremiumProductVisual'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-24 pb-16 transition-colors duration-300">
      
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-glow-teal z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-glow-cyan z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left (lg:col-span-6 / col-span-5 roughly) */}
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DDFBF7] dark:bg-teal-950/40 border border-teal-200/50 dark:border-teal-900/30 text-[#00A99D] dark:text-[#2DD4BF] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Cpu size={13} className="animate-pulse" />
              AI Health Wearable
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.08] tracking-tighter"
            >
              Hiểu cơ thể bạn <br className="hidden sm:block" />
              trước khi cơ thể{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]">
                lên tiếng.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium"
            >
              PulseAI Band theo dõi nhịp tim, giấc ngủ, vận động và mức độ phục hồi hằng ngày, sau đó chuyển dữ liệu thành những gợi ý sức khỏe dễ hiểu bằng AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#features"
                onClick={() => trackCtaClick('hero_explore')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-[#00A99D] dark:bg-white dark:text-slate-900 dark:hover:bg-[#2DD4BF] dark:hover:text-slate-950 shadow-md transition-colors"
              >
                Khám phá tính năng
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#00A99D] dark:hover:border-[#2DD4BF] transition-colors"
              >
                Đăng ký nhận tin
              </a>
            </motion.div>
          </motion.div>

          {/* Graphic Right (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <PremiumProductVisual />
          </div>

        </div>

        {/* Support Stat Icons / Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/40 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center border border-teal-100 dark:border-teal-900/20 text-[#00A99D] dark:text-[#2DD4BF]">
              <Battery size={18} />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 dark:text-white">10 ngày pin</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Sử dụng liên tục</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/20 text-cyan-500">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 dark:text-white">IP68 chống nước</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Chống nước & bụi</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center border border-violet-100 dark:border-violet-900/20 text-violet-500">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 dark:text-white">24/7 health tracking</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">AI theo dõi chủ động</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

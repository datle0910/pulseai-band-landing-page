import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import PremiumProductVisual from './PremiumProductVisual'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 bg-[#f7f8fa] dark:bg-[#020617]">
      {/* Minimal background - just a subtle dot grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNiIgZmlsbD0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjEpIi8+PC9zdmc+')] opacity-60 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left lg:col-span-6 flex flex-col items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-[11px] font-semibold uppercase tracking-wider border border-teal-100 dark:border-teal-500/20">
                AI Health Wearable
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-5"
            >
              Hiểu cơ thể bạn{' '}
              <br className="hidden lg:block" />
              trước khi cơ thể{' '}
              <br className="hidden lg:block" />
              <span className="text-teal-600 dark:text-teal-400">lên tiếng.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              PulseAI Band theo dõi nhịp tim, giấc ngủ và vận động hằng ngày, sau đó chuyển dữ liệu thành những gợi ý sức khỏe dễ hiểu bằng AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto mb-10">
              <a
                href="#store"
                onClick={() => trackCtaClick('hero_explore')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
              >
                Khám phá phiên bản
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                onClick={() => trackCtaClick('hero_features')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Tìm hiểu thêm
              </a>
            </motion.div>

            {/* Trust Stats */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 sm:gap-8 text-center lg:text-left">
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">10 ngày</div>
                <div className="text-[11px] text-slate-400 mt-1">Thời lượng pin</div>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">IP68</div>
                <div className="text-[11px] text-slate-400 mt-1">Chống nước</div>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">24/7</div>
                <div className="text-[11px] text-slate-400 mt-1">Health tracking</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Visual */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <PremiumProductVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

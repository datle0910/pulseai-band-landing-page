import { Sparkles, BatteryFull, Droplets, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import PremiumProductVisual from './PremiumProductVisual'

const badges = [
  { icon: Sparkles, label: 'AI Health Insight' },
  { icon: BatteryFull, label: 'Pin 10 ngày' },
  { icon: Droplets, label: 'IP68 Chống nước' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 bg-white dark:bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_50%)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 dark:opacity-50 opacity-80" />
        <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_50%)] rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 dark:opacity-50 opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4wNCkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-100 dark:opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content (6 columns on desktop) */}
          <motion.div
            className="text-center lg:text-left lg:col-span-6 flex flex-col items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-800 dark:text-slate-300 text-xs font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-700 shadow-sm">
                PulseAI Band
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp} 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            >
              Hiểu cơ thể bạn <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">trước khi cơ thể lên tiếng.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10">
              Vòng tay thông minh theo dõi nhịp tim, giấc ngủ, vận động và đưa ra gợi ý sức khỏe cá nhân hóa bằng thuật toán AI tiên tiến.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto mb-10">
              <a
                href="#store"
                onClick={() => trackCtaClick('hero_explore')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-xl shadow-slate-900/20 dark:shadow-white/10 transition-all hover:scale-105"
              >
                Mua ngay
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                onClick={() => trackCtaClick('hero_features')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
              >
                Tìm hiểu thêm
              </a>
            </motion.div>

            {/* Trust Stats Row */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg border-t border-slate-200 dark:border-slate-800 pt-6">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5">
                  <badge.icon size={20} className="text-teal-500" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Mockup (6 columns on desktop) */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end mt-12 lg:mt-0"
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

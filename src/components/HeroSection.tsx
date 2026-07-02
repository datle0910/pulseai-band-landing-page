import { Sparkles, BatteryFull, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackCtaClick } from '../utils/tracking'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import Product3DMockup from './Product3DMockup'
const badges = [
  { icon: Sparkles, label: 'AI Health Tracking' },
  { icon: BatteryFull, label: 'Pin 10 ngày' },
  { icon: Droplets, label: 'Chống nước IP68' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_50%)] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_50%)] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40 dark:opacity-20 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-6 border border-teal-200/60 dark:border-teal-500/20"
            >
              <Sparkles size={14} />
              Công nghệ AI thế hệ mới
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Pulse<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">AI</span>{' '}
              Band
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              Vòng tay thông minh theo dõi sức khỏe bằng AI
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Hiểu cơ thể bạn tốt hơn mỗi ngày với công nghệ AI Health Tracking. Theo dõi nhịp tim, giấc ngủ và vận động – tất cả trong một thiết bị nhỏ gọn trên cổ tay.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                onClick={() => trackCtaClick('hero')}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
              >
                Khám phá tính năng
              </a>
              <a
                href="#specs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                Xem thông số
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 shadow-sm text-sm text-slate-600 dark:text-slate-300"
                >
                  <badge.icon size={16} className="text-teal-500" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Mockup - CSS 3D */}
          <motion.div
            className="flex justify-center lg:justify-end w-full"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Product3DMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

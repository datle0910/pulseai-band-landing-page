import { features } from '../data/features'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Premium Background with subtle noise */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100/80 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-4 border border-teal-200/60 dark:border-teal-500/20">
            Tính năng nổi bật
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Theo dõi sức khỏe toàn diện{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              trong một thiết bị nhỏ gọn
            </span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/40 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-teal-400/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 dark:group-hover:from-teal-400/5 dark:group-hover:to-cyan-400/5 transition-colors duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-full bg-teal-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-teal-100 dark:border-slate-700">
                <div className="absolute inset-0 bg-teal-400/20 dark:bg-teal-400/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <feature.icon size={20} className="text-teal-600 dark:text-teal-400 relative z-10" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

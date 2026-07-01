import { features } from '../data/features'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-950 dark:to-slate-900/80" />

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
              className="group relative bg-white dark:bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-200/60 dark:hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-shadow mb-5">
                <feature.icon size={22} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

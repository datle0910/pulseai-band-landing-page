import { specs } from '../data/specs'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { useSectionTracking } from '../hooks/useSectionTracking'

export default function SpecsSection() {
  const sectionRef = useSectionTracking(
    'specs',
    'Bạn đang xem thông số kỹ thuật của PulseAI Band.'
  )

  return (
    <section id="specs" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-900/80 dark:to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-4 border border-cyan-200/60 dark:border-cyan-500/20">
            Thông số kỹ thuật
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Thông số kỹ thuật{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              nổi bật
            </span>
          </h2>
        </motion.div>

        {/* Specs grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-200/60 dark:hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-shadow mb-4">
                <spec.icon size={20} className="text-white" />
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {spec.label}
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white">{spec.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { specs } from '../data/specs'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function SpecsSection() {
  // Key specs for the top row
  const keySpecs = [
    { title: '10 Days', subtitle: 'Thời lượng pin' },
    { title: 'IP68', subtitle: 'Chống nước & bụi' },
    { title: '1.8"', subtitle: 'AMOLED Display' },
    { title: '5.3', subtitle: 'Bluetooth' },
  ]

  return (
    <section id="specs" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Hoàn hảo đến <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800 dark:from-slate-300 dark:to-white">
              từng chi tiết.
            </span>
          </h2>
        </motion.div>

        {/* Key Specs Row */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-24 border-y border-slate-200/50 dark:border-slate-800/50 py-12"
        >
          {keySpecs.map((spec, idx) => (
            <motion.div key={idx} variants={fadeUp} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">
                {spec.title}
              </div>
              <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {spec.subtitle}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Specs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col border-t border-slate-200/60 dark:border-slate-800/60 pt-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <spec.icon className="w-5 h-5 text-teal-500" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{spec.label}</h3>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{spec.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

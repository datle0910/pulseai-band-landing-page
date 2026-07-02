import { features } from '../data/features'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 lg:mb-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Sức khỏe của bạn, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              được giải thích bằng dữ liệu.
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Không chỉ là những con số vô tri. PulseAI phân tích và đưa ra những gợi ý hành động cụ thể để bạn sống khỏe hơn mỗi ngày.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {(() => {
            const MainIcon = features[0]?.icon
            const MediumIcon = features[3]?.icon

            return (
              <>
                {/* Main Feature (Spans 2 columns, 2 rows) */}
                <motion.div
            variants={fadeUp}
            className="md:col-span-2 md:row-span-2 group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 dark:border-slate-800/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-10 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-auto shadow-lg shadow-teal-500/30">
              {MainIcon && <MainIcon className="w-8 h-8 text-white" />}
            </div>
            
            <div className="relative z-10 mt-12">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-3">
                {features[0]?.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                {features[0]?.description}
              </p>
            </div>
          </motion.div>

          {/* Small Features */}
          {features.slice(1, 3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-auto border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-500 transition-colors" />
                </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                  {feature.description}
                </p>
              </div>
            </motion.div>
            )
          })}

          {/* Medium Features (Span 2 columns horizontally on md) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 group relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-xl transition-all duration-500 overflow-hidden flex items-center"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_50%)]" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent" />
            
            <div className="relative z-10 flex gap-8 items-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 flex-shrink-0">
                {MediumIcon && <MediumIcon className="w-8 h-8 text-indigo-400" />}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {features[3]?.title}
                </h3>
                <p className="text-slate-400 max-w-sm">
                  {features[3]?.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Last feature */}
          {features.slice(4, 5).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-gradient-to-br from-teal-500 to-cyan-500 rounded-[2rem] p-8 border border-white/10 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-auto backdrop-blur-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-teal-50 line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
              </>
            )
          })()}
        </motion.div>
      </div>
    </section>
  )
}

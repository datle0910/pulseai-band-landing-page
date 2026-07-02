import { motion } from 'framer-motion'
import { Brain, Dumbbell, Award } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { testimonials } from '../data/testimonials'

export default function TrustSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Soft Glow decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Được thiết kế cho những người <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              muốn hiểu sức khỏe bằng dữ liệu
            </span>
          </h2>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          
          {/* Card 1: Dân văn phòng */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-slate-200/40 dark:shadow-none relative overflow-hidden"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6 border border-teal-500/20">
                <Brain size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Dân văn phòng</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Theo dõi mức độ căng thẳng (stress level) và chu kỳ giấc ngủ sau ngày dài làm việc căng thẳng trước màn hình máy tính.
              </p>
            </div>

            {/* Testimonial Quote Integration */}
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs italic text-slate-400 leading-relaxed mb-4">
                "{testimonials[0].quote}"
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{testimonials[0].name}</div>
                  <div className="text-[10px] text-slate-400 font-semibold">{testimonials[0].role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-teal-500">{testimonials[0].metric}</div>
                  <div className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">{testimonials[0].metricLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Người tập luyện */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-slate-200/40 dark:shadow-none relative overflow-hidden"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-6 border border-rose-500/20">
                <Dumbbell size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Người tập luyện</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Theo dõi sát sao nhịp tim khi vận động, tối ưu hóa thời gian phục hồi cơ bắp và nâng cao hiệu suất qua chỉ số Recovery Score.
              </p>
            </div>

            {/* Testimonial Quote Integration */}
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs italic text-slate-400 leading-relaxed mb-4">
                "{testimonials[1].quote}"
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{testimonials[1].name}</div>
                  <div className="text-[10px] text-slate-400 font-semibold">{testimonials[1].role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-rose-500">{testimonials[1].metric}</div>
                  <div className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">{testimonials[1].metricLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Người ngủ kém */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-slate-200/40 dark:shadow-none relative overflow-hidden"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 mb-6 border border-violet-500/20">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Người ngủ kém</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                Hiểu chất lượng ngủ chuyên sâu qua phân tích các chu kỳ giấc ngủ và đề xuất điều chỉnh hành vi của AI Assistant.
              </p>
            </div>

            {/* Testimonial Quote Integration */}
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs italic text-slate-400 leading-relaxed mb-4">
                "{testimonials[2].quote}"
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{testimonials[2].name}</div>
                  <div className="text-[10px] text-slate-400 font-semibold">{testimonials[2].role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-violet-500">{testimonials[2].metric}</div>
                  <div className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">{testimonials[2].metricLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

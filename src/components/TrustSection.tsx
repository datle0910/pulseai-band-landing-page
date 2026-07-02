import { motion } from 'framer-motion'
import { Brain, Dumbbell, Award } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { testimonials } from '../data/testimonials'

export default function TrustSection() {
  const categories = [
    {
      title: 'Dân văn phòng',
      desc: 'Theo dõi stress và giấc ngủ sau ngày dài làm việc căng thẳng.',
      icon: Brain,
      iconColor: 'text-[#00A99D] dark:text-[#2DD4BF]',
      iconBg: 'bg-teal-500/10 border-teal-500/20',
      data: testimonials[0],
    },
    {
      title: 'Người tập luyện',
      desc: 'Theo dõi nhịp tim, phục hồi và mức độ vận động tối ưu hằng ngày.',
      icon: Dumbbell,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      data: testimonials[1],
    },
    {
      title: 'Người ngủ kém',
      desc: 'Hiểu chất lượng ngủ qua Sleep Score và gợi ý cải thiện thói quen.',
      icon: Award,
      iconColor: 'text-violet-500',
      iconBg: 'bg-violet-500/10 border-violet-500/20',
      data: testimonials[2],
    },
  ]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F7FA] dark:bg-[#020617] transition-colors duration-300">
      
      {/* Background glow decoration */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
            Đo lường cuộc sống.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]">
              Hiểu rõ bản thân.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto">
            Được thiết kế cho những người muốn hiểu sức khỏe bằng dữ liệu.
          </p>
        </motion.div>

        {/* Dynamic Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white dark:bg-[#0B1220] border border-slate-200/50 dark:border-slate-800/80 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconBg} ${cat.iconColor} border mb-6`}>
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                  {cat.desc}
                </p>
              </div>

              {/* Testimonial Quote Integration */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                <blockquote className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed mb-5 font-semibold">
                  "{cat.data.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">{cat.data.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{cat.data.role}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-base font-black font-tabular ${cat.iconColor}`}>{cat.data.metric}</div>
                    <div className="text-[8px] uppercase tracking-widest text-slate-400 font-black mt-0.5">{cat.data.metricLabel}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

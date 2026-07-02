import { Sunrise, Sun, Sunset, Moon } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const storyItems = [
  {
    icon: Sunrise,
    time: 'Morning',
    title: 'Khởi đầu ngày mới hoàn hảo',
    description: 'PulseAI đánh thức bạn ở chu kỳ ngủ nông, giúp bạn thức dậy tỉnh táo. Sleep Score 86/100 hiện lên ngay trên màn hình.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-500/10'
  },
  {
    icon: Sun,
    time: 'Workday',
    title: 'Theo dõi từng nhịp đập',
    description: 'Stress tăng cao trước cuộc họp quan trọng? PulseAI nhận diện qua nhịp tim và nhắc nhở bạn thực hiện 1 phút hít thở sâu.',
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-500/10'
  },
  {
    icon: Sunset,
    time: 'Evening',
    title: 'Tối ưu hóa tập luyện',
    description: 'Dựa trên năng lượng còn lại, AI gợi ý một buổi chạy nhẹ 30 phút thay vì tập nặng, giúp cơ thể phục hồi tốt hơn.',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-500/10'
  },
  {
    icon: Moon,
    time: 'Night',
    title: 'Phân tích giấc ngủ sâu',
    description: 'Cảm biến SpO2 và nhịp tim hoạt động liên tục trong đêm, vẽ nên biểu đồ giấc ngủ chính xác đến từng phút.',
    color: 'from-indigo-400 to-blue-500',
    bg: 'bg-indigo-500/10'
  },
]

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  return (
    <section id="story" className="relative bg-slate-50 dark:bg-slate-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Một ngày được tối ưu bởi AI.
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 via-teal-400 to-indigo-500"
              style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>

          <div className="space-y-24">
            {storyItems.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center justify-between flex-col sm:flex-row ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  
                  {/* Empty space for grid alignment on desktop */}
                  <div className="hidden sm:block sm:w-[45%]" />

                  {/* Center Node */}
                  <div className="absolute left-[27px] sm:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-950 shadow-xl flex items-center justify-center z-10">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[45%] pl-20 sm:pl-0 ${isEven ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'}`}>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-shadow">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${item.bg} text-slate-800 dark:text-white mb-4`}>
                        {item.time}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

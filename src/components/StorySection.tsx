import { Sunrise, Sun, Sunset, Moon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { useSectionTracking } from '../hooks/useSectionTracking'

interface StoryItem {
  icon: LucideIcon
  time: string
  title: string
  description: string
  metric: string
  metricLabel: string
  insight: string
  iconColor: string
  iconBg: string
  darkIconBg: string
}

const storyItems: StoryItem[] = [
  {
    icon: Sunrise,
    time: 'Buổi sáng — 07:00',
    title: 'Báo cáo giấc ngủ (Sleep Report)',
    description:
      'PulseAI Band phát hiện chu kỳ giấc ngủ nông và rung nhẹ đánh thức bạn đúng lúc để cơ thể tỉnh táo nhất.',
    metric: '86 / 100',
    metricLabel: 'Chất lượng ngủ',
    insight: 'Thời gian ngủ sâu đạt 2h 14m, tăng 12% so với hôm qua.',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    darkIconBg: 'dark:bg-amber-500/10',
  },
  {
    icon: Sun,
    time: 'Ban ngày — 14:00',
    title: 'Theo dõi Stress và Vận động',
    description:
      'Liên tục giám sát biến thiên nhịp tim (HRV) và mức độ căng thẳng của bạn khi làm việc tại văn phòng.',
    metric: 'Stress: Thấp',
    metricLabel: 'Trạng thái tinh thần',
    insight: 'AI đề xuất nghỉ 5 phút hoặc tập thở sâu để giảm nhịp tim.',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-50',
    darkIconBg: 'dark:bg-teal-500/10',
  },
  {
    icon: Sunset,
    time: 'Buổi chiều — 18:00',
    title: 'Vùng nhịp tim tập luyện (HR Zones)',
    description:
      'Theo dõi chính xác nhịp tim khi chạy bộ hoặc nâng tạ, chỉ ra khi nào bạn đang ở vùng đốt mỡ (Fat Burn).',
    metric: '142 BPM',
    metricLabel: 'Nhịp tim tập luyện',
    insight: 'Bạn đã duy trì 25 phút trong vùng Cardio tối ưu.',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
    darkIconBg: 'dark:bg-violet-500/10',
  },
  {
    icon: Moon,
    time: 'Ban đêm — 22:30',
    title: 'Kế hoạch phục hồi (Recovery Plan)',
    description:
      'AI tính toán độ mệt mỏi cơ bắp và đề xuất lịch ngủ lý tưởng trước 23:00 để cơ thể sẵn sàng cho ngày mới.',
    metric: '82% Sẵn sàng',
    metricLabel: 'Chỉ số phục hồi',
    insight: 'Đề xuất: Ngủ trước 22:45 để đạt 90% phục hồi vào ngày mai.',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    darkIconBg: 'dark:bg-indigo-500/10',
  },
]

export default function StorySection() {
  const sectionRef = useSectionTracking('story', 'Bạn đang xem trải nghiệm một ngày cùng PulseAI Band.')

  return (
    <section id="story" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 text-xs font-bold uppercase tracking-wider mb-4 border border-violet-200/50 dark:border-violet-900/40">
            Trải nghiệm thực tế
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Một ngày thông minh hơn cùng <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              PulseAI Band
            </span>
          </h2>
        </motion.div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical Timeline center line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-teal-200/40 to-slate-200 dark:from-slate-800 dark:via-teal-900/20 dark:to-slate-800" />

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {storyItems.map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="relative flex gap-6 sm:gap-8 group">
                
                {/* Left Timeline Icon Container */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-3xl ${item.iconBg} ${item.darkIconBg} border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}
                  >
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                </div>

                {/* Content Card Right */}
                <div className="flex-1 pb-4 border-b border-slate-100 dark:border-slate-800/80 last:border-none">
                  <div className="group-hover:-translate-y-0.5 transition-transform duration-300">
                    
                    <span className={`inline-block text-[10px] font-black ${item.iconColor} uppercase tracking-widest mb-1.5`}>
                      {item.time}
                    </span>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Integrated Micro Visual metric box */}
                    <div className="inline-flex flex-wrap items-center gap-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/60 rounded-2xl p-4 w-full sm:w-auto">
                      <div className="pr-4 border-r border-slate-200 dark:border-slate-800">
                        <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">{item.metricLabel}</div>
                        <div className={`text-sm font-extrabold mt-0.5 ${item.iconColor}`}>{item.metric}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Gợi ý từ AI</div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-300 mt-0.5">{item.insight}</div>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

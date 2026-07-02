import { Sunrise, Sun, Sunset, Moon, Heart, Zap, Sparkles } from 'lucide-react'
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
  type: 'morning' | 'workday' | 'training' | 'night'
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
    type: 'morning',
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
    type: 'workday',
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
    type: 'training',
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
    type: 'night',
  },
]

export default function StorySection() {
  const sectionRef = useSectionTracking('story', 'Bạn đang xem trải nghiệm một ngày cùng PulseAI Band.')

  return (
    <section id="story" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background radial layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,169,157,0.02),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
            Một ngày thông minh hơn cùng <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]">
              PulseAI Band
            </span>
          </h2>
        </motion.div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical Timeline center line */}
          <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-teal-200/40 to-slate-200 dark:from-slate-800/80 dark:via-teal-900/20 dark:to-slate-850" />

          <motion.div
            className="space-y-16"
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
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.iconBg} ${item.darkIconBg} border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}
                  >
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                </div>

                {/* Content Card Right */}
                <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-900 last:border-none">
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    
                    {/* Descriptions */}
                    <div className="md:col-span-8 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <span className={`inline-block text-[10px] font-black ${item.iconColor} uppercase tracking-widest mb-1.5`}>
                        {item.time}
                      </span>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 font-medium">
                        {item.description}
                      </p>

                      {/* Integrated Micro Visual metric box */}
                      <div className="inline-flex flex-wrap items-center gap-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/60 rounded-2xl p-4 w-full sm:w-auto">
                        <div className="pr-4 border-r border-slate-200 dark:border-slate-800">
                          <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">{item.metricLabel}</span>
                          <span className={`text-xs font-black font-tabular block mt-0.5 ${item.iconColor}`}>{item.metric}</span>
                        </div>
                        <div>
                          <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Gợi ý từ AI</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-300 block mt-0.5">{item.insight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mini Smartband Mockup Visual */}
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                      <div className="w-24 h-32 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 p-1 shadow-md border border-white/10 flex items-center justify-center shrink-0">
                        <div className="w-full h-full rounded-xl bg-black p-1 flex flex-col justify-between items-center py-3 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-xl" />
                          <span className="text-[6px] text-slate-500 font-black tracking-widest uppercase">PulseAI</span>
                          
                          {/* Mini Display content according to milestone type */}
                          {item.type === 'morning' && (
                            <div className="my-auto flex flex-col items-center">
                              <Moon size={16} className="text-violet-500 fill-violet-500/20 animate-pulse" />
                              <span className="text-sm font-black text-white mt-1 font-tabular">86</span>
                              <span className="text-[5px] text-slate-500 uppercase font-bold tracking-wider">Sleep</span>
                            </div>
                          )}
                          
                          {item.type === 'workday' && (
                            <div className="my-auto flex flex-col items-center">
                              <Zap size={16} className="text-teal-400 animate-pulse" />
                              <span className="text-[8px] font-black text-white mt-1 uppercase">Stress: Low</span>
                              <span className="text-[5px] text-slate-500 uppercase font-bold tracking-wider">HRV 48ms</span>
                            </div>
                          )}
                          
                          {item.type === 'training' && (
                            <div className="my-auto flex flex-col items-center">
                              <Heart size={16} className="text-rose-500 fill-rose-500 animate-pulse" />
                              <span className="text-sm font-black text-white mt-1 font-tabular">142</span>
                              <span className="text-[5px] text-slate-500 uppercase font-bold tracking-wider">Cardio</span>
                            </div>
                          )}

                          {item.type === 'night' && (
                            <div className="my-auto flex flex-col items-center">
                              <Sparkles size={16} className="text-indigo-400 animate-pulse" />
                              <span className="text-sm font-black text-white mt-1 font-tabular">82%</span>
                              <span className="text-[5px] text-slate-500 uppercase font-bold tracking-wider">Recovery</span>
                            </div>
                          )}

                          {/* Strap indicators */}
                          <div className="w-5 h-0.5 bg-slate-700 rounded-full" />
                        </div>
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

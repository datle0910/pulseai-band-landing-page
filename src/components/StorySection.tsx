import { Sunrise, Sun, Sunset, Moon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface StoryItem {
  icon: LucideIcon
  time: string
  title: string
  description: string
  iconColor: string
  iconBg: string
  darkIconBg: string
}

const storyItems: StoryItem[] = [
  {
    icon: Sunrise,
    time: 'Buổi sáng',
    title: 'Đánh thức nhẹ nhàng',
    description:
      'PulseAI Band phát hiện giấc ngủ nông và rung nhẹ đánh thức bạn đúng lúc. Bạn mở mắt, nhìn Sleep Score 86 điểm hiển thị ngay trên cổ tay.',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    darkIconBg: 'dark:bg-amber-500/10',
  },
  {
    icon: Sun,
    time: 'Ban ngày',
    title: 'Theo dõi mọi hoạt động',
    description:
      'Từ cuộc họp đến buổi tập gym, PulseAI Band liên tục theo dõi nhịp tim, bước chân và mức độ căng thẳng. Khi stress tăng cao, AI gợi ý bạn nghỉ ngơi.',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-50',
    darkIconBg: 'dark:bg-teal-500/10',
  },
  {
    icon: Sunset,
    time: 'Buổi tối',
    title: 'Gợi ý thư giãn thông minh',
    description:
      'Dựa trên dữ liệu cả ngày, PulseAI Band đề xuất bài tập thở hoặc yoga nhẹ để cơ thể bạn chuẩn bị cho giấc ngủ chất lượng hơn.',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
    darkIconBg: 'dark:bg-violet-500/10',
  },
  {
    icon: Moon,
    time: 'Ban đêm',
    title: 'Phân tích giấc ngủ sâu',
    description:
      'Trong khi bạn ngủ, AI phân tích từng giai đoạn giấc ngủ sâu, nông và REM. Sáng hôm sau, báo cáo chi tiết đã sẵn sàng cho ngày mới.',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    darkIconBg: 'dark:bg-indigo-500/10',
  },
]

export default function StorySection() {
  return (
    <section id="story" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/20 to-slate-50/80 dark:from-slate-950 dark:via-teal-900/10 dark:to-slate-900/80" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100/80 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 text-xs font-semibold mb-4 border border-violet-200/60 dark:border-violet-500/20">
            Trải nghiệm
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Một ngày thông minh hơn cùng{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              PulseAI Band
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-teal-200 to-slate-200 dark:from-slate-800 dark:via-teal-800/50 dark:to-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {storyItems.map((item, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8 group">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.iconBg} ${item.darkIconBg} border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}
                  >
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-2">
                  <div className="group-hover:-translate-y-0.5 transition-transform duration-300">
                    <span className={`inline-block text-xs font-bold ${item.iconColor} uppercase tracking-wider mb-1`}>
                      {item.time}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

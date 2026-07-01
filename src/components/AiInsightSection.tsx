import { Moon, Heart, Zap } from 'lucide-react'

const metrics = [
  { icon: Moon, label: 'Sleep Score', value: '86', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Heart, label: 'Heart Rate', value: '72 bpm', color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { icon: Zap, label: 'Recovery', value: 'Good', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-4 border border-teal-500/20">
              AI Health Insight
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              AI Health Insight giúp bạn{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                hiểu cơ thể mình rõ hơn
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
              PulseAI Band phân tích dữ liệu nhịp tim, giấc ngủ và vận động hằng ngày để đưa ra gợi ý cá nhân hóa, giúp bạn cải thiện thói quen sống một cách khoa học hơn.
            </p>

            {/* Metrics */}
            <div className="mt-8 flex flex-wrap gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className={`w-10 h-10 rounded-xl ${metric.bg} flex items-center justify-center`}>
                    <metric.icon size={18} className={metric.color} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-sm font-bold text-white">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* Main insight card */}
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide">AI Insight</span>
                </div>

                <p className="text-white font-medium leading-relaxed">
                  Giấc ngủ sâu giảm <span className="text-amber-400 font-bold">18%</span> so với trung bình tuần.
                </p>

                <div className="mt-4 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <p className="text-sm text-teal-300 leading-relaxed">
                    <span className="font-semibold">💡 Gợi ý:</span> Hạn chế caffeine sau 16:00 và thư giãn 10 phút trước khi ngủ.
                  </p>
                </div>

                {/* Sleep chart mock */}
                <div className="mt-6">
                  <div className="flex items-end justify-between gap-1.5 h-20">
                    {[40, 65, 55, 80, 45, 70, 60, 85, 50, 75, 90, 55].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/60 to-cyan-400/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-slate-500">22:00</span>
                    <span className="text-[10px] text-slate-500">02:00</span>
                    <span className="text-[10px] text-slate-500">06:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

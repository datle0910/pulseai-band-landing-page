import { Moon, Heart, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'

const metrics = [
  { icon: Moon, label: 'Sleep Score', value: '86', color: 'text-violet-400', bg: 'bg-violet-500/10' },
  { icon: Heart, label: 'Heart Rate', value: '72 bpm', color: 'text-rose-400', bg: 'bg-rose-500/10' },
  { icon: Zap, label: 'Recovery', value: 'Good', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_50%)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_50%)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-4 border border-teal-500/20">
              AI Health Insight
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              AI Health Insight giúp bạn{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                hiểu cơ thể mình rõ hơn
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
              PulseAI Band phân tích dữ liệu nhịp tim, giấc ngủ và vận động hằng ngày để đưa ra gợi ý cá nhân hóa, giúp bạn cải thiện thói quen sống một cách khoa học hơn.
            </motion.p>

            {/* Metrics */}
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 backdrop-blur-md transition-colors shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center border border-white/5`}>
                    <metric.icon size={20} className={metric.color} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium mb-1">{metric.label}</div>
                    <div className="text-base font-bold text-white">{metric.value}</div>
                    <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${metric.bg.replace('/10', '')} opacity-80`} style={{ width: '70%' }} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard mock */}
          <motion.div
            className="flex justify-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative w-full max-w-md">
              {/* Glow behind dashboard */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-2xl -z-10 rounded-[2rem]" />
              
              {/* Main insight card */}
              <div className="relative rounded-[2rem] bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* Decorative reflection */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Live AI Analysis</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Hôm nay</div>
                </div>

                <p className="text-white text-lg font-medium leading-relaxed mb-6">
                  Giấc ngủ sâu giảm <span className="text-amber-400 font-bold">18%</span> so với trung bình tuần.
                </p>

                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 shadow-[inset_0_0_20px_rgba(20,184,166,0.05)]">
                  <div className="flex gap-3">
                    <span className="text-teal-400 text-lg">💡</span>
                    <p className="text-sm text-teal-100/90 leading-relaxed">
                      <span className="font-semibold text-teal-300 block mb-1">Gợi ý từ PulseAI:</span>
                      Hạn chế caffeine sau 16:00 và thư giãn 10 phút trước khi ngủ để cải thiện chất lượng nghỉ ngơi.
                    </p>
                  </div>
                </div>

                {/* Sleep chart mock */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-xs text-slate-400 font-medium mb-4 flex items-center justify-between">
                    <span>Chu kỳ giấc ngủ</span>
                    <span className="text-indigo-400">7h 24m</span>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-24">
                    {[40, 65, 55, 80, 45, 70, 60, 85, 50, 75, 90, 55].map((h, i) => (
                      <div
                        key={i}
                        className="group relative flex-1 flex flex-col justify-end h-full"
                      >
                        <div 
                          className="w-full rounded-sm bg-gradient-to-t from-teal-500/80 to-cyan-400/80 group-hover:from-teal-400 group-hover:to-cyan-300 transition-colors shadow-[0_0_10px_rgba(20,184,166,0.2)]"
                          style={{ height: `${h}%` }} 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 px-1">
                    <span className="text-[10px] text-slate-500 font-medium">22:00</span>
                    <span className="text-[10px] text-slate-500 font-medium">02:00</span>
                    <span className="text-[10px] text-slate-500 font-medium">06:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

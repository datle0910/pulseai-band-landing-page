import { motion } from 'framer-motion'
import { Sparkles, Moon, Heart, Zap, Activity, Brain } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import { healthMetrics } from '../data/healthMetrics'

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 transition-colors duration-300">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Left (lg:col-span-5) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/20"
            >
              <Brain size={14} />
              AI Health Insight
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
            >
              Cá nhân hóa tối đa nhờ{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                trợ lý sức khỏe AI
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-slate-400 leading-relaxed"
            >
              Không chỉ hiển thị những chỉ số vô hồn. PulseAI phân tích mối liên hệ phức tạp giữa giấc ngủ sâu, biến thiên nhịp tim (HRV) và cường độ hoạt động để đưa ra những phân tích cụ thể nhất dành riêng cho bạn.
            </motion.p>

            {/* Quick Metrics grid */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-4 w-full"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <Moon size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Sleep Score</div>
                  <div className="text-sm font-extrabold text-white">{healthMetrics.sleepScore}</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <Heart size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Resting HR</div>
                  <div className="text-sm font-extrabold text-white">{healthMetrics.restingHeartRate} bpm</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Recovery</div>
                  <div className="text-sm font-extrabold text-white">{healthMetrics.recovery}%</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Stress Level</div>
                  <div className="text-sm font-extrabold text-white">{healthMetrics.stressLevel}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Graphic Dashboard Right (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 flex justify-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="w-full max-w-lg bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black relative overflow-hidden">
              
              {/* Outer Decorative glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />

              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Dashboard Mockup</span>
                </div>
                <div className="text-xs text-slate-500 font-semibold">Cập nhật: Vừa xong</div>
              </div>

              {/* AI Recommendation Widget */}
              <div className="bg-teal-950/20 border border-teal-500/30 rounded-2xl p-5 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 text-teal-500/20">
                  <Sparkles size={36} />
                </div>
                <div className="flex items-center gap-2 text-teal-400 font-extrabold text-xs uppercase tracking-wider mb-2">
                  <Sparkles size={14} className="text-teal-400" />
                  AI Coach Đề Xuất
                </div>
                <p className="text-sm text-teal-100/90 leading-relaxed font-medium">
                  "{healthMetrics.aiInsight}"
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Weekly Sleep Trend Chart */}
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">Chất lượng giấc ngủ (%)</div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {healthMetrics.weeklySleepTrend.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-violet-500 to-indigo-400 rounded-t-sm"
                          style={{ height: `${(val / 100) * 80}px` }}
                        />
                        <span className="text-[9px] text-slate-600 font-bold">
                          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly Activity bars */}
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">Vận động (Phút)</div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {healthMetrics.weeklyActivity.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t-sm"
                          style={{ height: `${(val / 100) * 80}px` }}
                        />
                        <span className="text-[9px] text-slate-600 font-bold">
                          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][idx]}
                        </span>
                      </div>
                    ))}
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

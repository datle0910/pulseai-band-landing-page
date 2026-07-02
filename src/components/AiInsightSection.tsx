import { motion } from 'framer-motion'
import { Sparkles, Moon, Heart, Zap, Activity, Brain, ArrowUpRight, Compass } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportConfig } from '../utils/animations'
import { healthMetrics } from '../data/healthMetrics'

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 transition-colors duration-300">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.06),transparent_50%)] pointer-events-none" />
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
            {/* Top Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles size={13} className="animate-pulse" />
              AI Health Insight
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] tracking-tighter"
            >
              Cá nhân hóa tối đa nhờ{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                trợ lý sức khỏe AI
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm text-slate-400 leading-relaxed font-medium"
            >
              Không chỉ hiển thị những chỉ số vô hồn. PulseAI phân tích mối liên hệ phức tạp giữa giấc ngủ sâu, biến thiên nhịp tim (HRV) và cường độ hoạt động để đưa ra những phân tích cụ thể nhất dành riêng cho bạn.
            </motion.p>

            {/* Bullet Insights */}
            <motion.div
              variants={fadeUp}
              className="mt-8 space-y-4 w-full text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <Brain size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-200 uppercase tracking-wider">Phân tích HRV</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-medium">Biến thiên nhịp tim (HRV) để đo lường mức độ căng thẳng của hệ thần kinh tự chủ.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <Compass size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-200 uppercase tracking-wider">Tối ưu giấc ngủ</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-medium">Nhận diện chu kỳ giấc ngủ sâu giúp bạn ngủ ngon hơn và thức dậy tỉnh táo.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Graphic Dashboard Right (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 flex justify-center w-full"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="w-full max-w-xl bg-slate-950/80 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black relative overflow-hidden backdrop-blur-md">
              
              {/* Outer Decorative glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Dashboard Visual</span>
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Cập nhật: Vừa xong</div>
              </div>

              {/* Live Metric Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Moon className="w-4 h-4 text-violet-400 mx-auto mb-1.5" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase block tracking-wider">Sleep</span>
                  <span className="text-sm font-black text-white font-tabular">{healthMetrics.sleepScore}</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Heart className="w-4 h-4 text-rose-400 mx-auto mb-1.5 fill-rose-400/20" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase block tracking-wider">Heart Rate</span>
                  <span className="text-sm font-black text-white font-tabular">{healthMetrics.currentHeartRate}</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Zap className="w-4 h-4 text-teal-400 mx-auto mb-1.5" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase block tracking-wider">HRV</span>
                  <span className="text-sm font-black text-white font-tabular">{healthMetrics.hrv}</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <Sparkles className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase block tracking-wider">Recovery</span>
                  <span className="text-sm font-black text-white font-tabular">{healthMetrics.recovery}%</span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                  <Activity className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
                  <span className="text-[8px] text-slate-500 font-bold uppercase block tracking-wider">Stress</span>
                  <span className="text-sm font-black text-white">{healthMetrics.stressLevel}</span>
                </div>
              </div>

              {/* AI Recommendation Card */}
              <div className="bg-teal-950/20 border border-teal-500/30 rounded-2xl p-5 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 text-teal-500/10 pointer-events-none">
                  <Sparkles size={36} />
                </div>
                <div className="flex items-center gap-1.5 text-teal-400 font-black text-[10px] uppercase tracking-wider mb-2">
                  <Sparkles size={12} className="text-teal-400" />
                  AI Coach Đề Xuất
                </div>
                <p className="text-xs text-teal-100/90 leading-relaxed font-semibold">
                  "{healthMetrics.aiInsight}"
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Weekly Sleep Trend Chart */}
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Giấc ngủ (%)</span>
                    <ArrowUpRight size={14} className="text-slate-600" />
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-24 pt-2">
                    {healthMetrics.weeklySleepTrend.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-violet-500 to-indigo-400 rounded-t-sm"
                          style={{ height: `${(val / 100) * 80}px` }}
                        />
                        <span className="text-[8px] text-slate-600 font-bold">
                          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly Activity bars */}
                <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-wider">Vận động (Phút)</span>
                    <ArrowUpRight size={14} className="text-slate-600" />
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-24 pt-2">
                    {healthMetrics.weeklyActivity.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t-sm"
                          style={{ height: `${(val / 100) * 80}px` }}
                        />
                        <span className="text-[8px] text-slate-600 font-bold">
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

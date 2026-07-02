import { motion } from 'framer-motion'
import { BrainCircuit, Activity, Moon, BatteryCharging, TrendingUp } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              <span className="text-teal-400 font-bold uppercase tracking-widest text-xs">Live AI Analysis</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Huấn luyện viên <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">cá nhân của riêng bạn.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed mb-10">
              Không chỉ thống kê những con số vô tri. Thuật toán AI độc quyền liên tục phân tích thói quen sinh hoạt để đưa ra những lời khuyên kịp thời, chính xác giúp bạn tối ưu hóa sức khỏe.
            </motion.p>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <BrainCircuit className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Dự báo thông minh</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Cảnh báo sớm các dấu hiệu kiệt sức trước khi bạn cảm nhận được bằng cách phân tích nhịp tim nghỉ ngơi.</p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white font-bold mb-2">Cá nhân hóa</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Lời khuyên luyện tập điều chỉnh mỗi ngày dựa trên điểm số phục hồi và chất lượng giấc ngủ đêm qua.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={viewportConfig}
            className="order-1 lg:order-2 relative"
          >
            {/* Dashboard Container */}
            <div className="relative rounded-[2.5rem] bg-slate-900/80 backdrop-blur-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-black/80 ring-1 ring-white/10">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
              
              {/* Dashboard Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-5">
                
                {/* Score Card (Full width) */}
                <div className="col-span-2 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 sm:p-8 shadow-lg shadow-teal-500/20 flex justify-between items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                  <div className="relative z-10">
                    <h3 className="text-teal-100 font-bold uppercase tracking-widest text-xs mb-2">Độ phục hồi (Readiness)</h3>
                    <div className="text-5xl sm:text-6xl font-black text-white">92<span className="text-2xl opacity-70">/100</span></div>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30 relative z-10 shadow-xl">
                    <BatteryCharging className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                {/* AI Recommendation (Full width) */}
                <div className="col-span-2 bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="w-5 h-5 text-teal-400" />
                    <span className="text-white font-bold text-sm">AI Coach Đề Xuất</span>
                  </div>
                  <div className="pl-7 border-l-2 border-teal-500/50">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Cơ thể bạn đã phục hồi hoàn toàn sau bài tập hôm qua. Nhịp tim nghỉ (58 bpm) rất ổn định. Hôm nay là thời điểm lý tưởng để chạy bộ 5km hoặc tập HIIT cường độ cao.
                    </p>
                  </div>
                </div>

                {/* Sleep Score (Half width) */}
                <div className="col-span-1 bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">Giấc Ngủ</span>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-3">8h 15m</div>
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden flex">
                      <div className="h-full bg-indigo-500 w-[20%]" title="Deep" />
                      <div className="h-full bg-indigo-400 w-[55%]" title="Light" />
                      <div className="h-full bg-indigo-300 w-[25%]" title="REM" />
                    </div>
                  </div>
                </div>

                {/* Weekly Activity (Half width) */}
                <div className="col-span-1 bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-4 h-4 text-rose-400" />
                    <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">Vận Động Tuần</span>
                  </div>
                  <div className="flex items-end justify-between h-12 gap-1.5 opacity-90">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="w-full bg-slate-600 rounded-sm relative group cursor-pointer transition-all hover:bg-rose-500" style={{ height: `${h}%` }}>
                        {i === 3 && <div className="absolute -top-1 left-0 w-full h-1 bg-rose-500 rounded-t-sm" />}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
            {/* Decoration lines behind dashboard */}
            <div className="absolute top-1/2 -right-12 w-24 h-[2px] bg-gradient-to-r from-teal-500/50 to-transparent -z-10" />
            <div className="absolute top-2/3 -left-12 w-24 h-[2px] bg-gradient-to-l from-cyan-500/50 to-transparent -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

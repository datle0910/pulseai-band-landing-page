import { motion } from 'framer-motion'
import { BrainCircuit, Activity, Moon, BatteryCharging } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function AiInsightSection() {
  return (
    <section id="ai-insight" className="relative py-24 sm:py-32 overflow-hidden bg-slate-900">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] opacity-50" />

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
              cá nhân của riêng bạn.
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed mb-8">
              Thuật toán AI độc quyền liên tục phân tích hàng triệu điểm dữ liệu sinh trắc học để đưa ra những lời khuyên kịp thời, chính xác dành riêng cho bạn.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Dự báo thông minh</h4>
                  <p className="text-slate-400 text-sm">Cảnh báo sớm các dấu hiệu kiệt sức trước khi bạn cảm nhận được.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Cá nhân hóa</h4>
                  <p className="text-slate-400 text-sm">Lời khuyên luyện tập điều chỉnh mỗi ngày dựa trên độ phục hồi cơ thể.</p>
                </div>
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
            <div className="relative rounded-[2.5rem] bg-slate-900/50 backdrop-blur-2xl border border-slate-700/50 p-6 sm:p-8 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6">
                
                {/* Score Card (Full width) */}
                <div className="col-span-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-6 shadow-lg shadow-teal-500/20 flex justify-between items-center">
                  <div>
                    <h3 className="text-white/80 font-semibold mb-1">Sẵn Sàng</h3>
                    <div className="text-5xl font-black text-white">92<span className="text-2xl opacity-70">/100</span></div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <BatteryCharging className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* AI Recommendation (Full width) */}
                <div className="col-span-2 bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="w-5 h-5 text-teal-400" />
                    <span className="text-white font-bold text-sm">Gợi ý từ AI</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Cơ thể bạn đã phục hồi hoàn toàn sau bài tập hôm qua. Hôm nay là thời điểm lý tưởng để chạy bộ 5km hoặc tập HIIT.
                  </p>
                </div>

                {/* Sleep Score (Half width) */}
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span className="text-slate-300 font-semibold text-sm">Giấc Ngủ</span>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">8h 15m</div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden flex">
                      <div className="h-full bg-indigo-500 w-[20%]" />
                      <div className="h-full bg-indigo-400 w-[55%]" />
                      <div className="h-full bg-indigo-300 w-[25%]" />
                    </div>
                  </div>
                </div>

                {/* Heart Rate Trend (Half width) */}
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-4 h-4 text-rose-400" />
                    <span className="text-slate-300 font-semibold text-sm">Nhịp Tim</span>
                  </div>
                  <div>
                    <div className="flex items-end gap-1 mb-2">
                      <div className="text-3xl font-black text-white leading-none">68</div>
                      <div className="text-slate-500 font-bold text-sm mb-1">bpm</div>
                    </div>
                    {/* Simple CSS Chart */}
                    <div className="flex items-end justify-between h-8 gap-1 opacity-80">
                      {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <div key={i} className="w-full bg-rose-500/50 hover:bg-rose-400 rounded-sm transition-all" style={{ height: `${h}%` }} />
                      ))}
                    </div>
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

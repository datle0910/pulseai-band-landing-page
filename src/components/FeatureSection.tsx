import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { Heart, Moon, Activity, Brain, BatteryFull, ShieldAlert } from 'lucide-react'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Mọi dữ liệu sức khỏe. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Ngay trên cổ tay bạn.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Trang bị các cảm biến quang học tiên tiến nhất, PulseAI Band không bỏ sót bất kỳ nhịp đập nào.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8 auto-rows-[240px] sm:auto-rows-[280px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          
          {/* 1. Big Card: AI Health Insight (Span 4 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-4 group relative bg-slate-900 rounded-[2.5rem] p-8 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[80%] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent_60%)]" />
            
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
              <Brain className="w-7 h-7 text-white" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
              <div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">AI Health Insight</h3>
                <p className="text-slate-400 leading-relaxed">
                  Thuật toán AI phân tích hàng triệu điểm dữ liệu sinh trắc học mỗi ngày để đưa ra lời khuyên cá nhân hóa, giúp bạn tập luyện và phục hồi tốt hơn.
                </p>
              </div>
              
              {/* Internal UI Element: AI Suggestion Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Live AI Suggestion</span>
                </div>
                <p className="text-sm font-medium text-white line-clamp-3">
                  "Cơ thể bạn đã phục hồi 92%. Rất thích hợp cho một buổi tập HIIT 30 phút vào chiều nay."
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Medium Card: Sleep Tracking (Span 2 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-2 group relative bg-indigo-950 rounded-[2.5rem] p-8 border border-indigo-900/50 shadow-xl overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <Moon className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-2xl font-black text-white">8h 15m</div>
            </div>

            {/* Internal UI: Sleep stages bar */}
            <div className="relative z-10 w-full mb-6">
              <div className="w-full h-3 bg-indigo-900 rounded-full overflow-hidden flex">
                <div className="h-full bg-indigo-400 w-[20%]" title="Deep" />
                <div className="h-full bg-indigo-500 w-[50%]" title="Light" />
                <div className="h-full bg-indigo-300 w-[30%]" title="REM" />
              </div>
              <div className="flex justify-between text-[10px] text-indigo-300 mt-2 font-bold uppercase">
                <span>Deep</span>
                <span>Light</span>
                <span>REM</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Giấc ngủ</h3>
              <p className="text-sm text-indigo-200/70 line-clamp-2">Theo dõi chi tiết các giai đoạn giấc ngủ.</p>
            </div>
          </motion.div>

          {/* 3. Medium Card: Heart Rate (Span 3 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-3 group relative bg-rose-50 dark:bg-rose-950/20 rounded-[2.5rem] p-8 border border-rose-100 dark:border-rose-900/30 shadow-lg overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Nhịp tim 24/7</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-[200px]">Cảnh báo rung lập tức khi nhịp tim bất thường.</p>
              </div>

              {/* Internal UI: Heart Rate Chart */}
              <div className="w-1/2 h-full flex flex-col items-end justify-center">
                 <div className="text-4xl font-black text-rose-500 mb-2">72<span className="text-sm text-rose-400 ml-1">bpm</span></div>
                 {/* Fake SVG Chart */}
                 <svg viewBox="0 0 100 30" className="w-full max-w-[120px] opacity-80 drop-shadow-md">
                    <polyline fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="0,15 20,15 30,5 40,25 50,15 80,15 90,5 100,15"/>
                 </svg>
              </div>
            </div>
          </motion.div>

          {/* 4. Small Card: SpO2 (Span 1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">98%</div>
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">SpO2</h3>
            </div>
          </motion.div>

          {/* 5. Small Card: Battery (Span 1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <BatteryFull className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              {/* Internal UI: Battery Ring */}
              <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[80%]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Pin 10 ngày</h3>
              <p className="text-[11px] text-slate-500">Sạc nhanh 30 phút.</p>
            </div>
          </motion.div>

          {/* 6. Small Card: Alerts (Span 1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-orange-50 dark:bg-orange-500/10 rounded-[2.5rem] p-6 sm:p-8 border border-orange-100 dark:border-orange-500/20 shadow-lg flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">SOS Alert</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Tự động phát hiện té ngã.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

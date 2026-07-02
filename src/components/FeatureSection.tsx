import { motion } from 'framer-motion'
import { Sparkles, Moon, Heart, Activity, Battery, Droplets } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F7FA] dark:bg-[#020617] transition-colors duration-300">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,169,157,0.03),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
            Sức khỏe của bạn,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A99D] to-[#06B6D4] dark:from-[#2DD4BF] dark:to-[#06B6D4]">
              được giải thích bằng dữ liệu.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            PulseAI Band kết hợp cảm biến sức khỏe, dữ liệu giấc ngủ và AI Health Insight để biến các chỉ số hằng ngày thành gợi ý dễ hiểu.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8 auto-rows-[220px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          
          {/* Card 1: AI Health Insight (col-span-4, row-span-2) */}
          <div className="md:col-span-4 md:row-span-2 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-[#00A99D] dark:text-[#2DD4BF]">
                    <Sparkles size={20} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/20 text-[9px] text-[#00A99D] dark:text-[#2DD4BF] font-black uppercase tracking-wider">
                    AI Insights Engine
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-[#EEF3F7]/50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Recovery</span>
                    <span className="text-base font-black text-slate-900 dark:text-white font-tabular">82%</span>
                  </div>
                  <div className="bg-[#EEF3F7]/50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">HRV</span>
                    <span className="text-base font-black text-slate-900 dark:text-white font-tabular">48 ms</span>
                  </div>
                  <div className="bg-[#EEF3F7]/50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/40 dark:border-slate-800/40">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Sleep Score</span>
                    <span className="text-base font-black text-slate-900 dark:text-white font-tabular">86</span>
                  </div>
                </div>
              </div>

              {/* AI Recommendation bubble */}
              <div className="mt-4 p-4 rounded-2xl bg-teal-500/5 border border-teal-500/15 dark:border-teal-500/20 relative">
                <div className="flex items-center gap-1.5 text-[#00A99D] dark:text-[#2DD4BF] text-[10px] font-black uppercase tracking-wide mb-1">
                  <Sparkles size={11} />
                  Gợi ý sức khỏe
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  "Giấc ngủ sâu của bạn tăng 12% so với tuần trước. Hãy giữ lịch ngủ ổn định trước 23:00 để duy trì phục hồi cao."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Sleep & Recovery (col-span-2, row-span-2) */}
          <div className="md:col-span-2 md:row-span-2 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500">
                  <Moon size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mt-4">Giấc ngủ & Phục hồi</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-relaxed">
                  Đo lường chi tiết chu kỳ giấc ngủ nông, sâu và REM để phục hồi tốt nhất.
                </p>
              </div>

              {/* Circular progress visual and stage bars */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-200 dark:text-slate-800" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="86 100" strokeLinecap="round" className="text-violet-500" />
                  </svg>
                  <span className="absolute text-sm font-black text-slate-900 dark:text-white font-tabular">86</span>
                </div>

                <div className="flex-1 space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      <span>Sâu (Deep)</span>
                      <span className="font-tabular">2h 14m</span>
                    </div>
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                      <div className="w-[35%] h-full bg-violet-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      <span>REM</span>
                      <span className="font-tabular">1h 28m</span>
                    </div>
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                      <div className="w-[20%] h-full bg-purple-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Heart Rate (col-span-3, row-span-1) */}
          <div className="md:col-span-3 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-6 flex items-center justify-between overflow-hidden"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 text-rose-500">
                  <Heart size={16} className="fill-rose-500/20" />
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Nhịp tim 24/7</h3>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-2 font-tabular">72 <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">BPM</span></div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block mt-1">HR nghỉ ngơi: 62 BPM</span>
              </div>
              
              {/* Dynamic SVG chart visual */}
              <div className="w-32 h-14 opacity-80 shrink-0">
                <svg viewBox="0 0 120 40" className="w-full h-full">
                  <path d="M0,20 L15,20 L22,20 L27,5 L33,35 L38,15 L43,20 L60,20 L75,20 L80,5 L86,35 L91,15 L96,20 L120,20" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Card 4: SpO2 & Stress (col-span-3, row-span-1) */}
          <div className="md:col-span-3 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-6 flex items-center justify-between overflow-hidden"
            >
              <div className="flex-1 pr-6">
                <div className="flex items-center gap-2 text-cyan-500">
                  <Activity size={16} />
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">SpO2 & Stress</h3>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-2 font-tabular">98% <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">SpO2</span></div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold block mt-1">Căng thẳng: Thấp (Low)</span>
              </div>

              {/* Dual progress bars indicator */}
              <div className="w-24 shrink-0 space-y-2">
                <div>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Oxy máu</span>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                    <div className="w-[98%] h-full bg-cyan-500" />
                  </div>
                </div>
                <div>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Áp lực</span>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                    <div className="w-[20%] h-full bg-teal-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 5: Battery (col-span-2, row-span-1) */}
          <div className="md:col-span-2 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-6 flex items-center gap-4 overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-[#00A99D] dark:text-[#2DD4BF] shrink-0">
                <Battery size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">10 Ngày Pin</h3>
                {/* 3 battery segments */}
                <div className="flex items-center gap-1 mt-2">
                  <div className="w-4 h-6 border-2 border-teal-500/80 rounded-sm p-[1.5px] flex flex-col gap-[1px] justify-end">
                    <div className="w-full h-[30%] bg-[#00A99D] dark:bg-[#2DD4BF]" />
                    <div className="w-full h-[30%] bg-[#00A99D] dark:bg-[#2DD4BF]" />
                    <div className="w-full h-[30%] bg-[#00A99D] dark:bg-[#2DD4BF]" />
                  </div>
                  <span className="text-xs font-black text-slate-900 dark:text-white font-tabular">100%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 6: Water Resistance (col-span-4, row-span-1) */}
          <div className="md:col-span-4 relative group">
            <motion.div
              variants={fadeUp}
              className="w-full h-full glass-panel rounded-3xl p-6 flex items-center justify-between overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                  <Droplets size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Chống nước IP68</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-relaxed max-w-[200px] sm:max-w-none">
                    An tâm hoạt động dưới trời mưa, bơi lội hoặc vận động cường độ cao.
                  </p>
                </div>
              </div>

              {/* Droplets decoration */}
              <div className="flex items-center gap-3 pr-2 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[9px] text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-wider">
                  Daily Ready
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500 shrink-0">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Sparkles, Moon, Heart, Activity, Battery, Droplets } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Sức khỏe của bạn, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              được giải thích bằng dữ liệu.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            PulseAI Band kết hợp cảm biến sức khỏe, dữ liệu giấc ngủ và AI Health Insight để biến các chỉ số hằng ngày thành gợi ý dễ hiểu.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8 auto-rows-[220px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          
          {/* Card 1: AI Health Insight (Large - 3 cols / 2 rows - Dark Visual Theme) */}
          <div className="md:col-span-3 md:row-span-2 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-slate-900 dark:bg-slate-900/40 border border-slate-800 dark:border-slate-800/60 p-8 flex flex-col justify-between overflow-hidden z-10"
            >
              {/* Visual element top */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <Sparkles size={22} />
                </div>
                
                {/* Mock AI Suggestion Chip */}
                <div className="px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[10px] text-teal-400 font-extrabold uppercase tracking-wider">AI Suggestion</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">AI Health Insight</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Phân tích nhịp tim nghỉ, giấc ngủ sâu và mức độ phục hồi để đưa ra gợi ý sinh hoạt dễ dàng thực hiện từng ngày, nâng cao thể lực.
                </p>
              </div>

              {/* Subtle Abstract Graph */}
              <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <path d="M10,130 Q40,40 80,100 T150,20 T200,90" fill="none" stroke="currentColor" strokeWidth="8" className="text-teal-500" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Sleep & Recovery (Large - 3 cols / 2 rows - Indigo/Violet Gradient Theme) */}
          <div className="md:col-span-3 md:row-span-2 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-gradient-to-br from-indigo-50/50 to-violet-50/50 dark:from-slate-900/30 dark:to-indigo-950/20 border border-violet-100 dark:border-violet-950/50 p-8 flex flex-col justify-between overflow-hidden z-10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                  <Moon size={22} />
                </div>
                
                {/* Progress pill indicator */}
                <div className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-600 dark:text-violet-400 font-extrabold uppercase tracking-wider">
                  Sleep Score: 86
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sleep & Recovery</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Theo dõi giấc ngủ sâu, thời gian tỉnh giấc và điểm phục hồi để bạn hiểu vì sao cơ thể mệt hoặc khỏe, xây dựng lối sống lành mạnh.
                </p>
              </div>

              {/* Custom Sleep Segment bar */}
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex mt-4">
                <div className="h-full w-[25%] bg-indigo-500" title="Deep Sleep" />
                <div className="h-full w-[50%] bg-violet-500" title="Light Sleep" />
                <div className="h-full w-[15%] bg-purple-400" title="REM Sleep" />
                <div className="h-full w-[10%] bg-slate-300 dark:bg-slate-700" title="Awake" />
              </div>
            </motion.div>
          </div>

          {/* Card 3: Heart Rate (Medium - 3 cols / 1 row) */}
          <div className="md:col-span-3 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-rose-500/50 to-pink-500/50 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-6 flex items-center justify-between overflow-hidden z-10"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <Heart size={18} className="text-rose-500 fill-rose-500/20" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Nhịp tim 24/7</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Đo lường thời gian thực, tự động thông báo bất thường.
                </p>
              </div>
              
              {/* Live Chart Mock */}
              <div className="w-24 h-12 flex items-end opacity-60 dark:opacity-80">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path d="M0,25 Q15,10 30,30 T60,5 T90,25 L100,25" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Card 4: SpO2 & Stress (Medium - 3 cols / 1 row) */}
          <div className="md:col-span-3 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-cyan-500/50 to-teal-500/50 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-6 flex items-center justify-between overflow-hidden z-10"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <Activity size={18} className="text-cyan-500" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">SpO2 & Stress</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Theo dõi nồng độ Oxy trong máu để quản lý tinh thần chủ động.
                </p>
              </div>

              {/* Circular Ring Mock */}
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-200 dark:text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-cyan-500" strokeWidth="3.5" strokeDasharray="98, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-[9px] font-extrabold text-slate-800 dark:text-slate-200">98%</span>
              </div>
            </motion.div>
          </div>

          {/* Card 5: Battery (Small - 3 cols / 1 row - Tinted Teal Theme) */}
          <div className="md:col-span-3 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-teal-500/50 to-emerald-500/50 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-teal-50/40 dark:bg-teal-950/10 border border-teal-100 dark:border-teal-950/30 p-6 flex items-center gap-6 overflow-hidden z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                <Battery size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Pin 10 ngày</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Đồng hành bền bỉ không gián đoạn suốt hành trình tập luyện.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 6: Water Resistance (Small - 3 cols / 1 row - Tinted Cyan Theme) */}
          <div className="md:col-span-3 relative group">
            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-cyan-500/50 to-sky-500/50 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 blur-xl transition-all duration-500 pointer-events-none z-0" />
            <motion.div
              variants={fadeUp}
              className="w-full h-full relative rounded-3xl bg-cyan-50/40 dark:bg-cyan-950/10 border border-cyan-100 dark:border-cyan-950/30 p-6 flex items-center gap-6 overflow-hidden z-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                <Droplets size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Chống nước IP68</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Thoải mái tập luyện cường độ cao, bơi lội và đi mưa không lo ngại.
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

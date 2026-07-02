import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { Heart, Moon, Activity, Brain, BatteryFull, ShieldAlert } from 'lucide-react'

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-[#0f172a]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold mb-3 tracking-wide">Tính năng</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Cảm biến chính xác cao.{' '}
            <span className="text-slate-400 dark:text-slate-500">Phân tích sâu bằng AI.</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            PulseAI Band đo liên tục các chỉ số sinh trắc học quan trọng và biến dữ liệu thô thành thông tin dễ hiểu, giúp bạn ra quyết định tốt hơn cho sức khỏe mỗi ngày.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 auto-rows-[220px] sm:auto-rows-[260px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          
          {/* 1. Big Card: AI Health Insight (4 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-4 group relative bg-[#0f172a] dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-slate-800 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.08),transparent_60%)]" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 border border-teal-500/20">
                <Brain className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">AI Health Insight</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Thuật toán phân tích nhịp tim nghỉ, biến thiên HRV, chất lượng giấc ngủ và mức vận động để đưa ra điểm sẵn sàng (Readiness Score) mỗi sáng — giúp bạn biết hôm nay nên tập nặng hay nghỉ ngơi.
              </p>
            </div>

            {/* Mini UI: AI suggestion */}
            <div className="relative z-10 bg-white/[0.06] backdrop-blur-sm rounded-xl p-3.5 border border-white/[0.06] max-w-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
                </span>
                <span className="text-[10px] font-semibold text-teal-400 uppercase tracking-wider">Gợi ý hôm nay</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                "Cơ thể đã phục hồi 92%. Thích hợp cho buổi tập HIIT 30 phút chiều nay."
              </p>
            </div>
          </motion.div>

          {/* 2. Medium Card: Sleep (2 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-2 group relative bg-[#0f172a] dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-7 border border-slate-800 overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Moon className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-xl font-bold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>7h 42m</div>
            </div>

            {/* Sleep stage bar */}
            <div className="relative z-10 w-full mb-4">
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-indigo-300 w-[22%]" />
                <div className="h-full bg-indigo-500 w-[48%]" />
                <div className="h-full bg-indigo-400 w-[30%]" />
              </div>
              <div className="flex justify-between text-[9px] text-slate-500 mt-1.5 font-medium">
                <span>Sâu 1h43</span>
                <span>Nông 3h45</span>
                <span>REM 2h14</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-base font-bold text-white mb-1">Phân tích giấc ngủ</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Đo chi tiết các giai đoạn giấc ngủ sâu, nông, REM và đưa ra gợi ý thời gian ngủ tối ưu.</p>
            </div>
          </motion.div>

          {/* 3. Medium Card: Heart Rate (3 cols) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-3 group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-7 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-100 dark:border-rose-500/20">
                  <Heart className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Nhịp tim liên tục</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[180px] leading-relaxed">Theo dõi liên tục, cảnh báo khi phát hiện nhịp bất thường ngoài ngưỡng an toàn.</p>
              </div>

              {/* Heart rate value + mini chart */}
              <div className="flex flex-col items-end">
                <div className="text-3xl font-bold text-rose-500 mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>72<span className="text-sm text-slate-400 ml-1 font-medium">bpm</span></div>
                <svg viewBox="0 0 120 30" className="w-28 opacity-60">
                  <polyline fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="0,15 15,15 25,8 35,22 45,15 60,15 70,6 80,24 90,15 120,15"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* 4. SpO2 (1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center border border-cyan-100 dark:border-cyan-500/20">
              <Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>98%</div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">SpO2</h3>
            </div>
          </motion.div>

          {/* 5. Battery (1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20">
              <BatteryFull className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              {/* Battery bar */}
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[80%] rounded-full" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white">Pin 10 ngày</h3>
              <p className="text-[10px] text-slate-400">Sạc 30 phút, dùng 3 ngày.</p>
            </div>
          </motion.div>

          {/* 6. SOS (1 col) */}
          <motion.div
            variants={fadeUp}
            className="col-span-1 md:col-span-1 group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center border border-amber-100 dark:border-amber-500/20">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">SOS & Phát hiện té ngã</h3>
              <p className="text-[10px] text-slate-400">Gửi vị trí GPS cho người thân khi cần.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

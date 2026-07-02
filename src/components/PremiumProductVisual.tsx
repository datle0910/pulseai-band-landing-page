import { motion } from 'framer-motion'
import { Heart, Activity, Moon, BrainCircuit } from 'lucide-react'

export default function PremiumProductVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center min-h-[450px]">
      
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full opacity-60 dark:opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/30 rounded-full blur-[80px] -z-10" />

      {/* Main Smartband Device */}
      <div className="relative z-10 w-[180px] sm:w-[220px]">
        {/* Top Strap */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-20 bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-t-2xl shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] z-0" />
        
        {/* Main Body */}
        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-600 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 p-2 sm:p-[6px] shadow-2xl shadow-slate-900/40 dark:shadow-black/60 z-10 border border-white/40 dark:border-slate-600/50">
          
          {/* Inner Screen Bezel */}
          <div className="relative w-full h-full rounded-[2.2rem] bg-black p-1.5 sm:p-2 overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.9)]">
            
            {/* Screen Content - Glass effect */}
            <div className="relative w-full h-full rounded-[1.8rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/50 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Screen Reflection */}
              <div className="absolute top-0 right-0 w-[150%] h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-12 origin-top-right translate-x-4 -translate-y-4 pointer-events-none" />

              {/* UI: PulseAI Ring */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-2">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#14b8a6" strokeWidth="8" strokeDasharray="251" strokeDashoffset="40" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest mb-0.5">Energy</span>
                  <span className="text-3xl sm:text-4xl font-black text-white leading-none">84</span>
                </div>
              </div>

              {/* UI: Bottom Stats */}
              <div className="flex gap-4 mt-2 px-4 w-full">
                <div className="flex-1 bg-slate-800/80 rounded-xl py-1.5 px-2 flex items-center justify-between border border-slate-700/50">
                  <Heart size={10} className="text-rose-500" />
                  <span className="text-xs font-bold text-white">72</span>
                </div>
                <div className="flex-1 bg-slate-800/80 rounded-xl py-1.5 px-2 flex items-center justify-between border border-slate-700/50">
                  <Moon size={10} className="text-indigo-400" />
                  <span className="text-xs font-bold text-white">8h</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Side Button */}
        <div className="absolute top-1/3 -right-[3px] w-[5px] h-10 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 rounded-r-md z-0 shadow-md" />

        {/* Bottom Strap */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-20 bg-gradient-to-t from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-b-2xl shadow-[inset_0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)] z-0" />
      </div>

      {/* Floating Chips */}
      {/* Heart Rate Chip */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-[10%] left-0 sm:left-4 z-20"
      >
        <div className="flex items-center gap-2.5 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center">
            <Heart size={16} className="text-rose-500" />
          </div>
          <div className="pr-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Nhịp tim</div>
            <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">72 <span className="text-[10px] font-medium text-slate-500">bpm</span></div>
          </div>
        </div>
      </motion.div>

      {/* SpO2 Chip */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-[25%] right-0 sm:-right-4 z-20"
      >
        <div className="flex items-center gap-2.5 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center">
            <Activity size={16} className="text-cyan-500" />
          </div>
          <div className="pr-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase">SpO2</div>
            <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">98%</div>
          </div>
        </div>
      </motion.div>

      {/* Sleep Score Chip */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[20%] left-2 sm:-left-2 z-20"
      >
        <div className="flex items-center gap-2.5 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
            <Moon size={16} className="text-indigo-500" />
          </div>
          <div className="pr-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Giấc ngủ</div>
            <div className="text-sm font-black text-slate-900 dark:text-white leading-tight">86 <span className="text-[10px] font-medium text-slate-500">điểm</span></div>
          </div>
        </div>
      </motion.div>

      {/* Recovery Chip */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[5%] right-2 sm:right-0 z-20"
      >
        <div className="flex items-center gap-2.5 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-teal-200 dark:border-teal-900/50 shadow-xl shadow-teal-500/10">
          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center">
            <BrainCircuit size={16} className="text-teal-500" />
          </div>
          <div className="pr-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Phục hồi</div>
            <div className="text-sm font-black text-teal-600 dark:text-teal-400 leading-tight">Tuyệt vời</div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

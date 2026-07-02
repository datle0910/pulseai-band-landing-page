import { motion } from 'framer-motion'
import { Heart, Moon } from 'lucide-react'

export default function PremiumProductVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center min-h-[420px]">
      
      {/* Subtle background glow - very restrained */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/[0.07] rounded-full blur-[80px] dark:bg-teal-500/[0.12]" />

      {/* Main Device */}
      <div className="relative z-10 w-[160px] sm:w-[190px]">
        
        {/* Top Strap - textured */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-[4.5rem]">
          <div className="w-full h-full bg-gradient-to-b from-[#3a3a3c] via-[#48484a] to-[#3a3a3c] dark:from-[#2c2c2e] dark:via-[#3a3a3c] dark:to-[#2c2c2e] rounded-t-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
          {/* Strap texture lines */}
          <div className="absolute inset-x-1 top-2 bottom-0 flex flex-col gap-[3px] opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-px bg-white/30" />
            ))}
          </div>
        </div>

        {/* Device Body - graphite metal frame */}
        <div className="relative w-full aspect-[4/5] rounded-[2rem] sm:rounded-[2.2rem] bg-gradient-to-b from-[#636366] via-[#48484a] to-[#3a3a3c] p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.25),0_4px_16px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_4px_16px_rgba(0,0,0,0.4)] z-10 border border-white/10">
          
          {/* Inner bezel */}
          <div className="relative w-full h-full rounded-[1.8rem] sm:rounded-[2rem] bg-[#1c1c1e] p-[5px] overflow-hidden">
            
            {/* Screen */}
            <div className="relative w-full h-full rounded-[1.5rem] sm:rounded-[1.7rem] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
              
              {/* Screen reflection - subtle diagonal */}
              <div className="absolute top-0 right-0 w-full h-[45%] bg-gradient-to-bl from-white/[0.06] to-transparent pointer-events-none" />
              
              {/* Time */}
              <div className="text-[10px] font-medium text-white/40 mb-1 tracking-widest">09:41</div>

              {/* Activity Ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Track */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1c1c1e" strokeWidth="7" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#1c1c1e" strokeWidth="7" />
                  {/* Filled arcs */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#0d9488" strokeWidth="7" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#06b6d4" strokeWidth="7" strokeDasharray="201" strokeDashoffset="80" strokeLinecap="round" opacity="0.8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[28px] sm:text-[32px] font-bold text-white leading-none tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>84</span>
                  <span className="text-[8px] text-teal-500/80 font-semibold uppercase tracking-[0.15em] mt-0.5">Readiness</span>
                </div>
              </div>

              {/* Bottom stat pills */}
              <div className="flex gap-2 px-3 w-full">
                <div className="flex-1 flex items-center gap-1.5 bg-white/[0.06] rounded-lg py-1.5 px-2 border border-white/[0.04]">
                  <Heart size={9} className="text-rose-400" />
                  <span className="text-[11px] font-semibold text-white/80" style={{ fontVariantNumeric: 'tabular-nums' }}>72</span>
                  <span className="text-[8px] text-white/30">bpm</span>
                </div>
                <div className="flex-1 flex items-center gap-1.5 bg-white/[0.06] rounded-lg py-1.5 px-2 border border-white/[0.04]">
                  <Moon size={9} className="text-indigo-400" />
                  <span className="text-[11px] font-semibold text-white/80">7h42</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Side button */}
        <div className="absolute top-[30%] -right-[2px] w-[3px] h-8 bg-gradient-to-b from-[#636366] to-[#48484a] rounded-r-sm z-0" />

        {/* Bottom Strap */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-[4.5rem]">
          <div className="w-full h-full bg-gradient-to-t from-[#3a3a3c] via-[#48484a] to-[#3a3a3c] dark:from-[#2c2c2e] dark:via-[#3a3a3c] dark:to-[#2c2c2e] rounded-b-xl shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]" />
          <div className="absolute inset-x-1 top-0 bottom-2 flex flex-col gap-[3px] opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-px bg-white/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Floating data chip - Heart Rate */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[15%] left-0 sm:left-2 z-20"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md text-left">
          <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center">
            <Heart size={13} className="text-rose-500" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-medium leading-none mb-0.5">Nhịp tim</div>
            <div className="text-xs font-bold text-slate-800 dark:text-white leading-none">72 bpm</div>
          </div>
        </div>
      </motion.div>

      {/* Floating data chip - Sleep */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[18%] right-0 sm:right-2 z-20"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md text-left">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
            <Moon size={13} className="text-indigo-500" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-medium leading-none mb-0.5">Giấc ngủ</div>
            <div className="text-xs font-bold text-slate-800 dark:text-white leading-none">7h 42m</div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

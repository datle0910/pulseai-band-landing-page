import { motion } from 'framer-motion'
import { Heart, Moon, Zap, Activity } from 'lucide-react'

export default function PremiumProductVisual() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00A99D]/10 to-[#06B6D4]/10 dark:from-[#2DD4BF]/5 dark:to-[#06B6D4]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] bg-[#00A99D]/10 dark:bg-[#2DD4BF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Health Chips - Top Left (Heart) */}
      <motion.div
        className="absolute top-4 left-0 z-20 glass-panel rounded-2xl p-3 flex items-center gap-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
        </div>
        <div>
          <div className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Heart Rate</div>
          <div className="text-xs font-black text-slate-900 dark:text-white font-tabular">72 bpm</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Top Right (Sleep) */}
      <motion.div
        className="absolute top-12 right-0 z-20 glass-panel rounded-2xl p-3 flex items-center gap-3"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-8 rounded-xl bg-violet-500/10 flex items-center justify-center">
          <Moon className="w-4 h-4 text-violet-500 fill-violet-500/20" />
        </div>
        <div>
          <div className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Sleep Score</div>
          <div className="text-xs font-black text-slate-900 dark:text-white font-tabular">86/100</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Bottom Left (SpO2) */}
      <motion.div
        className="absolute bottom-12 left-0 z-20 glass-panel rounded-2xl p-3 flex items-center gap-3"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Activity className="w-4 h-4 text-cyan-500" />
        </div>
        <div>
          <div className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Blood Oxygen</div>
          <div className="text-xs font-black text-slate-900 dark:text-white font-tabular">98% SpO2</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Bottom Right (HRV) */}
      <motion.div
        className="absolute bottom-4 right-0 z-20 glass-panel rounded-2xl p-3 flex items-center gap-3"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, delay: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center">
          <Zap className="w-4 h-4 text-teal-500 fill-teal-500/20" />
        </div>
        <div>
          <div className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">HRV</div>
          <div className="text-xs font-black text-slate-900 dark:text-white font-tabular">48 ms</div>
        </div>
      </motion.div>

      {/* Main Wearable Device Mockup */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Top Strap */}
        <div className="w-20 h-28 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-900 dark:to-[#0B1220] rounded-t-[1.2rem] shadow-inner" />

        {/* Watch Case/Bezel */}
        <div className="relative -mt-16 w-44 h-52 rounded-[2.2rem] bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 dark:from-[#1E293B] dark:via-[#0F172A] dark:to-black p-[4px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-800/80">
          
          {/* Inner Screen */}
          <div className="w-full h-full rounded-[2rem] bg-black p-[2.5px] overflow-hidden">
            <div className="relative w-full h-full rounded-[1.8rem] bg-gradient-to-b from-slate-950 via-black to-slate-950 flex flex-col items-center justify-between py-5 px-3">
              
              {/* Glass Reflection Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-[1.8rem]" />
              <div className="absolute top-0 right-0 w-[140%] h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-[25deg] origin-top-right translate-x-2 -translate-y-2 pointer-events-none" />

              {/* Watch Screen Content */}
              <div className="text-[8px] text-[#00A99D] dark:text-[#2DD4BF] font-extrabold tracking-[0.25em] uppercase">
                PulseAI
              </div>

              {/* Heart Pulse Visual */}
              <div className="flex flex-col items-center my-auto">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 0.83, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-1"
                >
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                </motion.div>
                <div className="text-3xl font-black text-white tracking-tight leading-none font-tabular">
                  72
                </div>
                <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                  BPM
                </div>
              </div>

              {/* Progress Ring / Dashboard Area */}
              <div className="w-full flex items-center justify-between px-2.5">
                <div className="text-center">
                  <div className="text-xs font-black text-white font-tabular">86</div>
                  <div className="text-[6.5px] text-slate-500 font-bold uppercase tracking-wider">Sleep</div>
                </div>
                <div className="w-1.5 h-6 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                  <div className="w-full h-[82%] bg-gradient-to-t from-[#00A99D] to-[#2DD4BF] rounded-full" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-black text-white font-tabular">82%</div>
                  <div className="text-[6.5px] text-slate-500 font-bold uppercase tracking-wider">Rec</div>
                </div>
              </div>

            </div>
          </div>

          {/* Physical Button (Side) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-[3.5px] w-[3.5px] h-8 bg-slate-500 dark:bg-slate-700 rounded-r-md border-t border-b border-r border-white/20" />
        </div>

        {/* Bottom Strap */}
        <div className="w-20 h-28 -mt-16 bg-gradient-to-t from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-900 dark:to-[#0B1220] rounded-b-[1.2rem] shadow-inner" />
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[180px] h-[10px] bg-black/10 dark:bg-black/40 rounded-full blur-md" />
    </div>
  )
}

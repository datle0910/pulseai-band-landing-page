import { motion } from 'framer-motion'
import { Heart, Moon, Zap, Activity } from 'lucide-react'

export default function PremiumProductVisual() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-[80px]" />
      <div className="absolute w-[240px] h-[240px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl" />

      {/* Floating Health Chips - Top Left (Heart) */}
      <motion.div
        className="absolute top-4 left-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-3 shadow-lg flex items-center gap-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Heart Rate</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">72 bpm</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Top Right (Sleep) */}
      <motion.div
        className="absolute top-12 right-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-3 shadow-lg flex items-center gap-3"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">
          <Moon className="w-5 h-5 text-violet-500 fill-violet-500/20" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Sleep Score</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">86 / 100</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Bottom Left (SpO2) */}
      <motion.div
        className="absolute bottom-12 left-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-3 shadow-lg flex items-center gap-3"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Activity className="w-5 h-5 text-cyan-500" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Blood Oxygen</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">98% SpO2</div>
        </div>
      </motion.div>

      {/* Floating Health Chips - Bottom Right (HRV) */}
      <motion.div
        className="absolute bottom-4 right-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-3 shadow-lg flex items-center gap-3"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, delay: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center">
          <Zap className="w-5 h-5 text-teal-500 fill-teal-500/20" />
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">HRV</div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">48 ms</div>
        </div>
      </motion.div>

      {/* Main Wearable Device Mockup */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Top Strap */}
        <div className="w-24 h-24 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-t-[1.5rem] shadow-inner" />

        {/* Watch Case/Bezel */}
        <div className="relative -mt-12 w-48 h-56 rounded-[2.5rem] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black p-[4px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 dark:border-slate-800">
          
          {/* Inner Screen */}
          <div className="w-full h-full rounded-[2.2rem] bg-black p-[3px] overflow-hidden">
            <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-b from-slate-900 via-slate-950 to-black flex flex-col items-center justify-between py-6 px-4">
              
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-[2rem]" />
              <div className="absolute top-0 right-0 w-[140%] h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-[25deg] origin-top-right translate-x-2 -translate-y-2 pointer-events-none" />

              {/* Watch Screen Content */}
              {/* Header */}
              <div className="text-[10px] text-teal-400 font-bold tracking-[0.2em] uppercase">
                PulseAI
              </div>

              {/* Heart Pulse Visual */}
              <div className="flex flex-col items-center my-auto">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mb-1"
                >
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                </motion.div>
                <div className="text-3xl font-black text-white tracking-tight">
                  72
                </div>
                <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">
                  BPM
                </div>
              </div>

              {/* Progress Ring / Dashboard Area */}
              <div className="w-full flex items-center justify-between px-3">
                <div className="text-center">
                  <div className="text-xs font-bold text-white">86</div>
                  <div className="text-[7px] text-slate-500 uppercase tracking-widest">Sleep</div>
                </div>
                <div className="w-1.5 h-8 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                  <div className="w-full h-[82%] bg-gradient-to-t from-teal-500 to-cyan-400 rounded-full" />
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white">82%</div>
                  <div className="text-[7px] text-slate-500 uppercase tracking-widest">Rec</div>
                </div>
              </div>

            </div>
          </div>

          {/* Physical Button (Side) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-[4px] w-[5px] h-10 bg-slate-500 dark:bg-slate-700 rounded-r-md border-t border-b border-r border-white/20 dark:border-slate-800" />
        </div>

        {/* Bottom Strap */}
        <div className="w-24 h-24 -mt-12 bg-gradient-to-t from-slate-300 via-slate-400 to-slate-500 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-b-[1.5rem] shadow-inner" />
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[200px] h-[15px] bg-black/10 dark:bg-black/40 rounded-full blur-md" />
    </div>
  )
}

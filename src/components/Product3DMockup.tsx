import { motion } from 'framer-motion'
import { Activity, Heart, Moon, BrainCircuit } from 'lucide-react'

export default function Product3DMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center scale-90 sm:scale-100">
      {/* Decorative Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[120%] h-[120%] rounded-full border border-teal-500/10 dark:border-teal-400/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-cyan-500/20 dark:border-cyan-400/20"
        />
      </div>

      {/* Main 3D Smartband */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-36 h-64 sm:w-40 sm:h-72"
      >
        {/* Top Strap */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-16 bg-gradient-to-b from-transparent via-slate-800 to-slate-900 rounded-t-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] z-0" />

        {/* Bottom Strap */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-16 bg-gradient-to-t from-transparent via-slate-800 to-slate-900 rounded-b-2xl shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)] z-0" />

        {/* Metallic Frame */}
        <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 dark:from-slate-600 dark:via-slate-700 dark:to-slate-900 p-[2px] shadow-2xl z-10">
          {/* Bezel / Inner Shadow */}
          <div className="relative w-full h-full rounded-[2rem] bg-black p-2 sm:p-2.5 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
            {/* Screen Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            {/* Screen Content */}
            <div className="relative flex-1 rounded-[1.5rem] bg-slate-900 overflow-hidden flex flex-col items-center justify-between py-6">
              {/* Top info */}
              <div className="flex justify-between w-full px-4 text-[10px] text-slate-400 font-medium tracking-wider">
                <span>09:41</span>
                <span className="text-teal-400">100%</span>
              </div>

              {/* Main Metric UI (Mockup) */}
              <div className="relative w-20 h-20 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                <div className="absolute inset-0 rounded-full border-4 border-teal-400 border-t-transparent border-l-transparent rotate-45" />
                <div className="text-center">
                  <Heart className="w-5 h-5 text-rose-500 mx-auto animate-pulse" />
                  <span className="text-white text-xl font-bold block mt-1">72</span>
                </div>
              </div>

              {/* Bottom activity rings / bars */}
              <div className="w-full px-5 space-y-2">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 w-3/4" />
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 w-1/2" />
                </div>
              </div>
            </div>
            
            {/* Glossy reflection on screen */}
            <div className="absolute -top-[20%] -left-[20%] w-[150%] h-[50%] bg-gradient-to-b from-white/5 to-transparent rotate-12 pointer-events-none" />
          </div>
        </div>

        {/* Edge Glow */}
        <div className="absolute -inset-4 bg-teal-500/20 blur-2xl -z-10 rounded-full mix-blend-screen opacity-50" />
      </motion.div>

      {/* Floating Chips */}
      {/* Chip 1: Heart Rate */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/4 -left-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 shadow-lg"
      >
        <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-rose-500" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Nhịp tim</p>
          <p className="text-xs text-slate-900 dark:text-white font-bold">72 bpm</p>
        </div>
      </motion.div>

      {/* Chip 2: Sleep Score */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 -left-6 sm:left-0 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 shadow-lg"
      >
        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
          <Moon className="w-3.5 h-3.5 text-indigo-500" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Giấc ngủ</p>
          <p className="text-xs text-slate-900 dark:text-white font-bold">86 điểm</p>
        </div>
      </motion.div>

      {/* Chip 3: SpO2 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/3 -right-4 sm:right-4 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/20 shadow-lg"
      >
        <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
          <Activity className="w-3.5 h-3.5 text-cyan-500" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">SpO2</p>
          <p className="text-xs text-slate-900 dark:text-white font-bold">98%</p>
        </div>
      </motion.div>

      {/* Chip 4: AI Insight */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 -right-6 sm:right-0 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-teal-500/20 shadow-lg shadow-teal-500/10"
      >
        <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
          <BrainCircuit className="w-3.5 h-3.5 text-teal-500" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AI Insight</p>
          <p className="text-xs text-teal-600 dark:text-teal-400 font-bold">Active</p>
        </div>
      </motion.div>
    </div>
  )
}

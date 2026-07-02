import { motion } from 'framer-motion'
import { Activity, Heart, Moon, BrainCircuit } from 'lucide-react'

export default function PremiumProductVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center scale-90 sm:scale-100 mt-10 lg:mt-0">
      {/* Cinematic Glowing Background / Light trails */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[140%] h-[140%] rounded-full border-[0.5px] border-teal-500/10 dark:border-teal-400/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-cyan-500/20 dark:border-cyan-400/20"
        />
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 blur-3xl"
        />
      </div>

      {/* Main 3D Smartband (Cinematic Scale) */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-48 h-80 sm:w-56 sm:h-[22rem]"
      >
        {/* Top Strap */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-20 bg-gradient-to-b from-transparent via-slate-800 to-slate-900 rounded-t-3xl shadow-[inset_0_4px_8px_rgba(255,255,255,0.1)] z-0 flex justify-center">
          <div className="w-16 h-full bg-slate-950/20 blur-sm" />
        </div>

        {/* Bottom Strap */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-20 bg-gradient-to-t from-transparent via-slate-800 to-slate-900 rounded-b-3xl shadow-[inset_0_-4px_8px_rgba(255,255,255,0.1)] z-0 flex justify-center">
          <div className="w-16 h-full bg-slate-950/20 blur-sm" />
        </div>

        {/* Metallic Frame */}
        <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 dark:from-slate-500 dark:via-slate-700 dark:to-slate-900 p-[3px] shadow-2xl z-10 shadow-slate-900/50 dark:shadow-black/80">
          {/* Bezel / Inner Shadow */}
          <div className="relative w-full h-full rounded-[2.3rem] bg-black p-2.5 sm:p-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
            {/* Screen Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
            
            {/* Screen Content */}
            <div className="relative flex-1 rounded-[2rem] bg-slate-950 overflow-hidden flex flex-col items-center py-8 px-4">
              {/* Top info */}
              <div className="flex justify-between w-full text-[11px] text-slate-400 font-medium tracking-wider px-2">
                <span>09:41</span>
                <span className="text-teal-400 flex items-center gap-1">
                  <div className="w-4 h-2 border border-teal-400 rounded-[2px] p-[1px]">
                    <div className="w-full h-full bg-teal-400" />
                  </div>
                  100%
                </span>
              </div>

              {/* Main Metric UI (Mockup) */}
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                  <div className="absolute inset-0 rounded-full border-4 border-teal-400 border-t-transparent border-l-transparent rotate-45" />
                  <div className="absolute inset-2 rounded-full border-4 border-cyan-400 border-b-transparent border-r-transparent -rotate-12" />
                  <div className="text-center z-10">
                    <Heart className="w-6 h-6 text-rose-500 mx-auto animate-pulse" />
                    <span className="text-white text-3xl font-black tracking-tighter block mt-1">72</span>
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">BPM</span>
                  </div>
                </div>

                {/* Activity Wave */}
                <svg viewBox="0 0 100 20" className="w-full mt-6 opacity-80">
                  <path
                    d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10 T100,10"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Bottom stats */}
              <div className="w-full flex justify-between px-2 mt-auto">
                <div className="text-center">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-1">SpO2</div>
                  <div className="text-sm text-white font-bold">98%</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-violet-400 font-bold uppercase tracking-wider mb-1">Sleep</div>
                  <div className="text-sm text-white font-bold">86</div>
                </div>
              </div>
            </div>
            
            {/* Glossy reflection on screen */}
            <div className="absolute -top-[30%] -left-[20%] w-[150%] h-[60%] bg-gradient-to-b from-white/10 to-transparent rotate-12 pointer-events-none rounded-b-full" />
          </div>
        </div>

        {/* Side Button */}
        <div className="absolute top-24 -right-1 w-1.5 h-12 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-500 dark:from-slate-600 dark:via-slate-500 dark:to-slate-700 rounded-r-md shadow-md" />

        {/* Edge Glow */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full mix-blend-screen opacity-60" />
      </motion.div>

      {/* Floating Chips (Cinematic Style) */}
      
      {/* Chip 1: Heart Rate */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
        className="absolute top-1/4 -left-8 sm:-left-12 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
          <Heart className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Heart Rate</p>
          <p className="text-sm text-slate-900 dark:text-white font-black">72 bpm</p>
        </div>
      </motion.div>

      {/* Chip 2: Sleep Score */}
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 -left-10 sm:-left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
          <Moon className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Sleep Score</p>
          <p className="text-sm text-slate-900 dark:text-white font-black">86 / 100</p>
        </div>
      </motion.div>

      {/* Chip 3: SpO2 */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/3 -right-8 sm:-right-8 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 shadow-2xl"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Blood Oxygen</p>
          <p className="text-sm text-slate-900 dark:text-white font-black">98%</p>
        </div>
      </motion.div>

      {/* Chip 4: AI Insight */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 -right-10 sm:-right-4 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-teal-500/30 shadow-[0_10px_30px_rgba(20,184,166,0.15)]"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/40">
          <BrainCircuit className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">AI Insight</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <p className="text-xs text-teal-600 dark:text-teal-400 font-black tracking-wide">ACTIVE</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

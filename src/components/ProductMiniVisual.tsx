import { Heart, Activity, BrainCircuit } from 'lucide-react'

interface ProductMiniVisualProps {
  variant: 'lite' | 'pro' | 'elite'
}

export default function ProductMiniVisual({ variant }: ProductMiniVisualProps) {
  
  const getConfig = () => {
    switch(variant) {
      case 'lite':
        return {
          glow: 'bg-cyan-500/20',
          band: 'from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800',
          frame: 'from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700',
          accent: 'text-cyan-400',
          icon: <Activity className="w-5 h-5 text-cyan-400" />
        }
      case 'pro':
        return {
          glow: 'bg-teal-500/30',
          band: 'from-teal-900 to-slate-900 dark:from-teal-950 dark:to-slate-900',
          frame: 'from-teal-600 to-teal-800 dark:from-teal-700 dark:to-teal-900',
          accent: 'text-teal-400',
          icon: <Heart className="w-5 h-5 text-teal-400" />
        }
      case 'elite':
        return {
          glow: 'bg-violet-500/20',
          band: 'from-slate-800 to-slate-950 dark:from-slate-900 dark:to-black',
          frame: 'from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900',
          accent: 'text-violet-400',
          icon: <BrainCircuit className="w-5 h-5 text-violet-400" />
        }
    }
  }

  const config = getConfig()

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      
      {/* Background radial glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl ${config.glow}`} />

      {/* The Watch */}
      <div className="relative z-10 w-24">
        {/* Top Strap */}
        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b ${config.band} rounded-t-lg shadow-inner z-0`} />
        
        {/* Main Body */}
        <div className={`relative w-full aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br ${config.frame} p-1 shadow-xl shadow-slate-900/20 dark:shadow-black/50 z-10 border border-white/20 dark:border-slate-700/50`}>
          
          {/* Inner Screen */}
          <div className="relative w-full h-full rounded-[1.3rem] bg-black p-1 overflow-hidden shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
            
            {/* Screen Glass */}
            <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Glass Reflection */}
              <div className="absolute top-0 right-0 w-[150%] h-1/2 bg-gradient-to-b from-white/10 to-transparent rotate-12 origin-top-right translate-x-2 -translate-y-2 pointer-events-none" />

              {/* UI Detail */}
              <div className="flex flex-col items-center justify-center">
                {config.icon}
                <div className={`text-xl font-bold text-white mt-1 leading-none ${config.accent}`}>
                  {variant === 'lite' ? '98' : variant === 'pro' ? '72' : '92'}
                </div>
                <div className="text-[8px] font-medium text-slate-500 uppercase tracking-widest mt-0.5">
                  {variant === 'lite' ? 'SpO2' : variant === 'pro' ? 'BPM' : 'Score'}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Side Button */}
        <div className="absolute top-1/3 -right-0.5 w-1 h-6 bg-slate-500 rounded-r-sm z-0 shadow-sm" />

        {/* Bottom Strap */}
        <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-t ${config.band} rounded-b-lg shadow-inner z-0`} />
      </div>
    </div>
  )
}

import { Heart, Activity, BrainCircuit } from 'lucide-react'

interface ProductMiniVisualProps {
  variant: 'lite' | 'pro' | 'elite'
}

export default function ProductMiniVisual({ variant }: ProductMiniVisualProps) {
  
  const config = {
    lite: {
      frame: 'from-[#8e8e93] to-[#636366]',
      band: 'from-[#aeaeb2] to-[#c7c7cc] dark:from-[#48484a] dark:to-[#636366]',
      accentColor: '#06b6d4',
      icon: <Activity className="w-4 h-4" style={{ color: '#06b6d4' }} />,
      value: '98',
      unit: 'SpO2',
    },
    pro: {
      frame: 'from-[#48484a] to-[#3a3a3c]',
      band: 'from-[#3a3a3c] to-[#2c2c2e] dark:from-[#2c2c2e] dark:to-[#1c1c1e]',
      accentColor: '#0d9488',
      icon: <Heart className="w-4 h-4" style={{ color: '#0d9488' }} />,
      value: '72',
      unit: 'BPM',
    },
    elite: {
      frame: 'from-[#3a3a3c] to-[#1c1c1e]',
      band: 'from-[#2c2c2e] to-[#1c1c1e] dark:from-[#1c1c1e] dark:to-black',
      accentColor: '#8b5cf6',
      icon: <BrainCircuit className="w-4 h-4" style={{ color: '#8b5cf6' }} />,
      value: '92',
      unit: 'Score',
    },
  }[variant]

  return (
    <div className="relative w-full h-44 flex items-center justify-center">
      
      {/* Device */}
      <div className="relative z-10 w-[72px]">
        {/* Top strap */}
        <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-7 bg-gradient-to-b ${config.band} rounded-t-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]`} />

        {/* Body */}
        <div className={`relative w-full aspect-[4/5] rounded-xl bg-gradient-to-b ${config.frame} p-[2px] shadow-lg shadow-black/20 z-10 border border-white/10`}>
          <div className="w-full h-full rounded-[10px] bg-[#1c1c1e] p-[3px]">
            <div className="relative w-full h-full rounded-lg bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
              {/* Screen reflection */}
              <div className="absolute top-0 right-0 w-full h-[40%] bg-gradient-to-bl from-white/[0.05] to-transparent pointer-events-none" />
              
              {/* Ring */}
              <svg viewBox="0 0 50 50" className="w-10 h-10 -rotate-90 mb-1">
                <circle cx="25" cy="25" r="18" fill="none" stroke="#1c1c1e" strokeWidth="4" />
                <circle cx="25" cy="25" r="18" fill="none" stroke={config.accentColor} strokeWidth="4" strokeDasharray="113" strokeDashoffset="25" strokeLinecap="round" />
              </svg>
              
              <div className="text-sm font-bold text-white leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{config.value}</div>
              <div className="text-[6px] font-semibold uppercase tracking-widest mt-0.5" style={{ color: config.accentColor }}>{config.unit}</div>
            </div>
          </div>
        </div>

        {/* Side button */}
        <div className="absolute top-[30%] -right-[1px] w-[2px] h-4 bg-[#48484a] rounded-r-sm z-0" />

        {/* Bottom strap */}
        <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-7 bg-gradient-to-t ${config.band} rounded-b-md shadow-[inset_0_-1px_3px_rgba(0,0,0,0.2)]`} />
      </div>
    </div>
  )
}

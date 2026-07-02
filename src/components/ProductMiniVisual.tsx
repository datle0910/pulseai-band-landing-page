import { motion } from 'framer-motion'

interface ProductMiniVisualProps {
  variant: 'lite' | 'pro' | 'elite'
}

const configs = {
  lite: {
    glowColor: 'rgba(6,182,212,0.15)',
    frameGrad: 'from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700',
    bandGrad: 'from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700',
    screenAccent: '#06b6d4',
    metric1: { value: '78', label: 'Sleep', color: '#a78bfa' },
    metric2: { value: '70', label: 'HR', color: '#f472b6' },
  },
  pro: {
    glowColor: 'rgba(20,184,166,0.25)',
    frameGrad: 'from-teal-700 to-teal-900 dark:from-teal-800 dark:to-teal-950',
    bandGrad: 'from-teal-800 to-slate-900 dark:from-teal-900 dark:to-slate-950',
    screenAccent: '#14b8a6',
    metric1: { value: '86', label: 'AI', color: '#14b8a6' },
    metric2: { value: '98', label: 'SpO2', color: '#06b6d4' },
  },
  elite: {
    glowColor: 'rgba(139,92,246,0.15)',
    frameGrad: 'from-slate-700 to-slate-900 dark:from-slate-800 dark:to-black',
    bandGrad: 'from-slate-700 to-slate-950 dark:from-slate-800 dark:to-black',
    screenAccent: '#8b5cf6',
    metric1: { value: '92', label: 'Rec', color: '#8b5cf6' },
    metric2: { value: '56', label: 'HRV', color: '#06b6d4' },
  },
}

export default function ProductMiniVisual({ variant }: ProductMiniVisualProps) {
  const c = configs[variant]

  return (
    <div className="relative w-full h-44 flex items-center justify-center">
      {/* Soft glow behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl pointer-events-none"
        style={{ background: c.glowColor }}
      />

      {/* Watch assembly */}
      <motion.div
        className="relative z-10"
        initial={{ y: 4 }}
        animate={{ y: -4 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        {/* Top strap */}
        <div className={`mx-auto w-8 h-8 bg-gradient-to-b ${c.bandGrad} rounded-t-lg shadow-inner`} />

        {/* Watch body */}
        <div className={`relative w-[3.8rem] h-[4.6rem] rounded-[0.85rem] bg-gradient-to-b ${c.frameGrad} p-[2.5px] shadow-lg border border-white/10`}>
          {/* Screen bezel */}
          <div className="w-full h-full rounded-[0.7rem] bg-black p-[2px] overflow-hidden">
            {/* Screen */}
            <div className="relative w-full h-full rounded-[0.6rem] bg-gradient-to-b from-slate-950 to-black flex flex-col items-center justify-center gap-1 overflow-hidden">
              {/* Glass reflection */}
              <div className="absolute top-0 right-0 w-[120%] h-1/3 bg-gradient-to-b from-white/8 to-transparent rotate-12 origin-top-right pointer-events-none" />

              {/* Mini pulse line */}
              <svg viewBox="0 0 50 12" className="w-8 opacity-60">
                <polyline
                  points="0,6 8,6 12,2 16,10 20,4 24,8 28,6 50,6"
                  fill="none"
                  stroke={c.screenAccent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Metrics row */}
              <div className="flex gap-1.5 mt-0.5 font-tabular">
                <div className="text-center">
                  <div className="text-[9px] font-black text-white leading-none">{c.metric1.value}</div>
                  <div className="text-[5.5px] font-bold uppercase tracking-wider mt-0.5" style={{ color: c.metric1.color }}>{c.metric1.label}</div>
                </div>
                <div className="w-px h-3 bg-slate-800" />
                <div className="text-center">
                  <div className="text-[9px] font-black text-white leading-none">{c.metric2.value}</div>
                  <div className="text-[5.5px] font-bold uppercase tracking-wider mt-0.5" style={{ color: c.metric2.color }}>{c.metric2.label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side button */}
          <div className="absolute top-1/4 -right-[2px] w-[2.5px] h-3 bg-slate-500 rounded-r-sm" />
        </div>

        {/* Bottom strap */}
        <div className={`mx-auto w-8 h-8 bg-gradient-to-t ${c.bandGrad} rounded-b-lg shadow-inner`} />
      </motion.div>
    </div>
  )
}

export default function BrandLogo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const iconSize = size === 'large' ? 'w-10 h-10' : 'w-8 h-8'
  const textSize = size === 'large' ? 'text-xl' : 'text-lg'

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      {/* Icon: health ring with pulse line */}
      <div className={`relative ${iconSize} flex-shrink-0`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          {/* Gradient defs */}
          <defs>
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle cx="20" cy="20" r="17" stroke="url(#brandGrad)" strokeWidth="3" fill="none" opacity="0.3" />
          <circle cx="20" cy="20" r="17" stroke="url(#brandGrad)" strokeWidth="3" fill="none" strokeDasharray="80 27" strokeLinecap="round" />
          {/* Pulse line across center */}
          <polyline
            points="8,20 14,20 17,12 20,28 23,16 26,24 29,20 32,20"
            stroke="url(#brandGrad)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* AI dot */}
          <circle cx="33" cy="9" r="3.5" fill="#06b6d4" />
          <circle cx="33" cy="9" r="2" fill="white" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className={`${textSize} font-extrabold tracking-tight hidden sm:flex items-baseline gap-0`}>
        <span className="text-slate-900 dark:text-white">Pulse</span>
        <span className="text-teal-500">AI</span>
        <span className="text-slate-400 dark:text-slate-500 font-semibold ml-1">Band</span>
      </div>
    </div>
  )
}

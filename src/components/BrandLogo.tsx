interface BrandLogoProps {
  size?: 'default' | 'large'
}

export default function BrandLogo({ size = 'default' }: BrandLogoProps) {
  const iconSize = size === 'large' ? 'w-10 h-10' : 'w-7 h-7'
  const textSize = size === 'large' ? 'text-2xl' : 'text-lg'

  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className={`relative ${iconSize} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A99D" className="dark:stop-color-[#2DD4BF]" />
              <stop offset="100%" stopColor="#06B6D4" className="dark:stop-color-[#06B6D4]" />
            </linearGradient>
          </defs>
          
          {/* Health ring */}
          <circle 
            cx="20" 
            cy="20" 
            r="16.5" 
            stroke="url(#brandGradient)" 
            strokeWidth="3.5" 
            fill="none" 
            strokeDasharray="75 25" 
            strokeLinecap="round"
            className="transition-transform duration-1000 group-hover:rotate-45 origin-center"
          />
          
          {/* Pulse line */}
          <path
            d="M9 20h4.5l2.5-7 3.5 14 2.5-11 2.5 7h6"
            stroke="url(#brandGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />
          
          {/* Sensor dot */}
          <circle 
            cx="32" 
            cy="10" 
            r="3.5" 
            fill="#06B6D4" 
            className="animate-pulse dark:fill-[#2DD4BF]"
          />
        </svg>
      </div>

      <div className={`${textSize} font-black tracking-tight flex items-baseline select-none`}>
        <span className="text-slate-900 dark:text-white font-extrabold transition-colors">Pulse</span>
        <span className="text-[#00A99D] dark:text-[#2DD4BF] font-black transition-colors">AI</span>
        <span className="text-slate-400 dark:text-slate-500 font-semibold ml-0.5 transition-colors">Band</span>
      </div>
    </div>
  )
}

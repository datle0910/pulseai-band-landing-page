export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* Brand Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Outer Glowing Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500" />
        
        {/* Inner Dark/Light Cutout */}
        <div className="absolute inset-[3px] rounded-full bg-white dark:bg-slate-950 flex items-center justify-center">
          {/* Pulse / Heartbeat Line */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-teal-500" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        
        {/* Little AI dot */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-white dark:border-slate-950 shadow-sm" />
      </div>

      {/* Brand Wordmark */}
      <div className="text-xl font-extrabold tracking-tight hidden sm:flex items-center gap-1">
        <span className="text-slate-900 dark:text-white">Pulse</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">AI</span>
        <span className="text-slate-400 dark:text-slate-500 font-semibold text-lg ml-0.5">Band</span>
      </div>
    </div>
  )
}

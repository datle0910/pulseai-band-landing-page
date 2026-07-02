export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer select-none">
      {/* Icon Mark: Simplified ring with pulse */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Outer ring */}
        <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 dark:text-slate-600" />
        {/* Accent arc */}
        <path d="M14 1.5A12.5 12.5 0 0 1 26.5 14" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pulse line */}
        <polyline points="6,14 10,14 12,9 16,19 18,14 22,14" fill="none" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* AI dot */}
        <circle cx="22" cy="6" r="2.5" fill="#0d9488" />
        <circle cx="22" cy="6" r="1.2" fill="white" className="dark:fill-slate-950" />
      </svg>

      {/* Wordmark */}
      {!compact && (
        <span className="text-[17px] font-semibold tracking-tight hidden sm:inline">
          <span className="text-slate-800 dark:text-slate-100">Pulse</span>
          <span className="text-teal-600 dark:text-teal-400">AI</span>
          <span className="text-slate-400 dark:text-slate-500 ml-0.5 font-normal">Band</span>
        </span>
      )}
    </div>
  )
}

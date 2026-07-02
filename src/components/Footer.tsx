import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-[#F5F7FA] dark:bg-[#020617] transition-colors duration-300">
      {/* Divider top */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200/60 dark:bg-slate-800/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <BrandLogo size="large" />
          </div>

          <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 max-w-md leading-relaxed uppercase tracking-wider">
            AI Health Wearable for everyday recovery.
          </p>

          <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 w-full max-w-2xl">
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest">
              Built for Helicorp IT Website Intern Test.
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
              © {new Date().getFullYear()} PulseAI Band. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

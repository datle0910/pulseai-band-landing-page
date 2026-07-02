import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Divider top */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200/60 dark:bg-slate-800/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <BrandLogo size="large" />
          </div>

          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            AI Health Wearable for everyday recovery.
          </p>

          <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 w-full max-w-2xl">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-widest">
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

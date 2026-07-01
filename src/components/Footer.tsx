export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-md shadow-teal-500/25">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Pulse<span className="text-teal-500">AI</span> Band
            </span>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Vòng tay thông minh theo dõi sức khỏe bằng AI.
          </p>

          <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Built for Helicorp IT Website Intern Test.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              © 2026 PulseAI Band. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

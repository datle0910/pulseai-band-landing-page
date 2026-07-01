import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'AI Insight', href: '#ai-insight' },
  { label: 'Thông số', href: '#specs' },
  { label: 'Trải nghiệm', href: '#story' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center shadow-md shadow-teal-500/25 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              Pulse<span className="text-teal-500">AI</span> Band
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#newsletter"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            Đăng ký nhận tin
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setMobileOpen(false)}
              className="block text-center mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md"
            >
              Đăng ký nhận tin
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

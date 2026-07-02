import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { trackCtaClick } from '../utils/tracking'
import ThemeToggle from './ThemeToggle'
import BrandLogo from './BrandLogo'

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'AI Insight', href: '#ai-insight' },
  { label: 'Thông số', href: '#specs' },
  { label: 'Mua ngay', href: '#store' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#newsletter"
              onClick={() => trackCtaClick('navbar_signup')}
              className="inline-flex items-center px-5 py-2 rounded-full text-[13px] font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors"
            >
              Nhận ưu đãi sớm
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-white/[0.06] bg-white/95 dark:bg-[#020617]/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => { trackCtaClick('navbar_signup_mobile'); setMobileOpen(false) }}
              className="block text-center mt-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-600 dark:bg-teal-500"
            >
              Nhận ưu đãi sớm
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

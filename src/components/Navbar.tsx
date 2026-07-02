import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { trackCtaClick } from '../utils/tracking'
import ThemeToggle from './ThemeToggle'
import BrandLogo from './BrandLogo'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'AI Insight', href: '#ai-insight' },
  { label: 'Thông số', href: '#specs' },
  { label: 'Mua hàng', href: '#store' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-white/70 dark:bg-slate-950/75 border-b border-slate-200/40 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
              href="#store"
              onClick={() => trackCtaClick('navbar')}
              className="inline-flex items-center px-5 py-2 rounded-full text-[13px] font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
            >
              Mua ngay
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#store"
                onClick={() => { trackCtaClick('navbar'); setMobileOpen(false) }}
                className="block text-center mt-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900"
              >
                Mua ngay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

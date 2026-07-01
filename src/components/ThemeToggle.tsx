import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label={theme === 'dark' ? 'Chuyển sang Light Mode' : 'Chuyển sang Dark Mode'}
    >
      <Sun
        size={18}
        className={`absolute inset-0 m-auto transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      <Moon
        size={18}
        className={`transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  )
}

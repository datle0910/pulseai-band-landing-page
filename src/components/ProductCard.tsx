import { Heart, ShoppingCart, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  isFavorite: boolean
  onToggleFavorite: (p: Product) => void
  onAddToCart: (p: Product) => void
  onView: (p: Product) => void
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onView,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onMouseEnter={() => onView(product)}
      className={`relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border transition-all duration-300 ${
        product.isBestValue
          ? 'border-teal-400/50 shadow-[0_10px_40px_rgba(20,184,166,0.15)] dark:shadow-[0_10px_40px_rgba(20,184,166,0.1)]'
          : 'border-white/40 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl'
      }`}
    >
      {product.isBestValue && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-teal-500/30 flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Best Value
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(product)}
          className={`p-2.5 rounded-full transition-all duration-300 ${
            isFavorite
              ? 'bg-rose-100 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400 scale-110 shadow-sm shadow-rose-500/20'
              : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20'
          }`}
          aria-label={isFavorite ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
        >
          <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
        </button>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 min-h-[40px]">
        {product.description}
      </p>

      <ul className="space-y-4 mb-8 flex-1">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-teal-600 dark:text-teal-400" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onAddToCart(product)}
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
          product.isBestValue
            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 hover:from-teal-400 hover:to-cyan-400'
            : 'bg-slate-900 text-white dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 shadow-md hover:shadow-lg'
        }`}
      >
        <ShoppingCart size={18} />
        Thêm vào giỏ
      </motion.button>
    </motion.div>
  )
}

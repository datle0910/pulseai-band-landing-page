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
      whileHover={{ y: -5 }}
      onMouseEnter={() => onView(product)}
      className={`relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/80 border shadow-lg transition-all ${
        product.isBestValue
          ? 'border-teal-500 shadow-teal-500/20'
          : 'border-slate-200 dark:border-slate-700 shadow-slate-200/50 dark:shadow-none'
      }`}
    >
      {product.isBestValue && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
          Best Value
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {product.name}
          </h3>
          <div className="mt-2 text-xl font-extrabold text-teal-600 dark:text-teal-400">
            {formatPrice(product.price)}
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(product)}
          className={`p-2 rounded-full transition-colors ${
            isFavorite
              ? 'bg-rose-100 text-rose-500 dark:bg-rose-500/20 dark:text-rose-400'
              : 'bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-400'
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
        className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
          product.isBestValue
            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30'
            : 'bg-slate-900 text-white dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600'
        }`}
      >
        <ShoppingCart size={18} />
        Thêm vào giỏ
      </motion.button>
    </motion.div>
  )
}

import { Heart, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Product } from '../data/products'
import ProductMiniVisual from './ProductMiniVisual'

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

  const variant = product.id.includes('lite') ? 'lite' : product.id.includes('pro') ? 'pro' : 'elite'
  const tagline = variant === 'lite' ? 'Essential Tracking' : variant === 'pro' ? 'Best for Everyday Health' : 'Advanced Recovery'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseEnter={() => onView(product)}
      className={`relative flex flex-col rounded-2xl bg-white dark:bg-[#0f172a] transition-all duration-300 overflow-hidden ${
        product.isBestValue
          ? 'border border-teal-500/40 shadow-lg shadow-teal-500/[0.08] ring-1 ring-teal-500/20'
          : 'border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Product Visual Area */}
      <div className={`relative px-6 pt-6 pb-2 ${product.isBestValue ? 'bg-teal-50/30 dark:bg-teal-500/[0.03]' : 'bg-slate-50/50 dark:bg-slate-900/50'}`}>
        {/* Top row: badge + fav */}
        <div className="flex justify-between items-start mb-2">
          <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md ${
            product.isBestValue
              ? 'bg-teal-600 text-white'
              : 'bg-slate-200/70 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400'
          }`}>
            {tagline}
          </span>
          <button
            onClick={() => onToggleFavorite(product)}
            className={`p-1.5 rounded-full transition-colors ${
              isFavorite
                ? 'text-rose-500'
                : 'text-slate-300 dark:text-slate-600 hover:text-rose-400'
            }`}
            aria-label="Toggle favorite"
          >
            <Heart size={16} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>
        
        <ProductMiniVisual variant={variant} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 pt-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-5">
          <span className="text-2xl font-bold text-slate-900 dark:text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Check size={14} className={`mt-0.5 shrink-0 ${product.isBestValue ? 'text-teal-500' : 'text-slate-400 dark:text-slate-600'}`} />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
            product.isBestValue
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          Thêm vào giỏ
        </button>
      </div>
    </motion.div>
  )
}

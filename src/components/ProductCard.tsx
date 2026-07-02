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

  // Determine variant string based on product id
  const variant = product.id.includes('lite') ? 'lite' : product.id.includes('pro') ? 'pro' : 'elite'
  const badgeLabel = variant === 'lite' ? 'Essential' : variant === 'pro' ? 'Best Value' : 'Performance'

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => onView(product)}
      className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 transition-all duration-500 overflow-hidden ${
        product.isBestValue
          ? 'border border-teal-500/50 shadow-2xl shadow-teal-500/20'
          : 'border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {product.isBestValue && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400" />
      )}

      {/* Header & Label */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
              product.isBestValue 
                ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
            }`}>
              {badgeLabel}
            </span>
          </div>
          <button
            onClick={() => onToggleFavorite(product)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite
                ? 'bg-rose-50 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400'
                : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800'
            }`}
            aria-label="Toggle favorite"
          >
            <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">
          {product.description}
        </p>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>

      {/* Product Mini Visual Mock */}
      <div className="w-full h-48 mb-8 rounded-3xl bg-slate-50 dark:bg-slate-950/50 flex items-center justify-center relative border border-slate-100 dark:border-slate-800/80 overflow-hidden">
        <ProductMiniVisual variant={variant} />
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-10 flex-1">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <Check size={18} className={product.isBestValue ? "text-teal-500 mt-0.5 shrink-0" : "text-slate-400 mt-0.5 shrink-0"} />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <button
        onClick={() => onAddToCart(product)}
        className={`w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
          product.isBestValue
            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-xl shadow-teal-500/25'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white shadow-md'
        }`}
      >
        Mua ngay
      </button>

    </motion.div>
  )
}

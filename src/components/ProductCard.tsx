import { Heart, ShoppingCart, Check, Info } from 'lucide-react'
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

  // Determine watch variant for visual component
  const watchVariant = product.id.includes('lite') ? 'lite' : product.id.includes('pro') ? 'pro' : 'elite'

  return (
    <motion.div
      whileHover={{ y: -6 }}
      onMouseEnter={() => onView(product)}
      className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 transition-all duration-500 overflow-hidden ${
        product.isBestValue
          ? 'border-2 border-teal-500/80 shadow-2xl shadow-teal-500/10'
          : 'border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Top Gradient Accent Bar for Best Value */}
      {product.isBestValue && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-400" />
      )}

      {/* Label and Favorite action */}
      <div className="flex justify-between items-center mb-5">
        <span className={`px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border ${
          product.isBestValue
            ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/40'
            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-700/50'
        }`}>
          {product.label}
        </span>

        <button
          onClick={() => onToggleFavorite(product)}
          className={`p-2 rounded-full transition-colors ${
            isFavorite
              ? 'bg-rose-50 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400'
              : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800'
          }`}
          aria-label={isFavorite ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
        >
          <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
        </button>
      </div>

      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          {product.name}
        </h3>
        <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-500/5 dark:bg-teal-500/10 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5">
          <Info size={12} />
          Phù hợp: {product.bestFor}
        </p>
        <p className="mt-3.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[48px]">
          {product.description}
        </p>
      </div>

      {/* Pricing display */}
      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Interactive Mockup Visual */}
      <div className="w-full bg-slate-50 dark:bg-slate-950/60 rounded-3xl border border-slate-100 dark:border-slate-800/80 mb-6 flex items-center justify-center">
        <ProductMiniVisual variant={watchVariant} />
      </div>

      {/* Dynamic Key specs bar */}
      <div className="grid grid-cols-3 gap-2 py-3.5 px-4 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-100 dark:border-slate-800/60 text-center mb-6">
        <div>
          <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Pin</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{product.battery}</div>
        </div>
        <div className="border-x border-slate-200 dark:border-slate-800">
          <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Màu sắc</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate px-1">{product.color.split(' ')[1] || product.color}</div>
        </div>
        <div>
          <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Bảo hành</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">{product.warranty}</div>
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-3.5 mb-8 flex-1">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-700 dark:text-slate-300">
            <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Check size={11} className="text-teal-600 dark:text-teal-400 stroke-[3]" />
            </div>
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Purchase CTA button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onAddToCart(product)}
        className={`w-full py-4 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 ${
          product.isBestValue
            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-teal-500/20 hover:shadow-lg'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white'
        }`}
      >
        <ShoppingCart size={15} />
        Thêm vào giỏ
      </motion.button>
    </motion.div>
  )
}

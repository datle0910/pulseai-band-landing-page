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

  const watchVariant = product.id.includes('lite') ? 'lite' : product.id.includes('pro') ? 'pro' : 'elite'

  return (
    <div className="relative group w-full">
      {/* Background glow shadow */}
      <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#00A99D] to-[#06B6D4] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none z-0" />
      
      <motion.div
        whileHover={{ y: -6 }}
        onMouseEnter={() => onView(product)}
        className={`relative flex flex-col p-8 rounded-[2.4rem] bg-white dark:bg-[#0B1220] transition-all duration-500 overflow-hidden z-10 ${
          product.isBestValue
            ? 'border-2 border-[#00A99D] dark:border-[#2DD4BF] shadow-xl'
            : 'border border-slate-200 dark:border-slate-800 shadow-sm'
        }`}
      >
        {/* Recommended Tag */}
        {product.isBestValue && (
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00A99D] to-[#2DD4BF]" />
        )}

        {/* Card Header Info */}
        <div className="flex justify-between items-center mb-5">
          <span className={`px-3.5 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border ${
            product.isBestValue
              ? 'bg-teal-50 dark:bg-teal-950/40 text-[#00A99D] dark:text-[#2DD4BF] border-teal-200/50'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200/60 dark:border-slate-800'
          }`}>
            {product.label}
          </span>

          <button
            onClick={() => onToggleFavorite(product)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite
                ? 'bg-rose-500/10 text-rose-500'
                : 'text-slate-400 hover:text-rose-500 hover:bg-rose-500/5'
            }`}
            aria-label={isFavorite ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
          >
            <Heart size={16} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>

        {/* Body Text */}
        <div className="mb-4">
          <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
            {product.name}
          </h3>
          <div className="mt-2 text-[10px] font-black text-[#00A99D] dark:text-[#2DD4BF] bg-teal-500/5 dark:bg-teal-500/10 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 leading-none">
            <Info size={11} />
            Phù hợp: {product.bestFor}
          </div>
          <p className="mt-3.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[48px] font-medium">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-5">
          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight font-tabular">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Graphic Display */}
        <div className="w-full bg-[#F5F7FA] dark:bg-slate-950/60 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 mb-6 flex items-center justify-center">
          <ProductMiniVisual variant={watchVariant} />
        </div>

        {/* Detailed specifications matrix */}
        <div className="grid grid-cols-3 gap-1 py-3 px-1 bg-slate-50 dark:bg-slate-950/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 text-center mb-6">
          <div>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Pin</span>
            <span className="text-xs font-black text-slate-800 dark:text-slate-200 font-tabular mt-0.5 block">{product.battery}</span>
          </div>
          <div className="border-x border-slate-200 dark:border-slate-800/80">
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Màu dây</span>
            <span className="text-xs font-black text-slate-800 dark:text-slate-200 mt-0.5 block truncate px-1">{product.color.split(' ').slice(1).join(' ') || product.color}</span>
          </div>
          <div>
            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Bảo hành</span>
            <span className="text-xs font-black text-slate-800 dark:text-slate-200 font-tabular mt-0.5 block">{product.warranty}</span>
          </div>
        </div>

        {/* Sensor strip info */}
        <div className="mb-6">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-2">Cảm biến tích hợp</span>
          <div className="flex flex-wrap gap-1">
            {product.sensors.map((sensor) => (
              <span key={sensor} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-[9px] font-bold text-slate-600 dark:text-slate-400">
                {sensor}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features Bullet Points */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center shrink-0">
                <Check size={10} className="text-[#00A99D] dark:text-[#2DD4BF] stroke-[3]" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Add To Cart CTA Action */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onAddToCart(product)}
          className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${
            product.isBestValue
              ? 'bg-gradient-to-r from-[#00A99D] to-[#06B6D4] text-white hover:from-[#008f85] hover:to-[#059eb8]'
              : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
          }`}
        >
          <ShoppingCart size={14} />
          Thêm vào giỏ
        </motion.button>
      </motion.div>
    </div>
  )
}

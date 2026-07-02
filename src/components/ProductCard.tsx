import { Heart, Check } from 'lucide-react'
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
      className={`relative flex flex-col p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 transition-all duration-500 overflow-hidden ${
        product.isBestValue
          ? 'border-2 border-teal-500 shadow-2xl shadow-teal-500/10'
          : 'border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {product.isBestValue && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400" />
      )}

      {/* Header & Price */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {product.name}
          </h3>
          <button
            onClick={() => onToggleFavorite(product)}
            className={`p-2 rounded-full transition-colors ${
              isFavorite
                ? 'bg-rose-50 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400'
                : 'text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800'
            }`}
          >
            <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
          </button>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">
          {product.description}
        </p>
        <div className="flex items-center gap-3">
          <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {formatPrice(product.price)}
          </div>
          {product.isBestValue && (
            <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-teal-100 dark:border-teal-800">
              Pro Choice
            </span>
          )}
        </div>
      </div>

      {/* Product Mini Visual Mock */}
      <div className="w-full h-40 mb-8 rounded-3xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-slate-200/50 dark:to-slate-800/50 pointer-events-none" />
        
        {/* Simple CSS Band Mockup for Card */}
        <div className="relative flex flex-col items-center">
          <div className="w-8 h-6 bg-slate-300 dark:bg-slate-700 rounded-t-xl" />
          <div className="w-20 h-24 rounded-[1.2rem] border-[3px] border-slate-800 dark:border-slate-700 bg-black shadow-lg relative flex items-center justify-center overflow-hidden">
             <div className={`w-12 h-12 rounded-full blur-xl opacity-60 ${product.isBestValue ? 'bg-teal-500' : 'bg-slate-500'}`} />
          </div>
          <div className="w-8 h-6 bg-slate-300 dark:bg-slate-700 rounded-b-xl" />
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10 flex-1">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <Check size={18} className={product.isBestValue ? "text-teal-500 mt-0.5" : "text-slate-400 mt-0.5"} />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <button
        onClick={() => onAddToCart(product)}
        className={`w-full py-4 rounded-2xl text-base font-bold transition-all duration-300 ${
          product.isBestValue
            ? 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 shadow-xl'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700'
        }`}
      >
        Thêm vào giỏ
      </button>

    </motion.div>
  )
}

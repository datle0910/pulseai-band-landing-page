import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations'
import { products } from '../data/products'
import type { Product } from '../data/products'
import ProductCard from './ProductCard'

interface MiniStoreSectionProps {
  favoriteIds: string[]
  recentlyViewedIds: string[]
  onToggleFavorite: (p: Product) => void
  onAddToCart: (p: Product) => void
  onViewProduct: (p: Product) => void
}

export default function MiniStoreSection({
  favoriteIds,
  recentlyViewedIds,
  onToggleFavorite,
  onAddToCart,
  onViewProduct,
}: MiniStoreSectionProps) {
  const recentlyViewedProducts = recentlyViewedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined)

  return (
    <section id="store" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Chọn phiên bản phù hợp <br className="hidden sm:block" />
            với nhịp sống của bạn
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
          >
            Từ theo dõi sức khỏe cơ bản đến phân tích phục hồi chuyên sâu, mỗi phiên bản PulseAI Band được thiết kế cho một cách sống khác nhau.
          </motion.p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard
                product={product}
                isFavorite={favoriteIds.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
                onAddToCart={onAddToCart}
                onView={onViewProduct}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Comparison Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-black uppercase text-slate-400 tracking-wider">So sánh nhanh:</span>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 text-xs font-bold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                <span>Lite — Theo dõi cơ bản</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-teal-600 dark:text-teal-400">Pro — Cân bằng tốt nhất</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Elite — Phục hồi chuyên sâu</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recently Viewed Drawer / Bar */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm border border-slate-200/40 dark:border-slate-800/40 rounded-full px-6 py-3.5 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-widest shrink-0">
              <Clock size={15} />
              Đã xem gần đây:
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {recentlyViewedProducts.map((p) => (
                <div
                  key={p.id}
                  className="px-3.5 py-1 text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all"
                >
                  {p.name}
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

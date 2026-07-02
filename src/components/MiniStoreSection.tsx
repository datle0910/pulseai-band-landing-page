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
    <section id="store" className="py-24 sm:py-32 bg-[#f7f8fa] dark:bg-[#020617] overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mb-14"
        >
          <motion.p variants={fadeUp} className="text-teal-600 dark:text-teal-400 text-sm font-semibold mb-3 tracking-wide">
            Chọn phiên bản
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Chọn PulseAI Band phù hợp{' '}
            <span className="text-slate-400 dark:text-slate-500">với nhịp sống của bạn.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6"
          >
            Từ theo dõi sức khỏe cơ bản đến phân tích phục hồi chuyên sâu bằng AI — mỗi phiên bản được thiết kế cho một nhu cầu khác nhau.
          </motion.p>

          {/* Trust line */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span>✓ Miễn phí tư vấn</span>
            <span>✓ Bảo hành 12 tháng</span>
            <span>✓ Đồng bộ iOS & Android</span>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mb-10"
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

        {/* Comparison strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="max-w-3xl border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
        >
          <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">So sánh nhanh</span>
          </div>
          <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#0f172a]">
            <div className="p-4 text-center">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Lite</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Nhịp tim, giấc ngủ, pin 7 ngày</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-1">Pro</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">AI Insight, SpO2, IP68, pin 10 ngày</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Elite</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Recovery Score, premium strap, pin 14 ngày</div>
            </div>
          </div>
        </motion.div>

        {/* Recently Viewed */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mt-12 max-w-xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Clock size={13} />
                Bạn vừa xem:
              </span>
              {recentlyViewedProducts.map((p) => (
                <span
                  key={p.id}
                  className="px-3 py-1 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

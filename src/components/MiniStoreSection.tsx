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
    <section id="store" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Chọn phiên bản của bạn.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-slate-600 dark:text-slate-400"
          >
            Giao hàng miễn phí toàn quốc. Bảo hành 1 đổi 1 trong 12 tháng.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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

        {/* Recently Viewed - Moved below and made extremely subtle */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Clock size={14} />
              Lịch sử xem:
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {recentlyViewedProducts.map((p) => (
                <div
                  key={p.id}
                  className="px-4 py-2 text-xs font-semibold bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800"
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

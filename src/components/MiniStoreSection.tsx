import { motion } from 'framer-motion'
import { ShoppingBag, Clock } from 'lucide-react'
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
    <section id="store" className="py-20 sm:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold mb-4 border border-teal-200/60 dark:border-teal-500/20"
          >
            <ShoppingBag size={14} />
            Mini E-commerce
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Chọn phiên bản PulseAI Band phù hợp với bạn
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-500 dark:text-slate-400"
          >
            Trải nghiệm mua sắm mini ngay trên landing page: chọn phiên bản, lưu yêu thích và thêm vào giỏ hàng chỉ trong vài giây.
          </motion.p>
        </motion.div>

        {/* Recently Viewed */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <Clock size={14} />
              Đã xem gần đây:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {recentlyViewedProducts.map((p) => (
                <div
                  key={p.id}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700"
                >
                  {p.name}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
      </div>
    </section>
  )
}

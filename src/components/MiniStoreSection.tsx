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
    <section id="store" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Sức khỏe của bạn. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Phong cách của bạn.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Chọn phiên bản PulseAI Band phù hợp nhất với nhu cầu luyện tập và phong cách sống của bạn.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
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

        {/* Recently Viewed - Clean integration */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mt-20 max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <Clock size={16} />
                <span>Bạn vừa xem:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {recentlyViewedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <div className={`w-2 h-2 rounded-full ${p.isBestValue ? 'bg-teal-500' : 'bg-slate-400'}`} />
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

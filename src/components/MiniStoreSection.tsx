import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Headset, SmartphoneNfc } from 'lucide-react'
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Chọn phiên bản PulseAI Band phù hợp với nhịp sống của bạn
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8"
          >
            Từ theo dõi sức khỏe cơ bản đến AI Health Insight chuyên sâu, mỗi phiên bản được thiết kế cho một nhu cầu khác nhau.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <Headset className="w-5 h-5 text-teal-500" /> Miễn phí tư vấn
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-5 h-5 text-teal-500" /> Bảo hành 12 tháng
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <SmartphoneNfc className="w-5 h-5 text-teal-500" /> Đồng bộ iOS & Android
            </div>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
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

        {/* Comparison Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="max-w-4xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
        >
          <h4 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">So sánh nhanh tính năng chính</h4>
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-200 dark:divide-slate-700">
            <div>
              <div className="font-bold text-slate-900 dark:text-white mb-1">Lite</div>
              <div className="text-xs text-slate-500">Theo dõi sức khỏe cơ bản</div>
            </div>
            <div>
              <div className="font-bold text-teal-600 dark:text-teal-400 mb-1">Pro</div>
              <div className="text-xs text-slate-500">AI Insight đầy đủ</div>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white mb-1">Elite</div>
              <div className="text-xs text-slate-500">Phục hồi chuyên sâu</div>
            </div>
          </div>
        </motion.div>

        {/* Recently Viewed - Clean integration */}
        {recentlyViewedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-3 rounded-full bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 pl-4">
                <Clock size={16} />
                <span>Bạn vừa xem:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pr-2">
                {recentlyViewedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 px-4 py-1 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300"
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

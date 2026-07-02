import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'
import type { CartItem } from '../hooks/useMiniCart'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
  cartItems: CartItem[]
  cartTotal: number
  cartCount: number
  onIncrease: (id: string) => void
  onDecrease: (id: string) => void
  onRemove: (id: string) => void
  onConsult: () => void
}

export default function CartDrawer({
  isOpen,
  onClose,
  onToggle,
  cartItems,
  cartTotal,
  cartCount,
  onIncrease,
  onDecrease,
  onRemove,
  onConsult,
}: CartDrawerProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className={`fixed bottom-24 right-4 sm:right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700/50 text-teal-600 dark:text-teal-400 hover:scale-110 hover:shadow-teal-500/20`}
        aria-label="Giỏ hàng"
      >
        <ShoppingCart size={22} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-900">
            {cartCount}
          </span>
        )}
      </motion.button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[90vw] max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl z-50 flex flex-col border-l border-white/20 dark:border-slate-800/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center">
                    <ShoppingCart size={16} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  Giỏ hàng
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
                      <ShoppingCart size={32} className="opacity-40" />
                    </div>
                    <p className="font-medium text-slate-500">Giỏ hàng trống</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-white/50 dark:border-slate-600/50 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <div className="w-12 h-12 rounded-full border-4 border-teal-500/20 dark:border-teal-400/10" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1">
                            {item.name}
                          </h4>
                          <div className="text-teal-600 dark:text-teal-400 font-bold text-sm mt-0.5">
                            {formatPrice(item.price)}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/50 rounded-lg p-1 border border-slate-200/50 dark:border-slate-700/50">
                            <button
                              onClick={() => onDecrease(item.id)}
                              className="p-1.5 rounded-md text-slate-500 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:shadow-sm disabled:opacity-50 transition-all"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onIncrease(item.id)}
                              className="p-1.5 rounded-md text-slate-500 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:shadow-sm transition-all"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => onRemove(item.id)}
                            className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Tổng tạm tính</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  
                  <button
                    onClick={onConsult}
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 hover:from-teal-400 hover:to-cyan-400 transition-all hover:-translate-y-0.5"
                  >
                    Đăng ký tư vấn mua hàng
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-[11px] text-slate-400/80 mt-3 font-medium">
                    Để lại thông tin, chuyên viên sẽ liên hệ hỗ trợ bạn chọn size và màu sắc.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

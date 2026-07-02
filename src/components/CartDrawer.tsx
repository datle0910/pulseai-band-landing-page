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
        className="fixed bottom-[5.5rem] right-4 sm:right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-slate-900/10 dark:shadow-black/40 transition-colors bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-100 dark:hover:border-teal-900/50"
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
              className="fixed top-0 right-0 h-[100dvh] w-[90vw] max-w-md bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col border-l border-slate-200 dark:border-slate-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShoppingCart size={20} className="text-teal-500" />
                  Giỏ hàng của bạn
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                    <ShoppingCart size={48} className="opacity-20" />
                    <p>Giỏ hàng đang trống</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                        {/* Placeholder product icon */}
                        <div className="w-10 h-10 rounded-full border-4 border-teal-500/20" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white line-clamp-1">
                            {item.name}
                          </h4>
                          <div className="text-teal-600 dark:text-teal-400 font-medium text-sm mt-0.5">
                            {formatPrice(item.price)}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
                            <button
                              onClick={() => onDecrease(item.id)}
                              className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onIncrease(item.id)}
                              className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
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
                <div className="border-t border-slate-100 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 dark:text-slate-400">Tổng tạm tính</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  
                  <button
                    onClick={onConsult}
                    className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Đăng ký tư vấn mua hàng
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
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

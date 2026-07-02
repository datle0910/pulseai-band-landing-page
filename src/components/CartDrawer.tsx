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
        className="fixed bottom-[5.5rem] right-4 sm:right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-slate-900/10 dark:shadow-black/40 transition-colors bg-white dark:bg-[#0B1220] border-2 border-slate-100 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400"
        aria-label="Giỏ hàng"
      >
        <ShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white dark:border-slate-900">
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
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-[100dvh] w-[90vw] max-w-md bg-white dark:bg-[#0B1220] shadow-2xl z-50 flex flex-col border-l border-slate-200 dark:border-slate-800/80"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800/80">
                <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide">
                  <ShoppingCart size={18} className="text-[#00A99D] dark:text-[#2DD4BF]" />
                  Giỏ hàng của bạn
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                    <ShoppingCart size={40} className="opacity-20" />
                    <p className="text-xs font-bold uppercase tracking-wider">Giỏ hàng đang trống</p>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    const accentColor = item.id.includes('lite') 
                      ? 'bg-cyan-500' 
                      : item.id.includes('pro') 
                        ? 'bg-teal-500' 
                        : 'bg-purple-500'
                    return (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-[#F5F7FA] dark:bg-slate-950/60 rounded-xl border border-slate-200/50 dark:border-slate-800/60 flex items-center justify-center flex-shrink-0">
                          {/* Mini device accent representation */}
                          <div className={`w-8 h-10 rounded-md border-2 border-black/10 flex flex-col items-center justify-between p-1 overflow-hidden relative ${accentColor}`}>
                            <div className="w-full h-full bg-slate-950 rounded-sm" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white line-clamp-1">
                              {item.name}
                            </h4>
                            <div className="text-[#00A99D] dark:text-[#2DD4BF] font-black text-xs mt-0.5 font-tabular">
                              {formatPrice(item.price)}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-950/40 rounded-lg p-1 border border-slate-200/60 dark:border-slate-800/80">
                              <button
                                onClick={() => onDecrease(item.id)}
                                className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 w-4 text-center font-tabular">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onIncrease(item.id)}
                                className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => onRemove(item.id)}
                              className="p-1.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-slate-100 dark:border-slate-800/80 p-6 bg-slate-50 dark:bg-slate-950/40">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tổng tạm tính</span>
                    <span className="text-lg font-black text-slate-900 dark:text-white font-tabular">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  
                  <button
                    onClick={onConsult}
                    className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-[#00A99D] to-[#06B6D4] text-white shadow-lg transition-all text-xs uppercase tracking-wider"
                  >
                    Đăng ký tư vấn mua hàng
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-center text-[10px] font-medium text-slate-400 mt-3">
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

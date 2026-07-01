import { useState, useEffect } from 'react'
import { trackEvent } from '../utils/tracking'
import { products } from '../data/products'
import type { Product } from '../data/products'
import toast from 'react-hot-toast'

export interface CartItem extends Product {
  quantity: number
}

const CART_KEY = 'pulseai-cart'
const FAV_KEY = 'pulseai-favorites'
const RECENT_KEY = 'pulseai-recently-viewed'

function getLocalData<T>(key: string, defaultValue: T): T {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

export function useMiniCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    getLocalData<CartItem[]>(CART_KEY, [])
  )
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() =>
    getLocalData<string[]>(FAV_KEY, [])
  )
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() =>
    getLocalData<string[]>(RECENT_KEY, [])
  )
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Sync to local storage
  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    window.localStorage.setItem(FAV_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  useEffect(() => {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(recentlyViewedIds))
  }, [recentlyViewedIds])

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    
    toast.success(`Đã thêm ${product.name} vào giỏ hàng.`, {
      icon: '🛒',
      duration: 3000,
    })

    trackEvent('add_to_cart', { productId: product.id, productName: product.name })
  }

  function removeFromCart(productId: string) {
    const product = products.find((p) => p.id === productId)
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
    if (product) {
      trackEvent('remove_from_cart', { productId, productName: product.name })
    }
  }

  function increaseQuantity(productId: string) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decreaseQuantity(productId: string) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  function toggleFavorite(product: Product) {
    setFavoriteIds((prev) => {
      const isFav = prev.includes(product.id)
      const next = isFav
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
      
      if (!isFav) {
        toast.success('Đã lưu vào danh sách yêu thích.', { icon: '❤️' })
      } else {
        toast('Đã xóa khỏi danh sách yêu thích.', { icon: '💔' })
      }

      trackEvent('favorite_toggle', {
        productId: product.id,
        productName: product.name,
        active: !isFav,
      })

      return next
    })
  }

  function markProductViewed(product: Product) {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== product.id)
      return [product.id, ...filtered].slice(0, 4) // Keep last 4
    })
    trackEvent('product_view', { productId: product.id, productName: product.name })
  }

  function clearCart() {
    setCartItems([])
  }

  function toggleCart() {
    setIsCartOpen((prev) => {
      const next = !prev
      if (next) trackEvent('cart_open')
      return next
    })
  }

  function consultCheckout() {
    setIsCartOpen(false)
    trackEvent('cart_consult_click', { cartTotal, cartCount })
    
    // Scroll to newsletter
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
    
    setTimeout(() => {
      toast('Hãy để lại thông tin để PulseAI Band tư vấn phiên bản phù hợp cho bạn.', {
        icon: '👋',
        duration: 4000,
      })
    }, 500)
  }

  return {
    cartItems,
    favoriteIds,
    recentlyViewedIds,
    isCartOpen,
    cartTotal,
    cartCount,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleFavorite,
    markProductViewed,
    clearCart,
    toggleCart,
    consultCheckout,
  }
}

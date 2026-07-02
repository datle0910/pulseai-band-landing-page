import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import AiInsightSection from './components/AiInsightSection'
import SpecsSection from './components/SpecsSection'
import StorySection from './components/StorySection'
import TrustSection from './components/TrustSection'
import NewsletterForm from './components/NewsletterForm'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'
import MiniStoreSection from './components/MiniStoreSection'
import CartDrawer from './components/CartDrawer'
import { useMiniCart } from './hooks/useMiniCart'

function App() {
  const {
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
    toggleCart,
    consultCheckout,
  } = useMiniCart()

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AiInsightSection />
      <SpecsSection />
      <MiniStoreSection
        favoriteIds={favoriteIds}
        recentlyViewedIds={recentlyViewedIds}
        onToggleFavorite={toggleFavorite}
        onAddToCart={addToCart}
        onViewProduct={markProductViewed}
      />
      <StorySection />
      <TrustSection />
      <NewsletterForm />
      <Footer />
      <ChatbotWidget />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onToggle={toggleCart}
        cartItems={cartItems}
        cartTotal={cartTotal}
        cartCount={cartCount}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onConsult={consultCheckout}
      />
      <Toaster />
    </main>
  )
}

export default App

import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import AiInsightSection from './components/AiInsightSection'
import SpecsSection from './components/SpecsSection'
import StorySection from './components/StorySection'
import NewsletterForm from './components/NewsletterForm'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AiInsightSection />
      <SpecsSection />
      <StorySection />
      <NewsletterForm />
      <Footer />
      <ChatbotWidget />
      <Toaster />
    </main>
  )
}

export default App

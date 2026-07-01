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
    <>
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
    </>
  )
}

export default App

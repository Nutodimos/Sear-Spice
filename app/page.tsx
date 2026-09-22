import { CurrencyProvider } from '@/components/CurrencyContext'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import MenuSection from '@/components/MenuSection'
import HowItWorks from '@/components/HowItWorks'
import FreeDeliveryBanner from '@/components/FreeDeliveryBanner'
import Footer from '@/components/Footer'
import OrderModal from '@/components/OrderModal'

export default function Home() {
  return (
    <CurrencyProvider>
      <main className="min-h-screen bg-smoke text-ash selection:bg-flame selection:text-white">
        <Navbar />
        <Hero />
        <TrustBar />
        <MenuSection />
        <HowItWorks />
        <FreeDeliveryBanner />
        <Footer />
        <OrderModal />
      </main>
    </CurrencyProvider>
  )
}

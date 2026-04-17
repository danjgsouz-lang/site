import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import TargetAudience from '@/components/TargetAudience'
import Services from '@/components/Services'
import Differentials from '@/components/Differentials'
import Process from '@/components/Process'
import Authority from '@/components/Authority'
import FinalCTA from '@/components/FinalCTA'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problems />
      <TargetAudience />
      <Services />
      <Differentials />
      <Process />
      <Authority />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

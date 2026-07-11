import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import ProcessSection from './components/ProcessSection'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <ProcessSection />
        <Services />
        <Reviews />
        <Contact />
        <FeedbackForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Apply from '../components/Apply'
import Sponsors from '../components/Sponsors'
import About from '../components/About'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import { Testimonials } from '../components/Testimonials'

const Landing = () => {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <Hero />
      <Apply />
      <Sponsors />
      <Gallery />
      <Testimonials />
      <About />
      <FAQs />
      <Footer />
    </div>
  )
}

export default Landing

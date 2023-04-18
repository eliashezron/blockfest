import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Apply from "../components/Apply"
import Sponsors from "../components/Sponsors"
import About from "../components/About"
import FAQs from "../components/FAQs"
import Footer from "../components/Footer"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Apply />
      <Sponsors />
      <About />
      <FAQs />
      <Footer />
    </div>
  )
}

export default Landing

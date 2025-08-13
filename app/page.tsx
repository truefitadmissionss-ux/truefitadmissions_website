import Header from "../components/header"
import Hero from "../components/hero"
import Mission from "../components/mission"
import AboutUs from "../components/about-us"
import Services from "../components/services"
import TestimonialsSection from "../components/testimonials-section"
import Contact from "../components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 via-green-50 to-green-100">
      <Header />
      <Hero />
      <Mission />
      <AboutUs />
      <Services />
      <TestimonialsSection />
      <Contact />
    </div>
  )
}

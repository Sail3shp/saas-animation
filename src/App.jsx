import Header from "./sections/Header"
import Hero from "./sections/Hero"
import LogoTicker from "./sections/LogoTicker"
import Features from "./sections/Features"
import Testimonials from "./sections/Testimonials"
import CallToAction from "./sections/CallToAction"
import Footer from "./sections/Footer"
function App() {

  return (
    <div className="bg-black min-h-screen text-white ">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App

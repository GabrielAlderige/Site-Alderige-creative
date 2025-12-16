import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import StatsBanner from "@/components/stats-banner"
import Services from "@/components/services"
import Process from "@/components/process"
import Technologies from "@/components/technologies"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import FAQ from "@/components/faq"
import CTABanner from "@/components/cta-banner"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Services />
      <Process />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

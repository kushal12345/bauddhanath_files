"use client"

import { useState,useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

type Section = "home" | "services" | "gallery" | "about" | "contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeSection])

  const renderSection = () => {
    switch (activeSection) {
      case "services":
        return <Services />
      case "gallery":
        return <Gallery />
      case "about":
        return <About />
      case "contact":
        return <Contact />
      default:
        return (
          <Hero 
            onContactClick={() => setActiveSection("contact")} 
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
      />

      <main>{renderSection()}</main>

      <Footer />
    </div>
  )
}

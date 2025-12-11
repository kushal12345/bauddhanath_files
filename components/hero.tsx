"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Clock, Users, CheckCircle } from "lucide-react"

interface HeroProps {
  onContactClick?: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Main Hero Section with Parallax Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/gs.png)",
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">Trusted Security Solutions</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Your Security,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Is Our Responsibility</span>
              <span className="absolute inset-0 bg-accent/15 blur-lg" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-2xl mx-auto text-balance leading-relaxed">
            Professional, certified security guard services providing comprehensive protection for your home, business,
            and events. Available 24/7 with rapid response times.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 bg-transparent">
              Scroll Down to View Services
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <p className="text-sm text-foreground/70">Guards Deployed</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <p className="text-sm text-foreground/70">Operations</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold text-accent mb-1">13+</div>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: 1 - scrollY / 300,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-foreground/60">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-1 h-2 bg-accent/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

            {/* About Section - Parallax Text and Image */}
      <div className="relative py-20 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
           <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 800) * -0.1}px)`,
              }}
            >
              <img
                src="/chest.png"
                alt="Professional security team"
                className=" h-full "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Right - Image with Parallax */}
             <div
              style={{
                transform: `translateY(${Math.max(0, scrollY - 800) * 0.2}px)`,
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bauddhanath Security <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 text-justify leading-relaxed">
                Bauddhanath Security Services is a trusted and professional security solutions provider dedicated to protecting people, property, and businesses across Nepal. With a focus on reliability, discipline, and customer satisfaction, we deliver high-quality security services designed to meet the needs of modern organizations.
                <br/>Our team is composed of highly trained security guards, former military personnel, and experienced supervisors who follow strict protocols to ensure safety at all times. We prioritize punctuality, professionalism, and proactive monitoring to prevent incidents before they occur.
                Whether it’s safeguarding schools, colleges, banks, offices, residences, industries, construction sites, or events, our mission is to offer peace of mind through dependable security support.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* About Section - Parallax Text and Image */}
      <div className="relative py-20 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Protecting What <span className="text-accent">Matters Most</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                For over 13 years, we've been the trusted security partner for businesses and homeowners across the
                region. Our team of highly trained, certified security professionals is dedicated to keeping your
                property, assets, and people safe.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully licensed and insured security personnel",
                  "Trusted by over 1000 clients",
                  "Rapid response emergency protocols",
                  "Customized security solutions for every need",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image with Parallax */}
            <div
              className="relative h-96 rounded-lg overflow-hidden"
             
            >
              <img
                src="/1.jpg"
                alt="Professional security team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

           <div className="relative py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div
              className="relative h-96 rounded-lg overflow-hidden"
             
            >
              <img
                src="/group.png"
                alt="Professional security team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Right - Image with Parallax */}
            <div
              className="relative h-96 rounded-lg overflow-hidden"
             
            >
              <img
                src="/asd.png"
                alt="Professional security team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section - Staggered Parallax */}
      <div className="relative py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Why Choose Us?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine experience, technology, and dedication to provide unmatched security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Professional Team",
                description: "Vetted and certified security guards with extensive training and background checks",
                delay: 0,
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock security services with rapid response times and emergency protocols",
                delay: 1,
              },
              {
                icon: Users,
                title: "Customized Solutions",
                description: "Tailored security plans designed specifically for your unique needs and budget",
                delay: 2,
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
                  style={{
                    transform: `translateY(${Math.max(0, scrollY - 2000 + i * 100) * 0.1}px)`,
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 md:py-24 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Secure Your Future?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free security assessment and custom quote
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            onClick={onContactClick}
          >
            Schedule a Consultation
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

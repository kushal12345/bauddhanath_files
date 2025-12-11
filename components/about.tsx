"use client"
import { Check } from "lucide-react"

export default function About() {
  const highlights = [
    "Over 13 years of industry experience",
    "500+ trained security professionals",
    "24/7 customer support and monitoring",
    "Licensed and fully insured operations",
    "Trusted by 1000+ clients",
    "Client satisfaction rate above 98%",
  ]

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-accent">Bauddhanath Security Services</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Bauddhanath Security Services has been a trusted Service Provider in professional security services for over 13 years. We pride
              ourselves on delivering comprehensive protection solutions backed by highly trained personnel and
              Strong Teams.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our mission is to provide exceptional security services that give our clients peace of mind. Whether
              you're protecting a corporate facility, residential property, or hosting a special event, our dedicated
              team is committed to your safety.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img src="/gs.png" alt="SecureGuard Team" className="w-full rounded-lg shadow-xl" />
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
              Est. 2011 A.D
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {[
            { number: "500+", label: "Security Professionals" },
            { number: "1000+", label: "Clients Served" },
            { number: "24/7", label: "Always Available" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

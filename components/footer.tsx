"use client"

import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/chest.png" alt="Bauddhanath Security Services" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold text-foreground">Bauddhanath Security</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Professional security services protecting what matters most to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Corporate Security",
                "Residential Protection",
                "Event Security",
                "Cleaner Services",
                "VIP Security",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://www.facebook.com/Bauddhanath2019"
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/70">
            <p>&copy; {currentYear} Bauddhanath Security Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

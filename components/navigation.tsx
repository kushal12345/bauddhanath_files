"use client"

import { Shield } from "lucide-react"

type Section = "home" | "services" | "gallery" | "about" | "contact"

interface NavigationProps {
  activeSection: Section
  onNavigate: (section: Section) => void
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems: Array<{ id: Section; label: string }> = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]
  
  

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
            <img src="/chest.png" alt="Bauddhanath Security Services" className="h-12 md:h-14 object-contain" />
            <span className="text-xl md:text-2xl font-bold text-foreground">Bauddhanath Security Services</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => onNavigate(e.target.value as Section)}
              className="bg-muted text-foreground px-3 py-2 rounded border border-border text-sm"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Building2, Users, AlertCircle, Eye, Lock } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Corporate Security",
      description: "Professional security personnel for offices, corporate events, and facilities management.",
      icon: Building2,
    },
    {
      id: 2,
      title: "Residential Protection",
      description: "Comprehensive security services for homes, apartments, and residential communities.",
      icon: Lock,
    },
    {
      id: 3,
      title: "Event Security",
      description: "Expert crowd management and protection for private events, conferences, and gatherings.",
      icon: Users,
    },
    {
      id: 4,
      title: "Surveillance Monitoring",
      description: "24/7 CCTV monitoring and rapid response to security incidents and alerts.",
      icon: Eye,
    },
    {
      id: 5,
      title: "Emergency Response",
      description: "Swift and professional response to security threats and emergency situations.",
      icon: AlertCircle,
    },
    {
      id: 6,
      title: "Risk Assessment",
      description: "Detailed security evaluations and customized protection strategies for your needs.",
      icon: Shield,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Comprehensive security solutions tailored to meet your specific protection needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

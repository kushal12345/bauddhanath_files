"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your inquiry! We will contact you shortly.")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+977 9851017622, 01-4961313",
      description: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "bauddhanath.services2019@gmail.com",
      description: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Machhapokhari-16, Kathmandu, Nepal",
      description: "Office Location",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "10:00 AM - 5:00 PM",
      description: "Emergency support always available",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Have questions? Our team is ready to help you with any security needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Our Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d212.66741329227798!2d85.30496299337925!3d27.734922956541162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1936f1f5f205%3A0x6844513ff7b24670!2sbauddhanath%20Security%20Services!5e1!3m2!1sen!2snp!4v1765469447282!5m2!1sen!2snp" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
 
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
              <p className="text-foreground/70">Reach out to us through any of these channels</p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors">
                  <CardContent className="pt-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.detail}</p>
                      <p className="text-foreground/70 text-sm">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

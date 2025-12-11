"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryImages = [
    { id: 1, category: "team", title: "Professional Security Team", image: "/1.jpg" },
    { id: 2, category: "team", title: "Professional Security Team", image: "/gs.png" },
    { id: 3, category: "training", title: "Training", image: "/asd.png" },
    { id: 4, category: "team", title: "Professional Security Team", image: "/group.png" },
    { id: 5, category: "team", title: "Professional Security Team", image: "/2.jpg" },
    { id: 6, category: "events", title: "Corporate Events", image: "/3.jpg" },
    { id: 7, category: "Cleaner", title: "Cleaner", image: "/cleaner.jpg" },
    { id: 8, category: "Dress", title: "Guard Dress", image: "/guard.jpg" },
  ]

  const categories = ["all", "team", "events", "Cleaner", "training", "Dress"]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            See our professional security services in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground font-semibold text-balance">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

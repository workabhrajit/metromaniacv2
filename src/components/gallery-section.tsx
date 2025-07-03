"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Maximize2, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Gallery items with different types
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Quantum Realms - Epic Battle",
      category: "Screenshots",
      description: "Intense combat sequences in our flagship title",
    },
    {
      id: 2,
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      title: "Gameplay Trailer",
      category: "Videos",
      description: "Official gameplay reveal trailer",
    },
    {
      id: 3,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Character Design",
      category: "Concept Art",
      description: "Early character concept designs",
    },
    {
      id: 4,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Environment Art",
      category: "Screenshots",
      description: "Stunning world environments",
    },
    {
      id: 5,
      type: "video",
      src: "/placeholder.svg?height=600&width=800",
      title: "Behind the Scenes",
      category: "Videos",
      description: "Development process documentary",
    },
    {
      id: 6,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "UI/UX Design",
      category: "Interface",
      description: "Game interface and menu designs",
    },
    {
      id: 7,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Weapon Gallery",
      category: "Assets",
      description: "Detailed weapon and equipment showcase",
    },
    {
      id: 8,
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      title: "Cinematic Scenes",
      category: "Screenshots",
      description: "Epic story moments and cutscenes",
    },
  ]

  const categories = ["All", "Screenshots", "Videos", "Concept Art", "Interface", "Assets"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setCurrentSlide(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Floating background elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-violet-500/5 to-purple-500/5 blur-3xl animate-pulse"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-xl">
            <Star className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">GALLERY</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            <span className="text-white">Visual</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of screenshots, concept art, and behind-the-scenes content
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm",
                activeCategory === category
                  ? "bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-500/25"
                  : "bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-800/80 hover:text-violet-400 hover:border-violet-500/50",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Video Play Button */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-violet-600/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-violet-400/50 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="inline-block px-3 py-1 bg-violet-600/80 text-white text-xs font-medium rounded-full mb-2 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-6 text-lg font-medium rounded-xl bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-violet-500 transition-all duration-300"
          >
            Load More Content
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main Image */}
            <div className="relative">
              <img
                src={filteredItems[currentSlide]?.src || "/placeholder.svg"}
                alt={filteredItems[currentSlide]?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />

              {/* Video Play Button in Lightbox */}
              {filteredItems[currentSlide]?.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-violet-600/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-violet-400/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
              <div className="flex items-center gap-4 mb-2">
                <span className="px-3 py-1 bg-violet-600/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                  {filteredItems[currentSlide]?.category}
                </span>
                <span className="text-slate-400 text-sm">
                  {currentSlide + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{filteredItems[currentSlide]?.title}</h3>
              <p className="text-slate-300">{filteredItems[currentSlide]?.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

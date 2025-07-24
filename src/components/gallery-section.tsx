// ggleemon/fin/fin-c897047deb8e31a57af89d2ad4ed7752ef6f4c55/app/components/gallery-section.tsx
"use client"

import { useState, useEffect,   } from "react"
import { ChevronLeft, ChevronRight, Play, Maximize2, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
      src: "/30.webp",
      title: "Quantum Realms - Epic Battle",
      category: "Screenshots",
      description: "Intense combat sequences in our flagship title",
      width: 800,
      height: 600,
    },
    {
      id: 2,
      type: "video",
      src: "/23.webp",
      title: "Gameplay Trailer",
      category: "Concept Art",
      description: "Official gameplay reveal trailer",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      type: "image",
      src: "/29.webp",
      title: "Character Design",
      category: "Concept Art",
      description: "Early character concept designs",
      width: 800,
      height: 600,
    },
    {
      id: 4,
      type: "image",
      src: "/28.webp",
      title: "Environment Art",
      category: "Screenshots",
      description: "Stunning world environments",
      width: 800,
      height: 600,
    },
    {
      id: 5,
      type: "video",
      src: "/27.webp",
      title: "Behind the Scenes",
      category: "Concept Art",
      description: "Development process documentary",
      width: 800,
      height: 600,
    },
    {
      id: 6,
      type: "image",
      src: "/26.webp",
      title: "UI/UX Design",
      category: "Interface",
      description: "Game interface and menu designs",
      width: 800,
      height: 600,
    },
    {
      id: 7,
      type: "image",
      src: "/25.webp",
      title: "Weapon Gallery",
      category: "Assets",
      description: "Detailed weapon and equipment showcase",
      width: 800,
      height: 600,
    },
    {
      id: 8,
      type: "image",
      src: "/24.webp",
      title: "Cinematic Scenes",
      category: "Screenshots",
      description: "Epic story moments and cutscenes",
      width: 800,
      height: 600,
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
    <section
      // Light mode: from-gray-50 via-gray-100 to-gray-50
      // Dark mode: from-black via-slate-900 to-black (using black for the request)
      className="relative py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 dark:from-black dark:via-slate-900 dark:to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          // Light mode: Subtle gray grid
          // Dark mode: Purple/slate grid
          className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        />

        {/* Floating background elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            // Light mode: Lighter gradient | Dark mode: Darker gradient
            className="absolute rounded-full bg-gradient-to-br from-gray-300/5 to-gray-300/5 dark:from-slate-500/5 dark:to-slate-500/5 blur-3xl animate-pulse"
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
            "text-center mb-12 md:mb-16 px-4 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div
            // Light mode: Lighter background/border | Dark mode: Darker background/border
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gray-100/50 dark:bg-slate-800/50 border border-gray-300/50 dark:border-slate-700/50 mb-6 md:mb-8 backdrop-blur-xl"
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-600 dark:text-slate-400" />
            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-slate-300 tracking-wide">GALLERY</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
            <span className="text-gray-900 dark:text-white">Visual</span>
            <br />
            <span
              // Light mode: Darker gray gradient | Dark mode: Lighter slate gradient
              className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-slate-400 dark:to-slate-400 bg-clip-text text-transparent"
            >
              Showcase
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our collection of screenshots, concept art, and behind-the-scenes content
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border backdrop-blur-sm whitespace-nowrap",
                activeCategory === category
                  // Active state: Light mode: blue | Dark mode: slate
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25 dark:bg-slate-600 dark:border-slate-500 dark:shadow-slate-500/25"
                  // Inactive state: Light mode: gray | Dark mode: slate
                  : "bg-gray-100/50 text-gray-700 border-gray-300/50 hover:bg-gray-200/80 hover:text-gray-800 hover:border-gray-500/50 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700/50 dark:hover:bg-slate-800/80 dark:hover:text-slate-400 dark:hover:border-slate-500/50",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              // Light mode: lighter background/border | Dark mode: darker background/border
              className="group relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-gray-100/30 dark:bg-slate-800/30 border border-gray-300/30 dark:border-slate-700/30 hover:border-gray-500/50 dark:hover:border-slate-500/50 transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                priority={index < 4} // Prioritize first 4 images
              />

              {/* Overlay - remains dark for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Video Play Button */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    // Light mode: Blue background | Dark mode: Slate background
                    className="w-16 h-16 bg-blue-600/90 dark:bg-slate-600/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/50 dark:border-slate-400/50 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6 text-white ml-1" /> {/* Stays white for contrast */}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span
                    // Light mode: Blue background | Dark mode: Slate background
                    className="inline-block px-2 md:px-3 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full mb-1 md:mb-2 backdrop-blur-sm"
                  >
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold mb-1 text-sm md:text-base line-clamp-1">{item.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  // Light mode: Dark gray background | Dark mode: Slate background
                  className="w-6 h-6 md:w-8 md:h-8 bg-gray-800/80 dark:bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Maximize2 className="w-3 h-3 md:w-4 md:h-4 text-white" /> {/* Stays white for contrast */}
                </div>
              </div>

              {/* Shine Effect - remains light for effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <Button
            size="lg"
            variant="outline"
            // Light mode: Blue border/text/hover | Dark mode: Slate border/text/hover
            className="group px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-xl bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-500 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-500 transition-all duration-300 w-full sm:w-auto"
          >
            Load More Content
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              // Light mode: Dark gray background/border | Dark mode: Slate background/border
              className="absolute top-2 md:top-4 right-2 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 dark:bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/50 dark:border-slate-700/50 hover:bg-gray-700 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" /> {/* Stays white for contrast */}
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              // Light mode: Dark gray background/border | Dark mode: Slate background/border
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 dark:bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/50 dark:border-slate-700/50 hover:bg-gray-700 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" /> {/* Stays white for contrast */}
            </button>

            <button
              onClick={nextSlide}
              // Light mode: Dark gray background/border | Dark mode: Slate background/border
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 dark:bg-slate-900/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-600/50 dark:border-slate-700/50 hover:bg-gray-700 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" /> {/* Stays white for contrast */}
            </button>

            {/* Main Image */}
            <div className="relative flex justify-center items-center">
              <Image
                src={filteredItems[currentSlide]?.src || "/placeholder.svg"}
                alt={filteredItems[currentSlide]?.title || "Gallery image"}
                width={filteredItems[currentSlide]?.width || 800}
                height={filteredItems[currentSlide]?.height || 600}
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-xl md:rounded-2xl"
                sizes="100vw"
                priority
              />

              {/* Video Play Button in Lightbox */}
              {filteredItems[currentSlide]?.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    // Light mode: Blue background | Dark mode: Slate background
                    className="w-16 h-16 md:w-20 md:h-20 bg-blue-600/90 dark:bg-slate-600/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/50 dark:border-slate-400/50 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" /> {/* Stays white for contrast */}
                  </div>
                </div>
              )}
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-8 rounded-b-xl md:rounded-b-2xl">
              <div className="flex items-center gap-2 md:gap-4 mb-2">
                <span
                  // Light mode: Blue background | Dark mode: Slate background
                  className="px-2 md:px-3 py-1 bg-blue-600/80 text-white text-xs md:text-sm font-medium rounded-full backdrop-blur-sm"
                >
                  {filteredItems[currentSlide]?.category}
                </span>
                <span className="text-slate-400 text-xs md:text-sm">
                  {currentSlide + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-white mb-1 md:mb-2 line-clamp-1">
                {filteredItems[currentSlide]?.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base line-clamp-2">
                {filteredItems[currentSlide]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
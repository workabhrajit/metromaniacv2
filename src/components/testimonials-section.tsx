"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Play, Gamepad2, Trophy, Users } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Pro Gamer",
      company: "Team Nexus",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This gaming studio has completely revolutionized my gaming experience. The attention to detail and immersive gameplay mechanics are absolutely phenomenal.",
      gameHours: "2,500+ hours",
      favoriteGame: "Quantum Realms",
      platform: "PC Master Race",
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      role: "Content Creator",
      company: "@GamerSarah",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As someone who creates content around gaming, I can confidently say this studio produces the most visually stunning and engaging games.",
      gameHours: "1,800+ hours",
      favoriteGame: "Ethereal Worlds",
      platform: "Multi-Platform",
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "Esports Champion",
      company: "Lightning Bolts",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The competitive balance and smooth gameplay mechanics make these games perfect for esports. Tournament-ready quality every time.",
      gameHours: "3,200+ hours",
      favoriteGame: "Arena Masters",
      platform: "Console & PC",
    },
    {
      id: 4,
      name: "Emily Zhang",
      role: "Game Reviewer",
      company: "GameSpot Pro",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "In my 10 years of reviewing games, this studio consistently delivers experiences that push the boundaries of what's possible.",
      gameHours: "5,000+ hours",
      favoriteGame: "Nexus Chronicles",
      platform: "All Platforms",
    },
    {
      id: 5,
      name: "David Park",
      role: "Casual Gamer",
      company: "Weekend Warrior",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Even as someone who only games on weekends, these games are so intuitive and engaging that I find myself completely absorbed.",
      gameHours: "800+ hours",
      favoriteGame: "Casual Quest",
      platform: "Mobile & Switch",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  // Helper function to get testimonial by index with wrapping
  const getTestimonial = (index: number) => {
    const wrappedIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length
    return testimonials[wrappedIndex]
  }

  // Floating particles for background effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    animationDelay: Math.random() * 5,
    animationDuration: 3 + Math.random() * 4,
  }))

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient based on mouse position */}
        <div
          className="absolute inset-0 opacity-15 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2), rgba(79, 70, 229, 0.1), transparent 50%)`,
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gray-400/20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationName: "float",
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 md:mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-xl">
            <Quote className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">PLAYER TESTIMONIALS</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            <span className="text-white">What Players</span>
            <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing community of gamers, streamers, and esports professionals
          </p>
        </div>

        {/* Mobile/Tablet View - Single Card with Sliding */}
        <div
          className={cn(
            "lg:hidden relative max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="relative overflow-hidden rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 min-h-[400px]">
            <div
              className="flex transition-transform duration-600 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-6 md:p-8"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center min-h-[350px]">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-gray-400/30 shadow-2xl">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-600 rounded-full flex items-center justify-center border-2 border-slate-900">
                        <Gamepad2 className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 italic">
                      &quot;{testimonial.text}&quot;
                    </blockquote>

                    <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-gray-400 font-medium mb-1">{testimonial.role}</p>
                    <p className="text-slate-400 text-sm mb-4">{testimonial.company}</p>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-400 text-gray-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-gray-500/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-gray-400 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-gray-500/50 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-gray-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Desktop View - Three Card Layout with Sliding */}
        <div
          className={cn(
            "hidden lg:block relative max-w-7xl mx-auto transition-all duration-1000 ease-out delay-300 px-20",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="relative flex items-center justify-center gap-8 min-h-[600px] overflow-hidden">
            {/* Cards Container with Sliding Animation */}
            <div className="flex items-center gap-8 py-8 transition-all duration-600 ease-out">
              {/* Left Side Card (Previous) */}
              <div
                className={cn(
                  "w-80 cursor-pointer transition-all duration-600 ease-out",
                  isTransitioning ? "transform -translate-x-4 opacity-50" : "hover:scale-105",
                )}
                onClick={prevSlide}
              >
                <div className="relative rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/20 p-6 h-[500px] opacity-60 hover:opacity-80 transition-all duration-300 transform hover:-translate-y-2">
                  {(() => {
                    const testimonial = getTestimonial(currentSlide - 1)
                    return (
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="relative mb-4 transform transition-transform duration-300 hover:scale-110">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-slate-600/50">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                            <Gamepad2 className="w-3 h-3 text-slate-400" />
                          </div>
                        </div>

                        <blockquote className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-4">
                          &quot;{testimonial.text}&quot;
                        </blockquote>

                        <h3 className="text-lg font-semibold text-slate-300 mb-1">{testimonial.name}</h3>
                        <p className="text-slate-500 text-sm mb-1">{testimonial.role}</p>
                        <p className="text-slate-600 text-xs mb-3">{testimonial.company}</p>

                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-slate-500 text-slate-500" />
                          ))}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>

              {/* Center Card (Current) */}
              <div
                className={cn(
                  "w-96 relative transition-all duration-600 ease-out",
                  isTransitioning ? "transform scale-105" : "",
                )}
              >
                <div className="relative rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/40 p-8 h-[600px] shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2">
                  {(() => {
                    const testimonial = getTestimonial(currentSlide)
                    return (
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="relative mb-6 transform transition-transform duration-300 hover:scale-110">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400/50 shadow-2xl">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-600 rounded-full flex items-center justify-center border-2 border-slate-900">
                            <Gamepad2 className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        <div className="absolute -top-4 -left-4 text-4xl text-gray-400/20">
                          <Quote className="w-12 h-12" />
                        </div>

                        <blockquote className="text-xl text-slate-200 leading-relaxed mb-6 italic relative z-10">
                          &quot;{testimonial.text}&quot;
                        </blockquote>

                        <h3 className="text-2xl font-semibold text-white mb-2">{testimonial.name}</h3>
                        <p className="text-gray-400 font-medium mb-1">{testimonial.role}</p>
                        <p className="text-slate-400 text-sm mb-4">{testimonial.company}</p>

                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-gray-400 text-gray-400" />
                          ))}
                        </div>

                        {/* Gaming Stats */}
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Play className="w-4 h-4 text-gray-400" />
                            <span className="text-slate-300">{testimonial.gameHours}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Trophy className="w-4 h-4 text-gray-400" />
                            <span className="text-slate-300">{testimonial.favoriteGame}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })()}

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-gray-500/10 to-indigo-500/10 rounded-3xl blur-xl -z-10 transition-all duration-600" />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-gray-400/5 via-gray-400/5 to-indigo-400/5 rounded-3xl blur-2xl -z-20 transition-all duration-600",
                      isTransitioning ? "opacity-100 scale-110" : "opacity-50",
                    )}
                  />
                </div>
              </div>

              {/* Right Side Card (Next) */}
              <div
                className={cn(
                  "w-80 cursor-pointer transition-all duration-600 ease-out",
                  isTransitioning ? "transform translate-x-4 opacity-50" : "hover:scale-105",
                )}
                onClick={nextSlide}
              >
                <div className="relative rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/20 p-6 h-[500px] opacity-60 hover:opacity-80 transition-all duration-300 transform hover:-translate-y-2">
                  {(() => {
                    const testimonial = getTestimonial(currentSlide + 1)
                    return (
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="relative mb-4 transform transition-transform duration-300 hover:scale-110">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-slate-600/50">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                            <Gamepad2 className="w-3 h-3 text-slate-400" />
                          </div>
                        </div>

                        <blockquote className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-4">
                          &quot;{testimonial.text}&quot;
                        </blockquote>

                        <h3 className="text-lg font-semibold text-slate-300 mb-1">{testimonial.name}</h3>
                        <p className="text-slate-500 text-sm mb-1">{testimonial.role}</p>
                        <p className="text-slate-600 text-xs mb-3">{testimonial.company}</p>

                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-slate-500 text-slate-500" />
                          ))}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </div>

            {/* Navigation Arrows for Desktop */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/70 hover:border-gray-500/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-gray-400 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/70 hover:border-gray-500/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group z-30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-gray-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div
          className={cn(
            "flex justify-center gap-3 mt-8 md:mt-12 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={cn(
                "relative w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed",
                index === currentSlide ? "bg-gray-400 scale-125" : "bg-slate-600 hover:bg-slate-500 hover:scale-110",
              )}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gray-400 rounded-full animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm",
              isAutoPlaying
                ? "bg-gray-600/20 text-gray-400 border-gray-500/30 hover:bg-gray-600/30"
                : "bg-slate-800/50 text-slate-400 border-slate-600/50 hover:bg-slate-700/50",
            )}
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div>

        {/* Stats Section */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 transition-all duration-1000 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {[
            { number: "50K+", label: "Happy Players", icon: Users },
            { number: "4.9/5", label: "Average Rating", icon: Star },
            { number: "25+", label: "Awards Won", icon: Trophy },
            { number: "10M+", label: "Hours Played", icon: Play },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-gray-500/30 transition-all duration-500 hover:bg-slate-800/40 hover:scale-105 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-600/20 flex items-center justify-center group-hover:bg-gray-600/30 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-gray-400" />
              </div>
              <div className="text-2xl md:text-3xl font-light text-white mb-2 group-hover:text-gray-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

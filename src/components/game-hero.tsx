"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Download, Star, Gamepad2, Zap, Trophy, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function GameHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const floatingElements = [
    { icon: Gamepad2, delay: 0, position: "top-20 left-10" },
    { icon: Star, delay: 0.5, position: "top-32 right-20" },
    { icon: Zap, delay: 1, position: "top-60 left-1/4" },
    { icon: Trophy, delay: 1.5, position: "top-40 right-1/3" },
    { icon: Users, delay: 2, position: "top-80 right-10" },
  ]

  // Generate background orbs with different sizes and positions
  const backgroundOrbs = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 40, // 40-160px
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
  }))

  return (
    <section className="relative min-h-[2000px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950/20 via-background to-indigo-900/30 pt-24 md:pt-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Static Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundOrbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-600/20 blur-sm"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              opacity: orb.opacity,
            }}
          />
        ))}
      </div>

      {/* Static Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-400/40 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Static Game Icons */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={cn(
            "absolute hidden lg:block transition-all duration-1000 ease-out",
            element.position,
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
          style={{
            animationDelay: `${element.delay}s`,
          }}
        >
          <div className="p-4 rounded-2xl bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110">
            <element.icon className="w-6 h-6 text-indigo-400" />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 transition-all duration-1000 ease-out backdrop-blur-sm",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-indigo-300">Now Available</span>
        </div>

        {/* Main Heading */}
        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ease-out delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Epic Games
          </span>
          <br />
          <span className="text-foreground">Await You</span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          Immerse yourself in breathtaking worlds, engage in thrilling adventures, and experience gaming like never
          before. Our studio crafts unforgettable interactive experiences that push the boundaries of what s possible.
        </p>

        {/* Stats */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 ease-out delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {[
            { label: "Games Released", value: "25+" },
            { label: "Players Worldwide", value: "2M+" },
            { label: "Awards Won", value: "15+" },
            { label: "Years Experience", value: "8+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Play className="w-5 h-5 mr-2" />
            Play Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group hover:bg-indigo-600 hover:text-white transition-all duration-300 bg-transparent border-indigo-500/50 text-indigo-300 hover:border-indigo-600"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Free
          </Button>
        </div>

        {/* Game Preview Cards */}
        <div
          className={cn(
            "grid md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 ease-out delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {[
            { title: "Cyber Legends", genre: "Action RPG", rating: "4.9" },
            { title: "Mystic Realms", genre: "Fantasy Adventure", rating: "4.8" },
            { title: "Space Odyssey", genre: "Sci-Fi Strategy", rating: "4.7" },
          ].map((game, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-indigo-950/20 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10 overflow-hidden"
            >
              {/* Glass shine effect - triggers once on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:animate-[shine_600ms_ease-out_forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%]" />
              </div>

              {/* Additional prominent shine layer */}
              <div className="absolute inset-0 opacity-0 group-hover:animate-[shine-delayed_700ms_ease-out_50ms_forwards]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 via-blue-200/15 to-transparent transform -skew-x-6 translate-x-[-100%]" />
              </div>

              <div className="w-full h-32 bg-gradient-to-br from-indigo-500/20 to-blue-500/10 rounded-lg mb-4 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-blue-500/20 transition-all duration-300 relative overflow-hidden">
                {/* Glass shine effect for game icon area */}
                <div className="absolute inset-0 opacity-0 group-hover:animate-[shine-icon_650ms_ease-out_forwards]">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/25 to-transparent transform -skew-x-12 translate-x-[-100%]" />
                </div>
                <Gamepad2 className="w-8 h-8 text-indigo-400 relative z-10" />
              </div>

              <h3 className="font-semibold mb-2 text-indigo-100 relative z-10">{game.title}</h3>
              <p className="text-sm text-indigo-300/70 mb-3 relative z-10">{game.genre}</p>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  <span className="text-sm font-medium text-indigo-200">{game.rating}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-300 hover:text-indigo-100 hover:bg-indigo-600/20"
                >
                  Play
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Custom keyframes for shine animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(50%);
          }
        }

        @keyframes shine-delayed {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          15% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(40%);
          }
        }

        @keyframes shine-icon {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          12% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(50%);
          }
        }
      `}</style>
    </section>
  )
}

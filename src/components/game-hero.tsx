"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Download, Star, ArrowRight, Monitor, Zap } from "lucide-react"
 import { cn } from "@/lib/utils"
import { Meteors } from "./magicui/meteors"

export function GameHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Minimal background elements
  const backgroundElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.1 + 0.05,
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 md:pt-24 lg:pt-32 px-4">
      {/* Subtle Background Grid */}
      <Meteors/>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-br from-slate-400/10 to-slate-600/5 blur-2xl md:blur-3xl"
            style={{
              width: `${element.size * 0.7}px`,
              height: `${element.size * 0.7}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              opacity: element.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        {/* Premium Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 md:mb-12 transition-all duration-1000 ease-out backdrop-blur-xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-400 rounded-full" />
          <span className="text-xs md:text-sm font-medium text-slate-300 tracking-wide">AVAILABLE NOW</span>
        </div>

        {/* Main Heading */}
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 transition-all duration-1000 ease-out delay-200 tracking-tight leading-tight",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="text-white font-extralight">Next-Gen</span>
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent font-normal">
            Gaming Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ease-out delay-300 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          Immerse yourself in meticulously crafted worlds where cutting-edge technology meets artistic excellence.
        </p>

        {/* Gaming Laptop Showcase */}
        <div
          className={cn(
            "flex justify-center mb-12 md:mb-20 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="group relative w-full max-w-2xl">
            <div className="relative transform hover:scale-[1.02] transition-all duration-700 ease-out">
              {/* Laptop Frame - Responsive sizing */}
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-[3/2] bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl md:rounded-2xl shadow-2xl border border-slate-700/30 p-2 md:p-4">
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-lg md:rounded-xl overflow-hidden relative">
                  {/* Gaming Image Display */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-900/50 to-slate-900">
                    {/* Main Game Image */}
                    <video
  src="/vdo.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover rounded-lg md:rounded-xl"
></video>


                    {/* Subtle overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-lg md:rounded-xl" />

                    {/* Minimal Game Info Overlay */}
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-md md:rounded-lg p-2 md:p-4 border border-violet-500/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-violet-400 text-sm md:text-lg font-medium mb-0.5 md:mb-1">
                              QUANTUM REALMS
                            </div>
                            <div className="text-slate-400 text-xs md:text-sm">Ultra Settings • RTX ON • 4K</div>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 text-violet-400 text-xs md:text-sm">
                            <Zap className="w-3 h-3 md:w-4 md:h-4" />
                            <span>144 FPS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Screen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Laptop Base - Responsive */}
              <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto h-4 md:h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl md:rounded-b-2xl shadow-lg" />

              {/* Keyboard Area - Responsive */}
              <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px] mx-auto h-2 md:h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-md md:rounded-lg mt-1 relative">
                {/* RGB Lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-indigo-500/30 rounded-md md:rounded-lg opacity-60"></div>
              </div>

              {/* Gaming Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 via-purple-500/15 to-indigo-500/15 rounded-xl md:rounded-2xl blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>

            {/* Gaming Performance Label - Hidden on mobile */}
            <div className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
              <div className="bg-slate-800/90 text-slate-300 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <Monitor className="w-3 h-3 md:w-4 md:h-4 text-violet-400" />
                  <span>Gaming Laptop • RTX 4080 • 32GB RAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Responsive grid */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 transition-all duration-1000 ease-out delay-600 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {[
            { label: "Active Players", value: "2.4M", suffix: "+" },
            { label: "Global Reach", value: "150", suffix: " Countries" },
            { label: "Awards", value: "25", suffix: "+" },
            { label: "Rating", value: "4.9", suffix: "/5" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-1 md:mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {stat.value}
                <span className="text-slate-400 text-base sm:text-lg">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Responsive layout */}
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 ease-out delay-700 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-white text-black hover:bg-slate-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-xl transition-all duration-300 w-full sm:w-auto"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
            Experience Now
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-xl bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 w-full sm:w-auto"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
            Download
          </Button>
        </div>

        {/* Featured Games - Responsive grid */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 transition-all duration-1000 ease-out delay-800 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {[
            { title: "Quantum Realms", genre: "Sci-Fi Adventure", rating: "4.9", status: "New" },
            { title: "Nexus Mobile", genre: "Strategy RPG", rating: "4.8", status: "Popular" },
            { title: "Ethereal Worlds", genre: "Open World", rating: "4.7", status: "Coming Soon" },
          ].map((game, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:bg-slate-800/50"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-violet-400 to-violet-500 rounded-md md:rounded-lg"></div>
                </div>
                <span className="text-xs px-2 md:px-3 py-1 bg-violet-400/10 text-violet-400 rounded-full border border-violet-400/20">
                  {game.status}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {game.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm">{game.genre}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-violet-400 text-violet-400" />
                  <span className="text-sm font-medium text-slate-300">{game.rating}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-400 hover:text-white hover:bg-slate-700/50 text-xs md:text-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

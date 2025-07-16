"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Download, Star, ArrowRight,  Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Meteors } from "./magicui/meteors"

export function GameHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const backgroundElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.1 + 0.05,
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-20 md:pt-24 lg:pt-32 px-4 transition-colors duration-500">
      <Meteors />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.1)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />
      </div>

      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gray-600/5 dark:bg-gray-400/5 blur-2xl md:blur-3xl"
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

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        {/* Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl mb-8 md:mb-12 transition-all duration-1000 ease-out",
            "bg-gray-200/60 border-gray-300 dark:bg-gray-800/50 dark:border-gray-700/50",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 dark:bg-gray-300 rounded-full" />
          <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
            AVAILABLE NOW
          </span>
        </div>

        {/* Heading */}         <span className={cn(" font-extralight sm:text-xl md:text-3xl lg:text-4xl  ",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}><br/>Experience the<br/></span>

        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 transition-all duration-1000 ease-out delay-200 tracking-tight leading-tight",
            "text-gray-900 dark:text-white",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >         

          <span className="font-extralight">Next-Gen</span>
          <br />
          <span className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent font-normal">
            Gaming Experience
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-4 transition-all duration-1000 ease-out delay-300",
            "text-gray-600 dark:text-gray-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Immerse yourself in meticulously crafted worlds where cutting-edge technology meets artistic excellence.
        </p>

        {/* Video Showcase */}
        <div
          className={cn(
            "flex justify-center mb-12 md:mb-20 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="group relative w-full max-w-5xl ">
            <div className="relative transform hover:scale-[1.02] transition-all duration-700 ease-out">
<div className="relative mx-auto w-full max-w-[90%] md:max-w-[1200px] aspect-[5/3] bg-gray-900 dark:bg-black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-2 md:p-4">                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                  <video
                    src="/vdo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  ></video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-xl" />
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-gray-300 text-lg font-medium">QUANTUM REALMS</div>
                          <div className="text-gray-400 text-sm">Ultra Settings • RTX ON • 4K</div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Zap className="w-4 h-4" />
                          <span>144 FPS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="w-full max-w-[600px] mx-auto h-8 bg-gray-800 rounded-b-2xl shadow-lg" />
              <div className="w-full max-w-[500px] mx-auto h-4 bg-gray-700 rounded-lg mt-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-blue-500/30 rounded-lg opacity-60" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-gray-500/10 to-blue-500/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 transition-all duration-1000 ease-out delay-600 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {[
            { label: "Active Players", value: "2.4M", suffix: "+" },
            { label: "Global Reach", value: "150", suffix: " Countries" },
            { label: "Awards", value: "25", suffix: "+" },
            { label: "Rating", value: "4.9", suffix: "/5" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-2 group-hover:text-gray-400 transition-colors duration-300">
                {stat.value}
                <span className="text-gray-500 text-lg">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-1000 ease-out delay-700 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button
            size="lg"
            className="group bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 w-full sm:w-auto"
          >
            <Play className="w-5 h-5 mr-3" />
            Experience Now
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-6 text-lg font-medium rounded-xl bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 w-full sm:w-auto"
          >
            <Download className="w-5 h-5 mr-3" />
            Download
          </Button>
        </div>

        {/* Featured Games */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 transition-all duration-1000 ease-out delay-800 px-4",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {[
            { title: "Quantum Realms", genre: "Sci-Fi Adventure", rating: "4.9", status: "New" },
            { title: "Nexus Mobile", genre: "Strategy RPG", rating: "4.8", status: "Popular" },
            { title: "Ethereal Worlds", genre: "Open World", rating: "4.7", status: "Coming Soon" },
          ].map((game, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-500 transition-all duration-500 hover:bg-gray-100/60 dark:hover:bg-gray-800/50"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 dark:bg-gray-500 rounded-lg" />
                </div>
                <span className="text-xs px-3 py-1 bg-gray-300/20 text-gray-600 dark:text-gray-400 rounded-full border border-gray-400/20">
                  {game.status}
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-gray-400 transition-colors duration-300">
                {game.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">{game.genre}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-gray-400 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{game.rating}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-gray-950 to-transparent dark:from-gray-950" />
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
 import {  Monitor, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Meteors } from "./magicui/meteors"
import { RetroGrid } from "./magicui/retro-grid"
 
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-24 md:pt-32">
      <Meteors number={30} />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-br from-slate-400/10 to-slate-600/5 blur-3xl"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              opacity: element.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={cn(
            "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 mb-12 transition-all duration-1000 ease-out backdrop-blur-xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="w-2 h-2 bg-violet-400 rounded-full" />
          <span className="text-sm font-medium text-slate-300 tracking-wide">AVAILABLE NOW</span>
        </div>

        <h1
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-light mb-8 transition-all duration-1000 ease-out delay-200 tracking-tight",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="text-white font-extralight">Next-Gen</span>
          <br />
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent font-normal">
            Gaming Experience
          </span>
        </h1>

        <p
          className={cn(
            "text-xl md:text-2xl text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          Immerse yourself in meticulously crafted worlds where cutting-edge technology meets artistic excellence.
        </p>
         <div
          className={cn(
            "flex justify-center mb-20 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >    
        
          <div className="group relative">
            <div className="relative transform hover:scale-[1.02] transition-all duration-700 ease-out">
              <div className="w-[60vw] h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700/30">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                  {/* ✅ ✅ ✅ Your video instead of image */}
                  <video
                    src="/vdo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-xl" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-violet-500/30">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-violet-400 text-lg font-medium mb-1">QUANTUM REALMS</div>
                          <div className="text-slate-400 text-sm">Ultra Settings • RTX ON • 4K</div>
                        </div>
                        <div className="flex items-center gap-2 text-violet-400 text-sm">
                          <Zap className="w-4 h-4" />
                          <span>144 FPS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[600px] h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl shadow-lg mx-auto" />

              <div className="w-[500px] h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg mx-auto mt-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-indigo-500/30 rounded-lg opacity-60"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 via-purple-500/15 to-indigo-500/15 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>

            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-slate-800/90 text-slate-300 px-6 py-3 rounded-xl text-sm backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-violet-400" />
                  <span>Gaming Laptop • RTX 4080 • 32GB RAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Remaining content stays the same */}
        {/* ... Stats ... CTA Buttons ... Featured Games ... Bottom Fade ... */}

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    <RetroGrid/>
    </section>
  )
}

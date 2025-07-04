"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Users, Award, Trophy, Star, Zap, Heart } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ScatteredTeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Game Designer",
      image: "/placeholder.svg?height=300&width=300",
      position: { top: "15%", left: "15%" },
      size: "large",
      rotation: -8,
      delay: 0,
      color: "violet",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg?height=250&width=250",
      position: { top: "25%", right: "15%" },
      size: "medium",
      rotation: 12,
      delay: 200,
      color: "purple",
    },
    {
      id: 3,
      name: "Elena Volkov",
      role: "Art Director",
      image: "/placeholder.svg?height=280&width=280",
      position: { top: "55%", left: "20%" },
      size: "medium",
      rotation: -15,
      delay: 400,
      color: "indigo",
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Studio Founder",
      image: "/placeholder.svg?height=350&width=350",
      position: { top: "20%", left: "45%" },
      size: "xlarge",
      rotation: 5,
      delay: 100,
      color: "violet",
      featured: true,
    },
    {
      id: 5,
      name: "Maya Patel",
      role: "Community Manager",
      image: "/placeholder.svg?height=240&width=240",
      position: { bottom: "25%", right: "20%" },
      size: "small",
      rotation: 18,
      delay: 600,
      color: "purple",
    },
    {
      id: 6,
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder.svg?height=260&width=260",
      position: { bottom: "15%", left: "15%" },
      size: "medium",
      rotation: -10,
      delay: 800,
      color: "indigo",
    },
    {
      id: 7,
      name: "Lisa Wang",
      role: "UX Designer",
      image: "/placeholder.svg?height=220&width=220",
      position: { top: "70%", right: "15%" },
      size: "small",
      rotation: 25,
      delay: 1000,
      color: "violet",
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "w-24 h-28 md:w-28 md:h-32 lg:w-32 lg:h-36"
      case "medium":
        return "w-28 h-32 md:w-36 md:h-40 lg:w-40 lg:h-44"
      case "large":
        return "w-32 h-36 md:w-40 md:h-44 lg:w-48 lg:h-52"
      case "xlarge":
        return "w-36 h-40 md:w-48 md:h-52 lg:w-56 lg:h-60"
      default:
        return "w-28 h-32 md:w-36 md:h-40 lg:w-40 lg:h-44"
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "violet":
        return "border-violet-400/30 shadow-violet-400/20"
      case "purple":
        return "border-purple-400/30 shadow-purple-400/20"
      case "indigo":
        return "border-indigo-400/30 shadow-indigo-400/20"
      default:
        return "border-violet-400/30 shadow-violet-400/20"
    }
  }

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    animationDelay: Math.random() * 3,
    animationDuration: 2 + Math.random() * 4,
  }))

  // Connection lines data
  const connections = [
    { from: 0, to: 3 }, // Sarah to Alex
    { from: 1, to: 3 }, // Marcus to Alex
    { from: 2, to: 3 }, // Elena to Alex
    { from: 3, to: 4 }, // Alex to Maya
    { from: 3, to: 5 }, // Alex to David
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient based on mouse position */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), rgba(79, 70, 229, 0.1), transparent 60%)`,
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-violet-400/20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationName: "pulse",
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
              animationIterationCount: "infinite",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 container mx-auto px-4 mb-16">
        <div
          className={cn(
            "text-center transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-xl">
            <Users className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">OUR CREATIVE MINDS</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            <span className="text-white">Meet Our</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate creators, innovative thinkers, and gaming enthusiasts working together to craft extraordinary
            experiences
          </p>
        </div>
      </div>

      {/* Scattered Team Members */}
      <div className="relative z-20 h-[700px] md:h-[800px] lg:h-[900px]">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          {connections.map((connection, index) => {
            const fromMember = teamMembers[connection.from]
            const toMember = teamMembers[connection.to]

            // Calculate positions for lines (simplified for demo)
            const fromX = fromMember.position.left
              ? Number.parseFloat(fromMember.position.left)
              : 100 - Number.parseFloat(fromMember.position.right || "0")
            const fromY = fromMember.position.top
              ? Number.parseFloat(fromMember.position.top)
              : 100 - Number.parseFloat(fromMember.position.bottom || "0")
            const toX = toMember.position.left
              ? Number.parseFloat(toMember.position.left)
              : 100 - Number.parseFloat(toMember.position.right || "0")
            const toY = toMember.position.top
              ? Number.parseFloat(toMember.position.top)
              : 100 - Number.parseFloat(toMember.position.bottom || "0")

            return (
              <line
                key={index}
                x1={`${fromX}%`}
                y1={`${fromY}%`}
                x2={`${toX}%`}
                y2={`${toY}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                style={{
                  animationName: "pulse",
                  animationDuration: "3s",
                  animationDelay: `${index * 0.5}s`,
                  animationIterationCount: "infinite",
                }}
              />
            )
          })}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="50%" stopColor="rgba(79, 70, 229, 0.3)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
            </linearGradient>
          </defs>
        </svg>

        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={cn(
              "absolute transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
            )}
            style={{
              ...member.position,
              transitionDelay: `${member.delay}ms`,
            }}
          >
            {/* Floating Animation Container */}
            <div
              className="relative"
              style={{
                animationName: "float",
                animationDuration: `${3 + index * 0.2}s`,
                animationDelay: `${member.delay}ms`,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
              }}
            >
              {/* Member Card Container */}
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  transform: `rotate(${member.rotation}deg)`,
                  transformOrigin: "center center",
                }}
              >
                {/* Member Image */}
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-700 ease-out",
                    getSizeClasses(member.size),
                    getColorClasses(member.color),
                  )}
                  style={{
                    transform:
                      hoveredMember === member.id
                        ? `translateX(${(mousePosition.x - 50) * 0.01}px) translateY(${(mousePosition.y - 50) * 0.01}px) scale(1.1) rotate(0deg)`
                        : `translateX(${(mousePosition.x - 50) * 0.005}px) translateY(${(mousePosition.y - 50) * 0.005}px) scale(1) rotate(0deg)`,
                    transformOrigin: "center center",
                    zIndex: hoveredMember === member.id ? 100 : 10,
                  }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={350}
                    height={350}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700 ease-out",
                      hoveredMember === member.id ? "scale-105" : "scale-100",
                    )}
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                  />

                  {/* Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500",
                      hoveredMember === member.id ? "opacity-100" : "opacity-0",
                    )}
                  />

                  {/* Featured Badge */}
                  {member.featured && (
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center"
                      style={{
                        animationName: "pulse",
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                      }}
                    >
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}

                  {/* Name overlay on hover */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 p-3 transition-all duration-500",
                      hoveredMember === member.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    )}
                  >
                    <h3 className="text-white font-semibold text-sm mb-1 text-center">{member.name}</h3>
                    <p className="text-slate-300 text-xs text-center">{member.role}</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-opacity duration-700 blur-xl -z-10",
                    member.color === "violet" && "bg-violet-400/30",
                    member.color === "purple" && "bg-purple-400/30",
                    member.color === "indigo" && "bg-indigo-400/30",
                    hoveredMember === member.id ? "opacity-100" : "opacity-0",
                  )}
                />

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "absolute w-2 h-2 bg-violet-400/40 rounded-full transition-opacity duration-500",
                        hoveredMember === member.id ? "opacity-100" : "opacity-0",
                      )}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        ...(hoveredMember === member.id && {
                          animationName: "ping",
                          animationDuration: "2s",
                          animationDelay: `${i * 0.5}s`,
                          animationIterationCount: "infinite",
                        }),
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Detailed Info Card - Positioned outside the transform */}
              {hoveredMember === member.id && (
                <div
                  className="fixed pointer-events-none z-[9999]"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 shadow-2xl min-w-[280px] text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-violet-400/30">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-white font-semibold text-xl mb-2">{member.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{member.role}</p>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {["Creative", "Leadership", "Innovation"].map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors duration-300 cursor-pointer">
                        <Heart className="w-4 h-4 text-slate-400 hover:text-white" />
                      </div>
                      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors duration-300 cursor-pointer">
                        <Zap className="w-4 h-4 text-slate-400 hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="relative z-10 container mx-auto px-4 mt-16">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
          style={{ transitionDelay: "1000ms" }}
        >
          {[
            { icon: Users, number: "50+", label: "Creative Minds", color: "violet" },
            { icon: Trophy, number: "25+", label: "Awards Won", color: "purple" },
            { icon: Award, number: "8+", label: "Years Experience", color: "indigo" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:bg-slate-800/50 text-center"
            >
              <div
                className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                  stat.color === "violet" && "bg-violet-600/20 text-violet-400 group-hover:bg-violet-600/30",
                  stat.color === "purple" && "bg-purple-600/20 text-purple-400 group-hover:bg-purple-600/30",
                  stat.color === "indigo" && "bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30",
                )}
              >
                <stat.icon className="w-8 h-8" />
              </div>

              <div className="text-4xl font-light text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-slate-400 uppercase tracking-wider text-sm">{stat.label}</div>

              {/* Hover glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10",
                  stat.color === "violet" && "bg-violet-400/10",
                  stat.color === "purple" && "bg-purple-400/10",
                  stat.color === "indigo" && "bg-indigo-400/10",
                )}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 container mx-auto px-4 mt-16 text-center">
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
          style={{ transitionDelay: "1200ms" }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25">
            Join Our Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

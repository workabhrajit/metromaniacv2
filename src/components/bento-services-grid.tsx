"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Gamepad2, Building, Package, User, Mountain, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "Game Development",
    description:
      "Epic gaming experiences with next-gen technology and immersive gameplay mechanics that captivate players worldwide",
    icon: Gamepad2,
    color: "from-purple-600 via-pink-600 to-purple-800",
    size: "col-span-4 md:col-span-3 row-span-1 md:row-span-2",
    image: "/22.webp",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Architecture Visualization",
    description: "Stunning 3D architectural renders and virtual walkthroughs for modern buildings",
    icon: Building,
    color: "from-cyan-500 via-blue-600 to-indigo-700",
    size: "col-span-4 md:col-span-2 row-span-1 md:row-span-1",
    image: "/23.webp",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Character Designs",
    description: "Legendary characters with unique personalities and epic backstories for games and media",
    icon: User,
    color: "from-orange-500 via-red-600 to-pink-700",
    size: "col-span-4 md:col-span-2 row-span-1 md:row-span-2",
    image: "/24.webp",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Product Visualization",
    description: "Photorealistic renders that bring products to life with stunning detail",
    icon: Package,
    color: "from-emerald-500 via-teal-600 to-green-700",
    size: "col-span-4 md:col-span-2 row-span-1 md:row-span-1",
    image: "/25.webp",
    delay: 0.4,
  },
  {
    id: 5,
    title: "",
    description: "",
    icon: Package,
    color: "from-emerald-500 via-teal-600 to-green-700",
    size: "hidden md:block md:col-span-1 md:row-span-1",
    image: "/26.webp",
    delay: 0.4,
  },
  {
    id: 6,
    title: "Environment Designs",
    description: "Breathtaking worlds and immersive environments that tell compelling stories",
    icon: Mountain,
    color: "from-teal-500 via-cyan-600 to-blue-700",
    size: "col-span-4 md:col-span-2 row-span-1 md:row-span-1",
    image: "/27.webp",
    delay: 0.5,
  },
  {
    id: 7,
    title: "Web Development",
    description: "Cutting-edge web solutions with gaming-grade performance and modern design principles",
    icon: Globe,
    color: "from-yellow-500 via-orange-600 to-red-700",
    size: "col-span-4 md:col-span-3 row-span-1 md:row-span-1",
    image: "/28.webp",
    delay: 0.6,
  },
]

const getHoverAnimation = () => {
  return {
    scale: 1.02,
    y: -5,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  }
}

export default function BentoServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8 transition-all duration-1000 ease-out delay-200 tracking-tight leading-tight",
                "text-gray-900 dark:text-white",
              )}
            >
              <span className="font-extralight">Our </span>
              <span className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent font-normal">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Level up your projects with our development services
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[180px] lg:auto-rows-[200px]">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: service.delay,
                    duration: 0.5,
                  }}
                  whileHover={getHoverAnimation()}
                  onHoverStart={() => setHoveredCard(service.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`${service.size} relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer group`}
                >
                  {/* Background media */}
                  <div className="absolute inset-0 z-0">
                    {service.image?.endsWith(".mp4") ? (
                      <video
                        src={service.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20" />
                  </div>

                  {/* Content block */}
                  <div className="relative z-10 p-4 md:p-6 lg:p-8 h-full flex md:flex-col">
                    <div className="flex md:flex-row flex-col items-start gap-3 md:gap-4 mb-0 md:mb-4 flex-1 md:flex-none">
                      <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-2 md:mb-0">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed font-medium md:hidden">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex flex-1 items-end">
                      <p className="text-white/90 text-base leading-relaxed font-medium">{service.description}</p>
                    </div>
                  </div>

                  {/* Hover & border effects */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-2xl md:rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={hoveredCard === service.id ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

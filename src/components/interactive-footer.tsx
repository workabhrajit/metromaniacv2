// ggleemon/fin/fin-c897047deb8e31a57af89d2ad4ed7752ef6f4c55/app/components/interactive-footer.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input" // Assuming this path is correct based on your previous code
 
export function InteractiveFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const footer = footerRef.current
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove)
      return () => footer.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Interactive particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 2 + 1,
  }))

  return (
    <footer
      ref={footerRef}
      // Light mode: from-gray-50 to-gray-100 | Dark mode: from-black to-gray-950 (or slate-950 for deeper black)
      // Using 'black' directly if you want a true black, otherwise slate-950 is a very dark gray.
      // For this example, I'm using 'black' and 'gray-950' as per your request for black background.
      className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-950 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient based on mouse position */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-700 ease-out"
          style={{
            // Colors for the radial gradient - these are vibrant and can work in both themes
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), rgba(79, 70, 229, 0.1), transparent 50%)`,
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={cn(
              // Light mode: gray-200/20 | Dark mode: gray-900/20 (subtle dark particle)
              "absolute rounded-full bg-gray-200/20 dark:bg-gray-900/20 transition-all duration-1000 ease-out",
              isHovered ? "scale-150 opacity-60" : "scale-100 opacity-30",
            )}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: isHovered
                ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
                : "translate(0, 0)",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            // Light mode: Lighter grid lines | Dark mode: Darker grid lines
            className="absolute inset-0 bg-[linear-gradient(rgba(200,200,200,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(180,180,180,0.3)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(3,2,6,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"
          />
        </div>

        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                {/* These wave colors are accent colors, typically okay across themes or dynamically set */}
                <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                <stop offset="50%" stopColor="rgb(79, 70, 229)" />
                <stop offset="100%" stopColor="rgb(139, 92, 246)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div>
              <div>
  {/* Light Mode Logo */}
  <img
    src="/logo3.png"
    alt="GameStudio Logo Light"
    className="block dark:hidden h-16 w-auto"
  />

  {/* Dark Mode Logo */}
  <img
    src="/logo2.png"
    alt="GameStudio Logo Dark"
    className="hidden dark:block h-16 w-auto"
  />
</div>
              <p className="text-gray-700 dark:text-slate-400 leading-relaxed">
                Creating immersive gaming experiences that push the boundaries of interactive entertainment.
              </p>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative p-3 rounded-lg bg-gray-100/50 dark:bg-slate-800/50 border border-gray-300/50 dark:border-slate-700/50 hover:border-violet-700/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:bg-gray-200/80 dark:hover:bg-slate-800/80"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-violet-600 dark:text-slate-400 dark:group-hover:text-violet-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100/10 to-gray-200/10 dark:from-gray-900/10 dark:to-gray-950/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <nav className="space-y-3">
              {["About Us", "Our Games", "Careers", "Press Kit", "Developer Blog", "Community"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center text-gray-700 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 dark:text-slate-300 font-medium">Email</p>
                  <a
                    href="mailto:support@gamestudio.com"
                    className="text-gray-700 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors duration-300"
                  >
                    support@gamestudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 dark:text-slate-300 font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-700 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 dark:text-slate-300 font-medium">Address</p>
                  <p className="text-gray-700 dark:text-slate-400">
                    123 Gaming Street
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h4>
            <p className="text-gray-700 dark:text-slate-400">Get the latest news about our games and exclusive content.</p>

            <div className="space-y-4">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-100/50 border-gray-300/50 text-gray-900 placeholder:text-gray-400 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-white dark:placeholder:text-slate-500 focus:border-violet-700/50 dark:focus:border-violet-500/50 focus:ring-violet-700/20 dark:focus:ring-violet-500/20 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/5 to-gray-200/5 dark:from-gray-900/5 dark:to-gray-950/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 transition-all duration-300 group">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="pt-4 border-t border-gray-300/50 dark:border-slate-700/50">
              <p className="text-xs text-gray-600 dark:text-slate-500">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300/50 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-slate-400">
              <span>© 2026 Metromaniac Studios. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by <a href="https://globemotions.com" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">Globemotions</a></span>
            </div>

            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <a key={index} href="#" className="text-gray-700 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
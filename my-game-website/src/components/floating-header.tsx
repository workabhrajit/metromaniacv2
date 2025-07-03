"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, User, Settings, Mail } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#" },
    { icon: Settings, label: "Services", href: "#" },
    { icon: Mail, label: "Contact", href: "#" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
          isScrolled ? "top-4 w-auto max-w-fit" : "top-0 w-full max-w-7xl",
        )}
      >
        <div
          className={cn(
            "backdrop-blur-md bg-background/80 border shadow-lg transition-all duration-500 ease-in-out",
            isScrolled ? "rounded-full px-4 py-2 mx-4" : "rounded-none md:rounded-2xl px-6 py-4 mx-4 md:mx-6 mt-4",
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={cn("font-bold transition-all duration-500 ease-in-out", isScrolled ? "text-lg" : "text-xl")}
            >
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={cn(
                "hidden md:flex items-center transition-all duration-500 ease-in-out",
                isScrolled ? "space-x-1" : "space-x-6",
              )}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center transition-all duration-300 hover:text-primary",
                    isScrolled ? "p-2 rounded-full hover:bg-accent" : "px-3 py-2 rounded-lg hover:bg-accent",
                  )}
                >
                  <item.icon className={cn("transition-all duration-500", isScrolled ? "h-4 w-4" : "h-4 w-4 mr-2")} />
                  {!isScrolled && <span className="text-sm font-medium">{item.label}</span>}
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size={isScrolled ? "sm" : "default"}
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className={cn("transition-all duration-500", isScrolled ? "h-4 w-4" : "h-5 w-5")} />
                ) : (
                  <Menu className={cn("transition-all duration-500", isScrolled ? "h-4 w-4" : "h-5 w-5")} />
                )}
              </Button>

              {/* CTA Button - hidden when scrolled on mobile */}
              <Button
                size={isScrolled ? "sm" : "default"}
                className={cn("hidden transition-all duration-500", isScrolled ? "md:inline-flex" : "sm:inline-flex")}
              >
                {isScrolled ? "Join" : "Get Started"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-4 right-4 bg-background border rounded-2xl shadow-lg p-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <div className="pt-4 border-t">
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

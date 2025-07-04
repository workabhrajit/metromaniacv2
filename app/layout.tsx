import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { InteractiveFooter } from "@/components/interactive-footer"
import { FloatingHeader } from "@/components/floating-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Community Starter",
  description: "A modern Next.js starter with theme support",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         <FloatingHeader />
          {children}
        </ThemeProvider>
        <InteractiveFooter/>
      </body>
    </html>
  )
}

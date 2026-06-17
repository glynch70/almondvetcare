"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#team", label: "Our Team" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/almond-circle-logo.png"
                alt="Almond Vet Care"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-[#1e3a8a] leading-tight">Almond Vet Care</span>
              <span className="text-[10px] sm:text-xs text-gray-500">Perth, Scotland</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0891b2] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0891b2] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href="#emergency">Emergency</a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-[#0891b2] to-[#10b981] hover:from-[#0e7490] hover:to-[#059669] text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href="#contact">Register</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 bg-transparent"
              >
                <a href="https://my.provet.com/almond-vet-care-limited" target="_blank" rel="noopener noreferrer">
                  Online Booking
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#0891b2] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-[#0891b2] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-4 px-2">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full h-12 text-base">
                  <a href="#emergency" onClick={() => setIsMobileMenuOpen(false)}>
                    Emergency
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#0891b2] to-[#10b981] hover:from-[#0e7490] hover:to-[#059669] text-white w-full h-12 text-base"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="col-span-2 border-2 border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white font-semibold w-full h-12 text-base bg-transparent"
                >
                  <a
                    href="https://my.provet.com/almond-vet-care-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Online Booking
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

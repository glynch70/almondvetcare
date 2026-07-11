"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Phone } from "lucide-react"

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
    { href: "#care-plan", label: "Care Plan" },
    { href: "#contact", label: "Contact" },
  ]

  const desktopSubmenuLinks = [
    { href: "#pricing", label: "Pricing" },
    { href: "https://go.vidivet.com/almond-vetcare", label: "VidiVet", external: true },
  ]

  const mobileNavLinks = [
    { href: "#about", label: "About" },
    { href: "#team", label: "Our Team" },
    { href: "#services", label: "Services" },
    { href: "#care-plan", label: "Care Plan" },
    { href: "https://go.vidivet.com/almond-vetcare", label: "VidiVet", external: true },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled ? "bg-white shadow-xl py-2" : "bg-white py-4"}`}>
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-500 ${isScrolled ? "w-12 h-12" : "w-14 h-14 sm:w-16 sm:h-16"} shadow-lg rounded-full overflow-hidden border-2 border-white`}>
              <Image
                src="/images/almond-circle-logo.png"
                alt="Almond Vet Care"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-[#1e3a5f] leading-tight transition-all duration-500 ${isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}`}>Almond Vet Care</span>
              {!isScrolled && <span className="text-[10px] sm:text-xs text-[#7ed321] font-bold uppercase tracking-widest">Perth, Scotland</span>}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-base font-bold text-[#1e3a5f]/70 hover:text-[#00b4d8] transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00b4d8] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
            <div className="relative group">
              <button
                type="button"
                className="text-base font-bold text-[#1e3a5f]/70 hover:text-[#00b4d8] transition-all relative flex items-center gap-1 py-2"
              >
                More
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-1 left-0 w-0 h-1 bg-[#00b4d8] transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
              <div className="absolute right-0 top-full pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0">
                <div className="min-w-44 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2">
                  {desktopSubmenuLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-[#1e3a5f]/70 hover:bg-[#f9fafb] hover:text-[#00b4d8] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <Button
                asChild
                className="bg-[#dc2626] hover:bg-red-700 text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-12 px-6"
              >
                <a href="#emergency">Emergency</a>
              </Button>
              <Button
                asChild
                className="bg-[#7ed321] hover:bg-[#6bc41a] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-12 px-6"
              >
                <a href="https://my.provet.com/almond-vet-care-limited" target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <Button
                asChild
                className="bg-[#00b4d8] hover:bg-[#00acc1] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-12 px-6"
              >
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex xl:hidden items-center gap-4">
            <Button
              asChild
              size="icon"
              className="bg-[#dc2626] hover:bg-red-700 text-white rounded-full shadow-lg w-14 h-14 shrink-0"
            >
              <a href="#emergency" aria-label="Emergency Call">
                <Phone size={24} />
              </a>
            </Button>
            <button
              className="w-12 h-12 flex flex-col items-center justify-center text-[#1e3a5f] bg-[#f9fafb] rounded-2xl shadow-inner border border-gray-100 z-[1001]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        <div className={`fixed inset-0 bg-[#1e3a5f] z-[9999] transition-all duration-300 xl:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full p-6 sm:p-8 pt-20 overflow-y-auto">
            <button
              className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center text-white bg-white/10 rounded-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={40} />
            </button>

            <div className="flex flex-col items-center justify-center flex-grow gap-2 min-h-fit">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-2xl font-bold text-white min-h-11 py-3 w-full text-center border-b border-white/10 last:border-0 flex items-center justify-center"
                  onClick={() => {
                    if (!link.external) setIsMobileMenuOpen(false)
                  }}
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href="#emergency"
                className="bg-[#dc2626] text-white font-black w-full py-5 rounded-3xl text-xl shadow-2xl text-center mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Emergency Care
              </a>
              <a
                href="https://my.provet.com/almond-vet-care-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7ed321] text-white font-black w-full py-5 rounded-3xl text-xl shadow-2xl text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
              <a
                href="#contact"
                className="bg-[#00b4d8] text-white font-black w-full py-5 rounded-3xl text-xl shadow-2xl text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

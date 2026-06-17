"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Perthshire's Newest Independent Vet Practice",
    subtitle: "Now Open - Register & Book Today",
    badge: "Now Open",
    description: "",
    cta: "Register Your Pet",
    ctaLink: "#contact",
    image: "/images/black-labrador.jpeg",
    features: [],
  },
  {
    id: 2,
    title: "Founded by Katie Jones & Lisa Elgie",
    subtitle: "", // Removed "Combined experience in Perth" text
    badge: "Meet Our Founders",
    description: "Independent vets putting animal welfare first",
    cta: "Learn About Our Team",
    ctaLink: "#about",
    image: "/images/cocker-spaniel-scenic.jpeg",
    features: [],
  },
  {
    id: 3,
    title: "Latest Equipment",
    subtitle: "Purpose-built clinic for your pet's comfort",
    badge: "Modern Facilities",
    description: "",
    cta: "See Our Services",
    ctaLink: "#services",
    image: "/images/beach-terrier.jpeg",
    features: ["Highly trained veterinary team", "Modern facilities reducing stress to pets", "Latest equipment"],
  },
  {
    id: 4,
    title: "Caring For All Your Pets",
    subtitle: "Dogs, cats, and small animals welcome",
    badge: "Comprehensive Care",
    description: "",
    cta: "View Our Services",
    ctaLink: "#services",
    image: "/images/fluffy-kitten.jpeg",
    features: [],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext()
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious()
    }
  }

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/60 md:via-[#1e3a5f]/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 h-full flex flex-col justify-center md:pl-[8%]">
            <div className="max-w-2xl w-full text-left animate-in slide-in-from-bottom-8 fade-in duration-1000">
              {/* Logo - optimized for mobile */}
              <div className="mb-4 sm:mb-6 md:mb-8 bg-white rounded-full shadow-xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center overflow-hidden animate-float">
                <img
                  src="/images/almond-circle-logo.png"
                  alt="Almond Vet Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="inline-block mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#7ed321] backdrop-blur-sm rounded-full shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">{slide.badge}</span>
              </div>

              {/* Title - improved mobile sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 leading-tight text-balance drop-shadow-md">
                {slide.title}
              </h1>

              {/* Subtitle */}
              {slide.subtitle && (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#00bcd4] mb-3 sm:mb-4 md:mb-6 font-bold leading-relaxed drop-shadow-sm">
                  {slide.subtitle}
                </p>
              )}

              {/* Description */}
              {slide.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed">
                  "{slide.description}"
                </p>
              )}

              {/* Features List */}
              {slide.features.length > 0 && (
                <ul className="mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 text-left">
                  {slide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base md:text-lg text-white/90">
                      <span className="mr-2 sm:mr-3 text-[#7ed321] text-lg sm:text-xl md:text-2xl drop-shadow-sm">
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#00bcd4] to-[#7ed321] hover:from-[#00acc1] hover:to-[#6cb01d] text-white text-sm sm:text-base md:text-lg h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 font-bold shadow-lg rounded-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
                >
                  <a href={slide.ctaLink}>
                    {slide.cta} <ArrowRight className="ml-2 animate-pulse" size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 sm:h-3 rounded-full transition-all touch-manipulation ${
              index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/50 hover:bg-white/70 w-2.5 sm:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Perthshire's Newest Independent Vet Practice",
    subtitle: "Independent veterinary care in Perth",
    badge: "Open Now",
    cta: "Contact the Practice",
    ctaLink: "#contact",
    image: "/images/black-labrador.jpeg",
  },
  {
    id: 2,
    title: "Founded by Dr Katie Jones & Dr Lisa Elgie",
    subtitle: "",
    badge: "Meet Our Founders",
    cta: "Learn About Our Team",
    ctaLink: "#founders",
    image: "/images/cocker-spaniel-scenic.jpeg",
  },
  {
    id: 3,
    title: "Latest Equipment",
    subtitle: "Purpose-built clinic for your pet's comfort",
    badge: "Modern Facilities",
    cta: "See Our Services",
    ctaLink: "#services",
    image: "/images/beach-terrier.jpeg",
  },
  {
    id: 4,
    title: "Caring For All Your Pets",
    subtitle: "Dogs, cats, and small animals welcome",
    badge: "Comprehensive Care",
    cta: "View Our Services",
    ctaLink: "#services",
    image: "/images/fluffy-kitten.jpeg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/60 md:via-[#1e3a5f]/40 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-10 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-3xl w-full flex flex-col items-center md:items-start text-center md:text-left animate-in slide-in-from-bottom-8 duration-1000">
              <div className="mb-6 sm:mb-8 md:mb-10 bg-white rounded-full shadow-2xl w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 flex items-center justify-center overflow-hidden border-4 border-white/20">
                <img
                  src="/images/almond-circle-logo.png"
                  alt="Almond Vet Care"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="inline-block mb-4 sm:mb-6 px-4 py-2 bg-[#7ed321] rounded-full shadow-lg">
                <span className="text-xs sm:text-sm font-black text-white tracking-widest uppercase">{slide.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-xl">
                {slide.title}
              </h1>

              {slide.subtitle && (
                <p className="text-xl sm:text-2xl text-[#00bcd4] mb-8 font-bold drop-shadow-md">
                  {slide.subtitle}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#00bcd4] hover:bg-[#00acc1] text-white text-lg h-16 px-10 font-black shadow-2xl rounded-2xl transition-all hover:-translate-y-1"
                >
                  <a href={slide.ctaLink} tabIndex={index === currentSlide ? 0 : -1}>
                    {slide.cta} <ArrowRight className="ml-2" size={24} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous hero slide"
        onClick={goToPrevious}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        type="button"
        aria-label="Next hero slide"
        onClick={goToNext}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-10" : "bg-white/30 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

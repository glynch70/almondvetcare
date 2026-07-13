"use client"

import type { PointerEvent } from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const aboutImages = [
  {
    src: "/images/patients/dachshund-consultation.jpg.png",
    alt: "Dachshund patient during a consultation at Almond Vet Care",
    objectPosition: "center",
  },
  {
    src: "/images/patients/vet-examining-dog-almond-vet-care.jpg.png",
    alt: "Vet examining a dog patient at Almond Vet Care",
    objectPosition: "center 35%",
  },
  {
    src: "/images/team/almond-vet-care-veterinary-team-outside.jpg.png",
    alt: "Almond Vet Care veterinary team outside",
    objectPosition: "center 25%",
  },
  {
    src: "/images/team/almond-vet-care-team-with-german-shepherd.jpg.png",
    alt: "Almond Vet Care team with a German Shepherd patient",
    objectPosition: "center 25%",
  },
]

export function About() {
  const [currentImage, setCurrentImage] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const highlights = [
    "Independent practice - no corporate chain!",
    "Open now",
    "Compassionate care",
    "Transparent pricing with our price promise",
  ]

  const showPreviousImage = () => {
    setCurrentImage((current) => (current - 1 + aboutImages.length) % aboutImages.length)
  }

  const showNextImage = () => {
    setCurrentImage((current) => (current + 1) % aboutImages.length)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return
    touchStartX.current = event.clientX
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || event.pointerType === "mouse") return

    const swipeDistance = event.clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(swipeDistance) < 40) return
    if (swipeDistance > 0) {
      showPreviousImage()
    } else {
      showNextImage()
    }
  }

  return (
    <section id="about" className="py-10 sm:py-20 bg-white relative overflow-hidden scroll-mt-20 px-5 sm:px-10">
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-[#00bcd4]/5 -skew-x-12 translate-x-1/4 hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-[#7ed321]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 animate-in slide-in-from-left duration-1000">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1e3a5f]/5 rounded-full border border-[#1e3a5f]/10">
              <span className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-balance text-[#1e3a5f] leading-tight">
              Independent vets in <span className="text-[#00bcd4]">Perth</span>
            </h2>
            <div className="space-y-4 text-lg sm:text-xl leading-relaxed text-muted-foreground mb-8">
              <p>
                We're Perth's newest independent vet practice, founded on the principle that animal welfare
                should always come first.
              </p>
              <p>
                We're not part of a corporate chain, we're experienced vets and nurses that deeply care about your pets.
                Our purpose built clinic combines the latest in modern veterinary medicine with compassionate,
                personalised care.
              </p>
              <p>
                We're looking forward to getting to know you and your pets, building lasting relationships based on
                trust and understanding.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((highlight) => (
                <div key={highlight} className="px-4 py-2 bg-[#7ed321]/10 rounded-full border border-[#7ed321]/30">
                  <span className="text-sm sm:text-base font-bold text-[#1e3a5f]">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#00b4d8] hover:bg-[#00acc1] text-white rounded-xl shadow-lg h-14 px-8 font-bold text-lg transition-all hover:-translate-y-1"
              >
                <a href="#contact">Contact the Practice</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all h-14 px-8 font-bold text-lg"
              >
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl touch-pan-y"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                touchStartX.current = null
              }}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {aboutImages.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full shrink-0 object-cover"
                    style={{ objectPosition: image.objectPosition }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/35 to-transparent pointer-events-none" />
              <div className="hidden md:flex absolute inset-y-0 left-4 right-4 items-center justify-between pointer-events-none">
                <button
                  type="button"
                  aria-label="Previous About Us image"
                  onClick={showPreviousImage}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 text-[#1e3a5f] shadow-xl flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next About Us image"
                  onClick={showNextImage}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 text-[#1e3a5f] shadow-xl flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {aboutImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show About Us image ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentImage ? "w-8 bg-[#00bcd4]" : "w-2.5 bg-[#1e3a5f]/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type { PointerEvent } from "react"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clinicImages = [
  {
    src: "/images/practice/almond-vet-care-practice-exterior.jpg.png",
    alt: "Almond Vet Care practice exterior",
    objectPosition: "center",
  },
  {
    src: "/images/practice/almond-vet-care-reception-desk.jpg.png",
    alt: "Almond Vet Care reception desk",
    objectPosition: "center",
  },
  {
    src: "/images/practice/almond-vet-care-consultation-room.jpg.png",
    alt: "Almond Vet Care consultation room",
    objectPosition: "center",
  },
  {
    src: "/images/practice/almond-vet-care-clinical-area.jpg.png",
    alt: "Almond Vet Care clinical area",
    objectPosition: "center",
  },
  {
    src: "/images/practice/almond-vet-care-xray-room.jpg.png",
    alt: "Almond Vet Care X-ray room",
    objectPosition: "center",
  },
  {
    src: "/images/practice/almond-vet-care-operating-theatre.jpg.png",
    alt: "Almond Vet Care operating theatre",
    objectPosition: "center",
  },
]

export function OurClinic() {
  const [selectedImage, setSelectedImage] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const showPreviousImage = () => {
    setSelectedImage((current) => (current - 1 + clinicImages.length) % clinicImages.length)
  }

  const showNextImage = () => {
    setSelectedImage((current) => (current + 1) % clinicImages.length)
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
    <section id="clinic" className="py-10 sm:py-20 bg-[#f9fafb] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1e3a5f]">Our Clinic</h2>
            <div className="w-20 h-1.5 bg-[#00bcd4] mx-auto mt-8 rounded-full" />
          </div>

          <div className="mb-12 sm:mb-20">
            <div
              className="relative h-[300px] sm:h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group touch-pan-y"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                touchStartX.current = null
              }}
            >
              {clinicImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading={index === selectedImage ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className={`absolute inset-0 w-full h-full select-none object-cover transition-opacity duration-500 ease-out group-hover:scale-110 ${
                    index === selectedImage ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ objectPosition: image.objectPosition }}
                />
              ))}
              <div className="hidden md:flex absolute inset-y-0 left-4 right-4 items-center justify-between pointer-events-none">
                <button
                  type="button"
                  aria-label="Previous clinic image"
                  onClick={showPreviousImage}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 text-[#1e3a5f] shadow-xl flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next clinic image"
                  onClick={showNextImage}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/85 text-[#1e3a5f] shadow-xl flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-6 gap-4 mt-5">
              {clinicImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show ${image.alt}`}
                  onClick={() => setSelectedImage(index)}
                  className={`h-24 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                    index === selectedImage
                      ? "ring-4 ring-[#00bcd4] ring-offset-2 ring-offset-[#f9fafb]"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: image.objectPosition }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

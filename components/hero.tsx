import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/happy-dog-and-cat-together-at-veterinary-clinic.jpg"
          alt="Happy pets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%2010.30.12-nq1ad9xzOkMzuins8Pn4kBOlNT61qA.jpeg"
              alt="Almond Vet Care"
              className="h-28 md:h-36 w-auto"
            />
          </div>
          <div className="inline-block mb-8 px-4 py-2 bg-[#84cc16] backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium text-white">
              Now Taking Registrations - Be Among Our First Clients
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight text-balance">
            Perthshire's Newest Independent Vet Practice
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
            Founded by Katie Jamieson and Lisa - experienced veterinary professionals dedicated to independent pet care
          </p>
          <p className="text-2xl md:text-3xl text-white/90 mb-6 font-bold">Opening Spring 2026</p>
          <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed text-pretty">
            Purpose-built modern facilities with compassionate, expert veterinary care for your beloved pets.
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-6 font-medium">Family-run, not corporate-owned</p>
          <p className="text-lg text-[#84cc16] font-semibold mb-10">Limited spaces available for founding clients</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#84cc16] hover:bg-[#65a30d] text-white text-lg h-16 px-10 font-semibold shadow-lg rounded-xl"
            >
              <a href="#contact">
                Register Your Pet Today <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg h-16 px-10 font-semibold shadow-lg rounded-xl"
            >
              <a href="#benefits">Join Our Waiting List</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}

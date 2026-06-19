import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PawPrint, Clock, Heart, Star, ArrowRight } from "lucide-react"

const iconCards = [
  {
    icon: PawPrint,
    title: "Ask a Vet",
    description: "Message an experienced vet anytime.",
    color: "#6b2c5f",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Evenings, weekends and bank holidays.",
    color: "#f15a2b",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Know what to do next when you're worried.",
    color: "#0d4f4f",
  },
]

export function Vidivet() {
  return (
    <section id="vidivet" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f15a2b]/5 to-white">
      {/* Soft background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f15a2b]/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#6b2c5f]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#0d4f4f]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero: two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f15a2b]/10 px-4 py-1.5 text-sm font-semibold text-[#f15a2b]">
              <span className="h-2 w-2 rounded-full bg-[#f15a2b] animate-pulse-soft" />
              Out-of-Hours Vet Advice
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance text-[#6b2c5f]">
              Need Advice When We&apos;re Closed?
            </h2>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
              Get guidance from an experienced vet anytime through Vidivet. Whether it&apos;s an evening, weekend or bank
              holiday, help is only a message away.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full bg-[#6b2c5f] text-white hover:bg-[#5a2450] px-8 h-13 text-base shadow-lg shadow-[#6b2c5f]/20"
              >
                Activate Vidivet
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[#6b2c5f]/30 text-[#6b2c5f] hover:bg-[#6b2c5f]/5 px-8 h-13 text-base bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT - artwork 40% larger and dominant */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Soft glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 mx-auto my-auto h-[85%] w-[85%] rounded-full bg-[#f15a2b]/30 blur-3xl"
            />
            <div className="animate-float relative">
              <Image
                src="/vidivet-promo.png"
                alt="Vidivet app showing the Ask a Vet home screen and a list of conversations with experienced vets"
                width={1112}
                height={868}
                priority
                className="w-full max-w-[44rem] lg:max-w-[52rem] h-auto drop-shadow-2xl"
              />

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 left-2 sm:left-0 lg:-left-10 w-64 sm:w-72 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5">
                <div className="flex items-center gap-0.5 text-[#f15a2b]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  &ldquo;Got advice within minutes when my dog became unwell on a Sunday evening.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three icon cards */}
        <div className="mt-28 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {iconCards.map((card, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-border transition-all hover:shadow-xl hover:-translate-y-1.5"
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${card.color}15`, color: card.color }}
              >
                <card.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Trust box */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#6b2c5f] p-10 md:p-14 text-center shadow-xl">
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#f15a2b]/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#0d4f4f]/40 blur-2xl"
            />
            <div className="relative">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Heart className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white text-balance">
                Why Almond Vet Care Uses Vidivet
              </h3>
              <p className="mt-4 text-lg text-white/85 leading-relaxed text-pretty max-w-2xl mx-auto">
                Any conversations are shared with our team, allowing us to continue your pet&apos;s care quickly and
                efficiently if an appointment is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

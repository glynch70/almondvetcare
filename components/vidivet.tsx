import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Stethoscope,
  AlertCircle,
  Home,
  Moon,
  Clock,
  ShieldCheck,
  Link2,
  ArrowRight,
} from "lucide-react"

const benefits = [
  { icon: MessageCircle, text: "Message an experienced vet anytime" },
  { icon: Stethoscope, text: "Ask questions about symptoms and health concerns" },
  { icon: AlertCircle, text: "Get guidance on urgency and next steps" },
  { icon: Home, text: "Receive advice on at-home care" },
  { icon: Moon, text: "Support available evenings, weekends and when the practice is closed" },
]

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Get veterinary advice whenever concerns arise.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description: "Understand whether your pet needs urgent attention.",
  },
  {
    icon: Link2,
    title: "Connected Care",
    description:
      "Conversation summaries are shared with Almond Vet Care so our team can continue care seamlessly.",
  },
]

const steps = [
  { number: "1", text: "Open the app and ask a question." },
  { number: "2", text: "Chat directly with an experienced vet." },
  { number: "3", text: "Receive guidance on urgency, home care and next steps." },
  {
    number: "4",
    text: "If needed, Almond Vet Care can continue your pet's care with access to the conversation summary.",
  },
]

export function Vidivet() {
  return (
    <section id="vidivet" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero: two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f15a2b]/10 px-4 py-1.5 text-sm font-semibold text-[#f15a2b]">
              <span className="h-2 w-2 rounded-full bg-[#f15a2b]" />
              24/7 Vet Advice
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-balance">
              Expert Veterinary Advice Anytime
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              Almond Vet Care clients have exclusive access to Vidivet, giving you direct access to experienced vets
              whenever you need support.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6b2c5f]/10 text-[#6b2c5f]">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <span className="text-base text-foreground/90 leading-relaxed">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full bg-[#6b2c5f] text-white hover:bg-[#5a2450] px-8 h-12 text-base"
              >
                Activate Vidivet
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[#6b2c5f]/30 text-[#6b2c5f] hover:bg-[#6b2c5f]/5 px-8 h-12 text-base bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* Soft glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] my-auto rounded-full bg-[#f15a2b]/25 blur-3xl"
            />
            <div className="animate-float">
              <Image
                src="/vidivet-promo.png"
                alt="Vidivet app showing the Ask a Vet home screen and a list of conversations with experienced vets"
                width={1112}
                height={868}
                priority
                className="w-full max-w-xl h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f15a2b] to-[#6b2c5f] text-white transition-transform group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-balance">How Vidivet Works</h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-[#0d4f4f]/5 p-7 ring-1 ring-[#0d4f4f]/10 transition-all hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d4f4f] text-lg font-bold text-white">
                  {step.number}
                </span>
                <p className="mt-5 text-base text-foreground/90 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

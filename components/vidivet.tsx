import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, HeartPulse } from "lucide-react"

export function VidiVet() {
  return (
    <section id="vidivet" className="py-10 sm:py-20 bg-[#f9fafb] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border-2 border-gray-100 p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-3xl bg-[#00b4d8]/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-9 h-9 text-[#00b4d8]" aria-hidden="true" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1e3a5f]">VidiVet</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Almond Vet Care clients can use VidiVet for online veterinary advice when they need guidance or reassurance between visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: MessageCircle,
                title: "Ask a vet",
                text: "Submit a question online and receive veterinary guidance.",
              },
              {
                icon: Clock,
                title: "Extra support",
                text: "Helpful for non-urgent questions when you are unsure what to do next.",
              },
              {
                icon: HeartPulse,
                title: "Peace of mind",
                text: "A simple way to support your pet's care alongside the practice team.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f9fafb] rounded-3xl p-6 border-2 border-gray-100">
                <item.icon className="w-8 h-8 text-[#00b4d8] mb-4" aria-hidden="true" />
                <h3 className="text-xl font-black text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-0">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#7ed321] hover:bg-[#6bc41a] text-white rounded-xl shadow-lg h-14 px-8 font-bold text-lg transition-all hover:-translate-y-1"
            >
              <a href="https://go.vidivet.com/almond-vetcare" target="_blank" rel="noopener noreferrer">
                Use VidiVet
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

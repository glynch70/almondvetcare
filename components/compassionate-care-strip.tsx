import { HeartHandshake } from "lucide-react"

export function CompassionateCareStrip() {
  return (
    <section className="bg-[#1e3a5f] px-5 sm:px-10 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-8 h-8 text-[#7ed321]" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">
              Compassionate, independent care for every pet.
            </h2>
            <p className="text-base sm:text-lg text-white/75 mb-0">
              Local vets, personal relationships and clinical decisions made with animal welfare first.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

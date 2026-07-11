import { Button } from "@/components/ui/button"
import { Check, Dog, Cat } from "lucide-react"

export function CarePlan() {
  const benefits = [
    "UNLIMITED vet and nurse consultations",
    "Routine vaccinations (including kennel cough)",
    "Routine flea, tick and worming treatments",
    "Microchipping",
    "Routine end of life care when the time comes",
  ]

  return (
    <section id="care-plan" className="py-10 sm:py-20 bg-white scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="max-w-6xl mx-auto bg-[#1e3a5f] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#00b4d8]/20 relative px-6 py-12 sm:px-16 sm:py-16 sm:pb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b4d8]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84cc16]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-[900px] mx-auto text-center text-white">
            <div className="flex justify-center mb-4">
              <img
                src="/images/almond-vet-care-logo.png"
                alt="Almond Vet Care"
                loading="lazy"
                className="w-16 sm:w-20 h-auto filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              />
            </div>

            <div className="mb-10">
              <h2 className="text-3xl sm:text-[40px] font-bold mb-2 text-white leading-tight">
                Almond Care Plan
              </h2>
              <p className="text-[#00b4d8] text-lg sm:text-[20px] font-bold">Save Money & Gain Peace of Mind</p>
            </div>

            <div className="mb-10 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-[56px] sm:text-[72px] font-extrabold text-white leading-none">£25</span>
                <span className="text-lg sm:text-[18px] text-white/80 font-light">per month</span>
              </div>
              <p className="text-base sm:text-[16px] text-white/60 mt-1 font-light">(£300 per year)</p>
            </div>

            <div className="max-w-[600px] mx-auto mb-12">
              <h3 className="text-[18px] font-bold uppercase tracking-[2px] text-white mb-6">What's Included:</h3>
              <ul className="space-y-4 text-left">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-6 h-6 text-[#84cc16]" aria-hidden="true" strokeWidth={3} />
                    </div>
                    <span className="text-white text-base sm:text-[18px] leading-[1.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-[5%] mb-12">
              <div className="sm:w-[47.5%] bg-[#2d4a6f]/60 border-2 border-[#00b4d8]/40 rounded-[24px] p-8 sm:p-10 text-center flex flex-col items-center shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                <Dog className="w-14 h-14 text-[#00b4d8] mb-4" strokeWidth={1.5} />
                <h3 className="text-[24px] font-semibold text-white mb-6">For Dogs</h3>
                <p className="text-5xl sm:text-[56px] font-extrabold text-[#84cc16] leading-tight">Save £270</p>
                <p className="text-[16px] text-white/70 font-light mt-1">per year</p>
              </div>
              <div className="sm:w-[47.5%] bg-[#2d4a6f]/60 border-2 border-[#00b4d8]/40 rounded-[24px] p-8 sm:p-10 text-center flex flex-col items-center shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                <Cat className="w-14 h-14 text-[#00b4d8] mb-4" strokeWidth={1.5} />
                <h3 className="text-[24px] font-semibold text-white mb-6">For Cats</h3>
                <p className="text-5xl sm:text-[56px] font-extrabold text-[#84cc16] leading-tight">Save £194</p>
                <p className="text-[16px] text-white/70 font-light mt-1">per year</p>
              </div>
            </div>

            <div className="flex flex-col items-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00b4d8] to-[#0096c7] hover:bg-[#0096c7] text-white border-none rounded-full h-16 w-full max-w-[500px] text-[18px] font-bold cursor-pointer transition-all duration-300 shadow-[0_8px_24px_rgba(0,180,216,0.4)] hover:shadow-[0_12px_32px_rgba(0,180,216,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <a href="#contact">Ask About the Almond Care Plan</a>
              </Button>
            </div>

            <p className="text-[14px] leading-[1.8] text-white/75 font-light text-center px-8 italic max-w-[600px] mx-auto">
              *Savings based on using only 1 consultation per year. The plan includes unlimited free consultations and put to sleep appointment when needed. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

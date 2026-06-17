import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, PawPrint, Cat } from "lucide-react"

export function CarePlan() {
  const included = [
    "UNLIMITED vet and nurse consultations",
    "Routine vaccinations (including kennel cough)",
    "Routine flea, tick and worming treatments",
    "Microchipping",
    "Routine end of life care when the time comes",
  ]

  return (
    <section
      id="care-plan"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f]/5 via-white to-[#7ed321]/10 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
            Almond Care Plan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Save Money &amp; Gain Peace of Mind
          </p>
          <div className="w-16 sm:w-20 h-1.5 bg-[#7ed321] mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto rounded-2xl shadow-xl border-0 ring-1 ring-gray-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#00bcd4] to-[#7ed321]" />
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-1">
                <span className="text-5xl sm:text-6xl font-bold text-[#00bcd4]">£25</span>
                <span className="text-lg sm:text-xl text-muted-foreground">per month</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">(£300 per year)</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What's included */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-[#1e3a5f] mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7ed321]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#7ed321]" />
                      </div>
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Savings */}
              <div className="grid grid-cols-2 gap-4 content-start">
                <div className="rounded-2xl bg-[#f8fafc] border-2 border-[#00bcd4]/20 p-5 text-center">
                  <PawPrint className="w-8 h-8 text-[#00bcd4] mx-auto mb-2" />
                  <h4 className="font-bold text-[#1e3a5f] mb-1">For Dogs</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-[#7ed321]">Save £270</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">per year</p>
                </div>
                <div className="rounded-2xl bg-[#f8fafc] border-2 border-[#00bcd4]/20 p-5 text-center">
                  <Cat className="w-8 h-8 text-[#00bcd4] mx-auto mb-2" />
                  <h4 className="font-bold text-[#1e3a5f] mb-1">For Cats</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-[#7ed321]">Save £194</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">per year</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00bcd4] to-[#7ed321] hover:from-[#00a5bd] hover:to-[#6bc019] text-white font-bold px-8 rounded-xl h-12 sm:h-14 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <a href="https://my.provet.com/almond-vet-care-limited" target="_blank" rel="noopener noreferrer">
                  Register for the Almond Care Plan
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6 text-center max-w-2xl mx-auto leading-relaxed">
              *Savings based on using only 1 consultation per year. The plan includes unlimited free consultations and
              put to sleep appointment when needed. Terms and conditions apply.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

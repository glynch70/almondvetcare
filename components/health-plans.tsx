"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Dog, Cat, Info } from "lucide-react"

export function HealthPlans() {
  const planInclusions = [
    "UNLIMITED vet and nurse consultations",
    "Routine vaccinations (including kennel cough)",
    "Routine flea, tick and worming treatments",
    "Microchipping",
    "Routine end of life care when the time comes",
  ]

  return (
    <section
      id="health-plans"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f]/5 via-white to-[#7ed321]/10 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
            Almond Care Plan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4 italic">
            A simple health care plan, made for your peace of mind.
          </p>
          <div className="w-20 h-1.5 bg-[#00bcd4] mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#00bcd4]/30 rounded-3xl bg-white overflow-hidden shadow-2xl mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center bg-gray-50/50">
                <img
                  src="/images/almond-care-plan.png"
                  alt="Almond Care Plan"
                  className="w-full max-w-md h-auto rounded-2xl shadow-lg mb-8"
                />
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-2">£25</p>
                  <p className="text-xl text-muted-foreground mb-4">per month</p>
                  <p className="text-xs text-muted-foreground">(Terms and conditions apply)</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 bg-white">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6 sm:mb-8">What's Included:</h3>
                <ul className="space-y-4 sm:space-y-6">
                  {planInclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#7ed321]/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-[#7ed321]" />
                      </div>
                      <span className="text-base sm:text-lg text-gray-700 leading-tight font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 sm:mt-12">
                  <Button
                    size="lg"
                    className="w-full bg-[#00bcd4] hover:bg-[#00acc1] text-white rounded-2xl h-14 sm:h-16 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => alert("Registration information coming soon")}
                  >
                    Join the Plan
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">Incredible Savings</h3>
            <p className="text-muted-foreground text-lg">Spread the cost and save significantly on your pet's care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Dog Savings */}
            <Card className="rounded-3xl border-2 border-blue-50 bg-white overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-blue-50/50 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Dog className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a5f]">For Dogs</h4>
                    <p className="text-blue-600 font-bold">Save approx. £270.23 per year</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-blue-100/50">
                    <span className="text-muted-foreground">Annual value if purchased separately</span>
                    <span className="font-bold text-[#1e3a5f]">£570.23</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-100/50">
                    <span className="text-muted-foreground">Annual plan cost</span>
                    <span className="font-bold text-[#7ed321]">£300</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 p-4 bg-white/50 rounded-2xl text-sm text-muted-foreground">
                  <p className="flex items-start gap-2 italic">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Based on using only 1 consultation per year. Plan includes unlimited free consultations and put to
                    sleep appointment when needed.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cat Savings */}
            <Card className="rounded-3xl border-2 border-emerald-50 bg-white overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="bg-emerald-50/50 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <Cat className="w-6 h-6 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a5f]">For Cats</h4>
                    <p className="text-emerald-600 font-bold">Save approx. £193.54 per year</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-emerald-100/50">
                    <span className="text-muted-foreground">Annual value if purchased separately</span>
                    <span className="font-bold text-[#1e3a5f]">£493.54</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-100/50">
                    <span className="text-muted-foreground">Annual plan cost</span>
                    <span className="font-bold text-[#7ed321]">£300</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 p-4 bg-white/50 rounded-2xl text-sm text-muted-foreground">
                  <p className="flex items-start gap-2 italic">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Based on using only 1 consultation per year. Plan includes unlimited free consultations and put to
                    sleep appointment when needed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

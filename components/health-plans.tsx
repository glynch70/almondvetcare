"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HealthPlans() {
  const plans = [
    {
      name: "Adult Dog Plan",
      price: "£22",
      description: "For dogs 1-7 years old",
      features: [
        "Annual vaccinations",
        "Flea & worm treatment",
        "Bi-annual health checks",
        "Dental checks",
        "10% off treatments",
        "24/7 emergency helpline",
      ],
      popular: true,
    },
    {
      name: "Adult Cat Plan",
      price: "£19",
      description: "For cats 1-7 years old",
      features: [
        "Annual vaccinations",
        "Flea & worm treatment",
        "Bi-annual health checks",
        "Dental checks",
        "10% off treatments",
        "24/7 emergency helpline",
      ],
      popular: true,
    },
    {
      name: "Senior Pet Plan",
      price: "£28",
      description: "For pets 8+ years old",
      features: [
        "Annual vaccinations",
        "Flea & worm treatment",
        "Quarterly health checks",
        "Blood tests included",
        "Dental checks",
        "15% off treatments",
        "24/7 emergency helpline",
      ],
    },
  ]

  return (
    <section
      id="health-plans"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1e3a5f]/5 via-white to-[#7ed321]/10 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
            Healthcare Plans
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Spread the cost of routine preventative healthcare with monthly payments
          </p>
          <div className="w-20 h-1.5 bg-[#00bcd4] mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto mb-12 space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-[#00bcd4]/20">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#7ed321] flex-shrink-0 mt-1" />
            <p className="text-base sm:text-lg text-muted-foreground">
              Spread the cost of routine preventative healthcare
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#7ed321] flex-shrink-0 mt-1" />
            <p className="text-base sm:text-lg text-muted-foreground">Available for all ages</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#7ed321] flex-shrink-0 mt-1" />
            <p className="text-base sm:text-lg text-muted-foreground">Individually tailored to your pet</p>
          </div>
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#7ed321] flex-shrink-0 mt-1" />
            <p className="text-base sm:text-lg text-muted-foreground">Includes routine end of life care</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-[#00bcd4] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl bg-white overflow-hidden ${plan.popular ? "ring-4 ring-[#7ed321]/20 sm:scale-105 shadow-lg relative z-10" : "border-gray-100"}`}
            >
              {plan.popular && (
                <div className="bg-[#7ed321] text-white text-center py-1 text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl sm:text-2xl text-[#1e3a5f]">{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge className="bg-gradient-to-r from-[#0891b2] to-[#10b981] text-white border-0 text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-[#00bcd4]">{plan.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7ed321]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#7ed321]" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-xl h-12 sm:h-auto font-semibold transition-all ${plan.popular ? "bg-[#00bcd4] hover:bg-[#00acc1] text-white shadow-md" : "bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white"}`}
                  onClick={() => alert("More information coming soon")}
                >
                  More Info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            All plans include unlimited consultations and priority booking
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl bg-transparent h-12 sm:h-auto"
            onClick={() => alert("More information coming soon")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

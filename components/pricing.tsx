"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

type PricingItem = { procedure: string; price: string }
type PricingCategory = { title: string; items: PricingItem[] }

export function Pricing() {
  const categories: PricingCategory[] = [
    {
      title: "Surgical Procedures",
      items: [
        { procedure: "Neutering - Cat (male)", price: "£[TBC]" },
        { procedure: "Neutering - Cat (female)", price: "£[TBC]" },
        { procedure: "Neutering - Dog (male)", price: "£[TBC]" },
        { procedure: "Neutering - Dog (female)", price: "£[TBC]" },
        { procedure: "Dental Scale & Polish", price: "£[TBC]" },
      ],
    },
    {
      title: "Diagnostics",
      items: [
        { procedure: "Digital X-ray", price: "£[TBC]" },
        { procedure: "Ultrasound Scan", price: "£[TBC]" },
        { procedure: "In-house Blood Tests", price: "£[TBC]" },
      ],
    },
    {
      title: "Routine Services",
      items: [
        { procedure: "Consultation", price: "£[TBC]" },
        { procedure: "Health Check", price: "£[TBC]" },
        { procedure: "Microchipping", price: "£[TBC]" },
        { procedure: "Nail Clipping", price: "£[TBC]" },
      ],
    },
    {
      title: "Vaccinations",
      items: [
        { procedure: "Dog - Primary Course", price: "£[TBC]" },
        { procedure: "Dog - Annual Booster", price: "£[TBC]" },
        { procedure: "Cat - Primary Course", price: "£[TBC]" },
        { procedure: "Cat - Annual Booster", price: "£[TBC]" },
        { procedure: "Kennel Cough", price: "£[TBC]" },
      ],
    },
    {
      title: "Other Services",
      items: [
        { procedure: "Animal Health Certificate", price: "£[TBC]" },
        { procedure: "Home Visit", price: "£[TBC]" },
        { procedure: "Acupuncture", price: "£[TBC]" },
        { procedure: "Physiotherapy", price: "£[TBC]" },
      ],
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            We believe in clear, honest pricing. Click each section to view our fees.
          </p>
          <div className="w-16 sm:w-20 h-1.5 bg-[#00bcd4] mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {categories.map((category, index) => {
            const isOpen = openIndex === index
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-md border-0 ring-1 ring-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-blue-50/40 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#1e3a5f]">{category.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00bcd4] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100">
                    <table className="w-full">
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr
                            key={itemIndex}
                            className="border-b border-gray-50 last:border-0 hover:bg-blue-50/30 transition-colors"
                          >
                            <td className="py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base font-medium text-gray-700">
                              {item.procedure}
                            </td>
                            <td className="text-right py-3 sm:py-4 px-5 sm:px-6 font-bold text-[#00bcd4] text-sm sm:text-base">
                              {item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-2 text-xs sm:text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]" />
            All prices include VAT
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]" />
            Full price list available on request
          </p>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 rounded-xl h-12 sm:h-14 text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <a href="#contact">Contact Us for More Information</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

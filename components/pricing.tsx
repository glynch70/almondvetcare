import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info } from "lucide-react"

export function Pricing() {
  const pricingCategories = [
    {
      name: "Surgical Procedures",
      note: "All prices for surgical procedures include a pre-op assessment, pain relief for post op, a buster collar if required and all post op checks.",
      items: [
        { procedure: "Bitch spay", price: "£430" },
        { procedure: "Dog castrate", price: "£300" },
        { procedure: "Cat spay", price: "£140" },
        { procedure: "Cat castrate", price: "£100" },
        { procedure: "Rabbit spay", price: "£270" },
        { procedure: "Rabbit castrate", price: "£175" },
        { procedure: "Dental procedures", price: "From £400" },
      ],
    },
    {
      name: "Diagnostics",
      items: [
        { procedure: "Ultrasound scan", price: "£220" },
        { procedure: "FAST scan", price: "£110" },
      ],
    },
    {
      name: "Routine Services",
      items: [
        { procedure: "Consultation", price: "£52" },
        { procedure: "Follow up consultation", price: "£48" },
        { procedure: "Nail clip", price: "£25" },
        { procedure: "Empty anal glands", price: "£25" },
        { procedure: "Microchip", price: "£25" },
        { procedure: "Prescription (up to 3 medications)", price: "£21" },
      ],
    },
    {
      name: "Vaccinations",
      items: [
        { procedure: "Annual vaccination - dog", price: "£65" },
        { procedure: "Annual vaccination - cat", price: "£67" },
        { procedure: "Dog primary vaccine course (up to 3 appointments)", price: "£99" },
        { procedure: "Cat primary vaccine course (2 appointments)", price: "£99" },
        { procedure: "KC (kennel cough) vaccine", price: "£50" },
        { procedure: "KC vaccine at time of other vaccine", price: "£35" },
      ],
    },
    {
      name: "Other Services",
      items: [
        { procedure: "Animal health certificate", price: "£200" },
        { procedure: "Put to sleep (including sedation and general cremation)", price: "£130" },
      ],
    },
  ]

  return (
    <section id="pricing" className="bg-white scroll-mt-20">
      <div className="container mx-auto px-5 sm:px-10 py-10 sm:py-20">
        {/* Accordion Pricing */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 pricing-section">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1e3a5f] leading-tight">Transparent Pricing</h2>
            <p className="text-base sm:text-xl text-gray-500 mb-10 max-w-[500px] mx-auto leading-relaxed">
              We believe in clear, honest pricing. Click each section to view our fees.
            </p>
            <div className="w-20 h-1.5 bg-[#84cc16] mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {pricingCategories.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-100 rounded-2xl overflow-hidden px-6 sm:px-8 bg-white hover:border-[#00b4d8]/30 transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-6 sm:py-8 group">
                  <span className="text-xl sm:text-2xl font-bold text-[#1e3a5f] group-hover:text-[#00b4d8] transition-colors">
                    {category.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex justify-between items-start gap-4 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-3 rounded-xl transition-colors"
                      >
                        <span className="min-w-0 text-gray-700 font-medium text-base sm:text-lg leading-snug">{item.procedure}</span>
                        <span className="font-bold text-[#00b4d8] text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  {category.note && (
                    <div className="mt-8 p-6 bg-[#1e3a5f]/5 rounded-2xl flex items-start gap-4 border border-[#1e3a5f]/10">
                      <Info className="w-6 h-6 text-[#00b4d8] shrink-0 mt-0.5" />
                      <p className="text-base text-[#1e3a5f]/80 italic leading-relaxed">{category.note}</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

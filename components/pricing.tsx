import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const pricingItems = [
    { procedure: "Consultation", price: "£[TBC]" },
    { procedure: "Vaccinations - Dog", price: "£[TBC]" },
    { procedure: "Vaccinations - Cat", price: "£[TBC]" },
    { procedure: "Microchipping", price: "£[TBC]" },
    { procedure: "Neutering - Cat", price: "£[TBC]" },
    { procedure: "Neutering - Dog (small)", price: "£[TBC]" },
    { procedure: "Dental Scale & Polish", price: "£[TBC]" },
    { procedure: "Blood Tests", price: "£[TBC]" },
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            We believe in transparent pricing. Below are our fees for routine procedures.
          </p>
          <div className="w-16 sm:w-20 h-1.5 bg-[#00bcd4] mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto rounded-2xl shadow-lg border-0 ring-1 ring-gray-100 overflow-hidden">
          <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl text-[#1e3a5f]">Our Pricing</CardTitle>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 sm:bg-transparent">
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 sm:py-4 px-4 sm:px-6 font-bold text-[#1e3a5f] text-sm sm:text-base">
                      Procedure
                    </th>
                    <th className="text-right py-3 sm:py-4 px-4 sm:px-6 font-bold text-[#1e3a5f] text-sm sm:text-base">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingItems.map((item, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium text-gray-700">
                        {item.procedure}
                      </td>
                      <td className="text-right py-3 sm:py-4 px-4 sm:px-6 font-bold text-[#00bcd4] text-sm sm:text-base">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-0 sm:mt-8 space-y-2 text-xs sm:text-sm text-muted-foreground bg-gray-50 sm:bg-transparent">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]" />
                Prices effective from Spring 2026
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bcd4]" />
                All prices include VAT
              </p>
            </div>

            <div className="p-6 sm:p-0 sm:mt-8 text-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 rounded-xl h-12 sm:h-14 text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <a href="#contact">Contact Us for More Information</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

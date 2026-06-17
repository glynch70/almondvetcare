import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Emergency() {
  return (
    <section id="emergency" className="py-12 sm:py-16 md:py-20 bg-red-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 rounded-full shadow-lg shadow-red-200">
              <span className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span className="animate-pulse">●</span> 24/7 Emergency Care
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
              Emergency Information
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Your pet's health and safety is our priority, day and night
            </p>
          </div>

          <Card className="border-2 border-red-200 rounded-2xl mb-8 shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-red-50 border-b border-red-100 py-4 sm:py-6">
              <CardTitle className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-[#1e3a5f]">
                <Phone className="w-6 h-6 text-red-600" />
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-center leading-relaxed">
                For emergencies outside our opening hours, we work with Vets Now Dundee to ensure your pet receives
                urgent care 24/7.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#1e3a5f]">Emergency Line</p>
                    <a href="tel:01382690723" className="text-xl sm:text-2xl font-bold text-red-600 hover:underline">
                      01382 690723
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#1e3a5f]">Out of Hours Provider</p>
                    <p className="text-lg sm:text-xl font-medium text-[#1e3a5f]">Vets Now Dundee</p>
                    <p className="text-sm sm:text-base text-muted-foreground">5 King&apos;s Cross Rd, Dundee DD2 3PT</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-sm text-[#1e3a5f] text-center">
                  <strong>Note:</strong> If you call our main number during an emergency outside hours, you'll be
                  directed to our emergency partner.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl bg-transparent border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all h-12 sm:h-14 px-6 sm:px-8 text-base"
            >
              <a href="#contact">Contact Us for More Information</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

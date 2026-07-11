import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Emergency() {
  return (
    <section id="emergency" className="py-10 sm:py-20 bg-[#fef2f2] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-[#dc2626] rounded-full shadow-2xl shadow-red-200">
              <span className="text-sm sm:text-base font-black text-white flex items-center gap-3 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" /> 
                24/7 Emergency Care
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 text-[#1e3a5f]">
              Emergency Information
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your pet's health and safety is our priority, day and night. We've partnered with the best to ensure they're always in good hands.
            </p>
          </div>

          <Card className="border-4 border-red-100 rounded-[2.5rem] mb-12 shadow-2xl bg-white overflow-hidden">
            <CardHeader className="bg-red-600 border-b border-red-700 py-6 sm:py-10 px-8 sm:px-12 text-white">
              <CardTitle className="flex items-center gap-4 text-2xl sm:text-4xl font-black">
                <AlertCircle className="w-8 h-8 sm:w-12 sm:h-12" />
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 sm:p-12 md:p-16">
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
                For emergencies outside our opening hours, we work with **Vets Now Dundee** to ensure your pet receives expert urgent care 24/7.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col gap-4 p-8 bg-red-50 rounded-3xl border-2 border-red-100 group hover:bg-red-100 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-red-600 mb-2">Emergency Line</p>
                    <a href="tel:01382690723" className="text-2xl sm:text-3xl font-black text-[#1e3a5f] hover:text-red-600 transition-colors">
                      01382 690723
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-8 bg-white rounded-3xl border-2 border-gray-100 group hover:border-red-200 transition-colors shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e3a5f] flex items-center justify-center shrink-0 shadow-lg shadow-blue-100">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-[#1e3a5f] mb-2">Location</p>
                    <p className="text-xl sm:text-2xl font-bold text-[#1e3a5f]">Vets Now Dundee</p>
                    <p className="text-muted-foreground">5 King's Cross Rd, Dundee DD2 3PT</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-50 border-2 border-blue-100 rounded-3xl relative overflow-hidden">
                <div className="relative z-10 flex gap-4 items-start">
                  <div className="text-blue-600 font-black text-2xl mt-[-4px]">ℹ</div>
                  <p className="text-base sm:text-lg text-[#1e3a5f] leading-relaxed italic">
                    <strong>Note:</strong> If you call our main number during an emergency outside hours, you'll be
                    automatically directed to our emergency partner.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white shadow-2xl h-16 px-12 text-xl font-black transition-all hover:-translate-y-1"
            >
              <a href="#contact">More Information</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

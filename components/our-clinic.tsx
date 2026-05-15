import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from "lucide-react"

export function OurClinic() {
  return (
    <section id="clinic" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00bcd4]/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#00bcd4]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f]">
              Our Clinic
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Purpose-built facilities for your pet's comfort
            </p>
          </div>

          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8 sm:mb-12 group">
            <img
              src="/images/black-cat.jpeg"
              alt="Black cat relaxing at our clinic"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                A comfortable space for all our patients
              </p>
            </div>
          </div>
          {/* </CHANGE> */}

          <Card className="border-2 border-gray-100 rounded-2xl shadow-lg overflow-hidden bg-white">
            <CardHeader className="bg-gray-50/50 pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#1e3a5f]">Under Construction!</CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Our state-of-the-art veterinary clinic is currently under construction. We're building a modern,
                welcoming space designed with your pet's comfort in mind.
              </p>
              <div className="bg-gradient-to-r from-[#84cc16]/10 to-[#10b981]/10 rounded-xl p-6 sm:p-8 border-2 border-[#84cc16]/20">
                <p className="text-base sm:text-lg font-bold text-[#1e3a5f]">
                  Video walkthrough and pictures coming soon!
                </p>
                <p className="text-sm text-muted-foreground mt-2">Follow us on social media for updates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

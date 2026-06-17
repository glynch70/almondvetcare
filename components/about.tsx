import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function About() {
  const highlights = [
    "Independent practice - no corporate chain!",
    "Now open in Perth",
    "Compassionate care",
    "Transparent pricing with our price promise",
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-[#00bcd4]/5 -skew-x-12 translate-x-1/4 hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-[#7ed321]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="order-2 lg:order-1 animate-in slide-in-from-left duration-1000">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e3a5f]/5 rounded-full border border-[#1e3a5f]/10">
              <span className="text-xs sm:text-sm font-bold text-[#1e3a5f] uppercase tracking-wide">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#1e3a5f]">
              Now Open in <span className="text-[#00bcd4]">Perth</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground mb-6 sm:mb-8">
              <p>
                We're Perth's newest independent vet practice, founded on the principle that animal welfare
                should always come first.
              </p>
              <p>
                We're not part of a corporate chain, we're experienced vets and nurses that deeply care about your pets.
                Our purpose built clinic combines the latest in modern veterinary medicine with compassionate,
                personalised care.
              </p>
              <p>
                We're looking forward to getting to know you and your pets, building lasting relationships based on
                trust and understanding. Register now to join our growing family of clients.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#7ed321]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#7ed321] transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#7ed321] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-base text-muted-foreground group-hover:text-[#1e3a5f] transition-colors">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all h-12 sm:h-auto"
              >
                <a href="#contact">Register Your Pet</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-xl border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-all bg-transparent h-12 sm:h-auto"
              >
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
            <img
              src="/images/springer-spaniel-highlands.jpeg"
              alt="Springer spaniel in Highland Perthshire"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#7ed321] shadow-lg rounded-full animate-pulse-soft">
                <span className="text-xs sm:text-sm font-bold text-white">Now Open</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1e3a5f]">
              Meet the Founders
            </h3>
            <div className="max-w-4xl mx-auto px-4 mt-6 sm:mt-8 mb-6 sm:mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
                <p>
                  We are Katie and Lisa, two passionate and experienced veterinarians with over 20 years of combined
                  experience in practice. Originally from Glasgow (having known each other since they were 15 years
                  old!), we have made Perth our home alongside our families, deeply valuing the vibrant and supportive
                  community here.
                </p>
                <p>
                  It is our dream to give back to this wonderful area by opening an independent veterinary practice
                  dedicated to providing exceptional care for small animals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8">
              {/* Katie Jones */}
              <div className="flex flex-col items-center group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-all duration-300 mb-4">
                  <img
                    src="/images/almond-20vet-20katie.png"
                    alt="Katie Jones - Co-Founder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-1">Dr Katie Jones</h4>
                <p className="text-sm sm:text-base text-[#7ed321] font-semibold">Co-Founder & Veterinary Surgeon</p>
              </div>

              {/* Lisa Elgie */}
              <div className="flex flex-col items-center group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-all duration-300 mb-4">
                  <img
                    src="/images/lisa.png"
                    alt="Lisa Elgie - Co-Founder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-1">Dr Lisa Elgie</h4>
                <p className="text-sm sm:text-base text-[#7ed321] font-semibold">Co-Founder & Veterinary Surgeon</p>
              </div>
            </div>
            {/* End of changes */}
            <div className="w-12 sm:w-16 h-1 bg-[#7ed321] mx-auto mt-6 sm:mt-8 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, Scissors, HeartPulse, Pill, Activity } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Routine Health Checks",
      description:
        "Comprehensive check ups, picking up problems early to ensure timely treatment and improved outcomes.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Routine vaccines to protect your pets from deadly diseases.",
    },
    {
      icon: Scissors,
      title: "Surgery",
      description:
        "From routine procedures to more complex operations. Modern surgical facilities with experienced surgeons.",
    },
    {
      icon: HeartPulse,
      title: "Dental Care",
      description: "Complete dental services including cleaning, extractions, and oral health assessments.",
    },
    {
      icon: Activity,
      title: "Diagnostic Services",
      description:
        "Advanced diagnostic tools including digital X-ray, ultrasound and in house lab for quick results. Clear costs before testing.",
    },
    {
      icon: Pill,
      title: "Preventative Healthcare",
      description: "Routine health checks, senior health checks, parasite treatment and more!",
    },
    {
      icon: HeartPulse,
      title: "Other Services",
      description: "Animal health certificates, home visit service, acupuncture and physio!",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 scroll-mt-20 bg-gradient-to-b from-white to-[#00bcd4]/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <Card className="border-2 border-[#7ed321] bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00bcd4] to-[#7ed321]" />
            <CardContent className="p-4 sm:p-6 text-center">
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#1e3a5f] leading-relaxed">
                Now open • <span className="text-[#00bcd4]">Book your appointment today</span>
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f] px-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Comprehensive veterinary care for your beloved pets
          </p>
          <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#7ed321] mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/images/spaniel-puppy-blue-eyes.jpeg"
              alt="Spaniel puppy with blue eyes"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/images/whippet-beach.jpeg"
              alt="Whippet at the beach"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/images/white-dog-jumping.jpeg"
              alt="White dog jumping"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
            <img
              src="/images/cocker-spaniel-tongue.jpeg"
              alt="Happy cocker spaniel"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 border-transparent hover:border-[#00bcd4] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group rounded-2xl bg-white ${service.featured ? "ring-2 ring-[#7ed321] shadow-lg" : ""}`}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00bcd4]/10 flex items-center justify-center group-hover:bg-[#00bcd4] group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00bcd4] group-hover:text-white transition-colors" />
                  </div>
                  {service.featured && (
                    <Badge className="bg-[#7ed321] hover:bg-[#6cb01d] text-white border-0 text-xs px-3 py-1 shadow-sm">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg sm:text-xl text-[#1e3a5f] group-hover:text-[#00bcd4] transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                {service.note && <p className="text-xs sm:text-sm font-bold text-[#7ed321]">{service.note}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, Scissors, HeartPulse, Pill, Activity } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Routine Health Checks",
      description: "Comprehensive check ups, picking up problems early to ensure timely treatment and improved outcomes.",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Routine vaccines to protect your pets from deadly diseases.",
    },
    {
      icon: Scissors,
      title: "Surgery",
      description: "From routine procedures to more complex operations. Modern surgical facilities with experienced surgeons.",
    },
    {
      icon: HeartPulse,
      title: "Dental Care",
      description: "Complete dental services including cleaning, extractions, and oral health assessments.",
    },
    {
      icon: Activity,
      title: "Diagnostic Services",
      description: "Advanced diagnostic tools including digital X-ray, ultrasound and in house lab for quick results.",
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
    <section id="services" className="py-10 sm:py-20 bg-[#f9fafb] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1e3a5f]">Our Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive veterinary care for your beloved pets
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#00bcd4] to-[#7ed321] mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-24">
          {[
            {
              src: "/images/practice/almond-vetcare-clinic-entrance-golden-retriever.png",
              alt: "Golden retriever outside the Almond Vet Care clinic entrance",
              objectPosition: "center 45%",
            },
            {
              src: "/images/practice/almond-vet-care-consultation-room.jpg.png",
              alt: "Almond Vet Care consultation room",
              objectPosition: "center",
            },
            {
              src: "/images/patients/vet-examining-dog-almond-vet-care.jpg.png",
              alt: "Vet examining and caring for a dog patient at Almond Vet Care",
              objectPosition: "center",
            },
            {
              src: "/images/team/almond-vet-care-team-photo.jpg.png",
              alt: "Almond Vet Care veterinary team photo",
              objectPosition: "center 35%",
            },
          ].map((image, i) => (
            <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                style={{ objectPosition: image.objectPosition }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-transparent hover:border-[#00bcd4] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group rounded-[2rem] bg-white p-4">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-[#00bcd4]/10 flex items-center justify-center group-hover:bg-[#00bcd4] transition-colors duration-300 mb-6">
                  <service.icon className="w-8 h-8 text-[#00bcd4] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-[#1e3a5f] group-hover:text-[#00bcd4] transition-colors mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Clock, DollarSign, Microscope, Heart } from "lucide-react"

export function WhyChoose() {
  const reasons = [
    {
      icon: Building2,
      title: "Independent Practice",
      description: "Decisions made for your pet, not for profit targets. We're locally owned and operated.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Our vets, our premises, your pet's complete history. Always here when you need us most.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear costs before treatment begins. No hidden fees or surprises.",
    },
    {
      icon: Microscope,
      title: "Modern Equipment",
      description: "Latest diagnostic and surgical technology in our purpose-built facilities.",
    },
    {
      icon: Heart,
      title: "Personal Care",
      description: "We treat your pet like family. Building lasting relationships based on trust.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Almond Vet Care?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Independent veterinary care that puts your pet first
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-2 hover:border-secondary transition-all hover:shadow-lg group rounded-2xl"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0891b2] to-[#10b981] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

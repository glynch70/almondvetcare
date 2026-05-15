import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Building2, Clock, DollarSign, Users, MapPin, Home } from "lucide-react"

export function OurPromise() {
  const promises = [
    {
      icon: Heart,
      title: "Independent & Family-Run",
      description: "Decisions based on your pet's welfare, not corporate targets. We answer to you, not shareholders.",
    },
    {
      icon: Home,
      title: "Family-Owned & Operated",
      description:
        "Founded by Katie and Lisa, two veterinary professionals who believe pets deserve better than corporate veterinary care. Every decision we make is based on what's best for your pet.",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "Brand new, purpose-built clinic with the latest equipment and technology for optimal pet care.",
    },
    {
      icon: Clock,
      title: "24/7 Care",
      description: "Our vets, our premises - no outsourcing emergencies. Your pet's complete history always at hand.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear costs upfront, no hidden fees, flexible payment plans. You'll always know what to expect.",
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "We'll know you and your pet by name. Building lasting relationships is at the heart of what we do.",
    },
    {
      icon: MapPin,
      title: "Local to Perthshire",
      description:
        "Truly local practice serving our community. We live here, we care about our neighbors and their pets.",
    },
  ]

  return (
    <section id="promise" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Almond Vet Care Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            What sets us apart from other veterinary practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {promises.map((promise, index) => (
            <Card
              key={index}
              className="border-2 hover:border-secondary transition-all hover:shadow-lg group rounded-2xl"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors mb-4">
                  <promise.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl">{promise.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{promise.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

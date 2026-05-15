import { Heart, Clock, Shield } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Your pet's wellbeing is our priority",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Evening and weekend appointments",
    },
    {
      icon: Shield,
      title: "Independent Practice",
      description: "Putting animals before profits",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Heart, Calendar, Mail, CreditCard, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EarlyRegistrationBenefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Founding Client Discount",
      description: "20% off first consultation",
      value: "Save £30+",
    },
    {
      icon: Heart,
      title: "Free First Health Check",
      description: "Comprehensive examination for your pet",
      value: "Worth £45",
    },
    {
      icon: CreditCard,
      title: "Special Health Plan Rates",
      description: "Locked in for 12 months",
      value: "Save up to £100/year",
    },
    {
      icon: Calendar,
      title: "Priority Appointment Booking",
      description: "Get the best appointment times",
      value: "VIP access",
    },
    {
      icon: Mail,
      title: "Exclusive Updates",
      description: "Be first to know our opening date",
      value: "Insider access",
    },
    {
      icon: Gift,
      title: "Welcome Gift Pack",
      description: "Special treats and essentials for your pet",
      value: "Worth £25",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#84cc16] to-[#10b981] text-white border-0 text-base px-6 py-2">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Register Now & Save</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-6">
            Exclusive benefits for our founding clients who register before we open
          </p>
          <p className="text-2xl font-bold text-secondary">Total Value: Over £200 in Benefits</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-secondary transition-all hover:shadow-lg group rounded-2xl"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#84cc16]/20 to-[#10b981]/20 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {benefit.value}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-[#84cc16]/30 bg-gradient-to-br from-[#84cc16]/5 to-[#10b981]/5 rounded-2xl">
            <CardContent className="p-8">
              <p className="text-2xl font-bold text-foreground mb-4">Only 150 Founding Client Spaces Remaining</p>
              <p className="text-muted-foreground mb-6">
                Register today to secure your exclusive benefits and be part of our founding community
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#84cc16] to-[#10b981] hover:opacity-90 text-white text-lg h-14 px-10 font-semibold shadow-lg rounded-xl"
              >
                <a href="#contact">Claim Your Founding Client Benefits</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

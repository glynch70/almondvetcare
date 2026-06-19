import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { TrustBadges } from "@/components/trust-badges"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { OurClinic } from "@/components/our-clinic"
import { Emergency } from "@/components/emergency"
import { CarePlan } from "@/components/care-plan"
import { Pricing } from "@/components/pricing"
import { Vidivet } from "@/components/vidivet"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SpanielWithKitten } from "@/components/spaniel-with-kitten"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <About />
        <TrustBadges />
        <Services />
        <Team />
        <OurClinic />
        <Emergency />
        <CarePlan />
        <Pricing />
        <Vidivet />
        <SpanielWithKitten />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

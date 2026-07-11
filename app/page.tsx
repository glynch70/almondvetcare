import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { About } from "@/components/about"
import { CompassionateCareStrip } from "@/components/compassionate-care-strip"
import { Services } from "@/components/services"
import { CarePlan } from "@/components/care-plan"
import { Pricing } from "@/components/pricing"
import { VidiVet } from "@/components/vidivet"
import { Founders } from "@/components/founders"
import { Team } from "@/components/team"
import { OurClinic } from "@/components/our-clinic"
import { Emergency } from "@/components/emergency"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />

        <About />

        <CompassionateCareStrip />

        <Services />

        <Team />

        <CarePlan />

        <Pricing />

        <VidiVet />

        <Founders />

        <OurClinic />

        <Emergency />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

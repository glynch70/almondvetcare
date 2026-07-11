import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted/30 px-4 py-12">
      <Card className="max-w-2xl w-full mx-auto text-center shadow-2xl rounded-2xl border-0 ring-1 ring-gray-100 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#00bcd4] to-[#7ed321]" />
        <CardContent className="pt-12 pb-10 px-6 sm:px-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1e3a5f]">
            Thank You for Getting in Touch!
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
            Your message has been received. A member of the Almond Vet Care team will be in touch shortly.
          </p>

          <div className="bg-gradient-to-r from-[#84cc16]/10 to-[#10b981]/10 border-2 border-[#84cc16]/30 rounded-xl p-6 mb-8 max-w-lg mx-auto">
            <p className="text-base text-gray-700 leading-relaxed">
              We're excited to welcome you and your pet to our practice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[#84cc16] to-[#10b981] hover:opacity-90 text-white rounded-xl h-12 text-base font-semibold shadow-lg"
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl h-12 text-base font-semibold border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4]/10 bg-transparent"
            >
              <Link href="/#about">Learn More About Us</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Have questions? Email us at{" "}
            <a href="mailto:reception@almondvetcare.org" className="text-[#00bcd4] hover:underline font-medium">
              reception@almondvetcare.org
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

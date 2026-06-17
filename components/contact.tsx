"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-[#84cc16] to-[#10b981] text-white border-0 text-xs sm:text-sm px-3 py-1">
            New Patients Welcome
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance px-2 text-[#1e3a5f]">
            Register Your Pet
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Register your pet online and book your first appointment with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="border-2 border-[#84cc16]/30 bg-gradient-to-r from-[#84cc16]/10 to-[#10b981]/10 rounded-2xl shadow-sm">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#84cc16]/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#84cc16]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#1e3a5f]">Now Open</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Register your pet and book your first appointment online today
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0 ring-1 ring-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-[#1e3a5f]">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#00bcd4]" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground leading-relaxed">
                  Lawgrove Place
                  <br />
                  Inveralmond Industrial Estate
                  <br />
                  Perth, PH1 3XQ
                </p>
                <p className="text-sm text-[#7ed321] font-bold mt-3">Opening Spring 2026</p>
                <div className="mt-4 rounded-xl overflow-hidden border-2 border-gray-100 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2230.5!2d-3.468833!3d56.420861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDI1JzE1LjEiTiAzwrAyOCcwNy44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[200px] sm:h-[250px]"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0 ring-1 ring-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-[#1e3a5f]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#00bcd4]" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <a href="tel:01738234811" className="text-[#00bcd4] font-semibold hover:underline">
                  01738 234811
                </a>
                <p className="text-sm text-muted-foreground mt-2">For registration and appointment enquiries</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0 ring-1 ring-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-[#1e3a5f]">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00bcd4]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground break-all">reception@almondvetcare.org</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-0 ring-1 ring-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-[#1e3a5f]">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#00bcd4]" />
                  Opening Hours (from Spring 2026)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-medium">8am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8am - 12pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">9am - 12pm</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Booking & Registration */}
          <Card className="lg:col-span-2 rounded-2xl shadow-xl border-0 ring-1 ring-gray-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#00bcd4] to-[#7ed321]" />
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#1e3a5f]">
                Online Booking &amp; Registration
              </CardTitle>
              <CardDescription className="text-sm sm:text-base mt-2">
                Register your pet and book your first appointment online through our secure booking system. It only
                takes a few minutes to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center gap-6 py-6 sm:py-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00bcd4]/15 to-[#7ed321]/15 flex items-center justify-center">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#00bcd4]" />
              </div>
              <div className="max-w-md">
                <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2">Ready to join Almond Vet Care?</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Use our online portal to register your details, add your pet&apos;s information, and book an
                  appointment all in one place.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00bcd4] to-[#7ed321] hover:from-[#00a5bd] hover:to-[#6bc019] text-white font-bold px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-base sm:text-lg h-12 sm:h-14"
              >
                <a href="https://my.provet.com/almond-vet-care-limited" target="_blank" rel="noopener noreferrer">
                  Book &amp; Register Online
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Prefer to talk to us? Call{" "}
                <a href="tel:01738234811" className="text-[#00bcd4] font-medium hover:underline">
                  01738 234811
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Contact() {
  const [selectedPetType, setSelectedPetType] = useState<string>("")

  const breedOptions = {
    dog: [
      "Labrador Retriever",
      "German Shepherd",
      "Golden Retriever",
      "French Bulldog",
      "Bulldog",
      "Poodle",
      "Beagle",
      "Rottweiler",
      "Yorkshire Terrier",
      "Boxer",
      "Dachshund",
      "Cocker Spaniel",
      "Border Collie",
      "Mixed Breed",
      "Other",
    ],
    cat: [
      "British Shorthair",
      "Persian",
      "Siamese",
      "Maine Coon",
      "Ragdoll",
      "Bengal",
      "Scottish Fold",
      "Sphynx",
      "Domestic Shorthair",
      "Domestic Longhair",
      "Mixed Breed",
      "Other",
    ],
    rabbit: [
      "Dutch",
      "Lionhead",
      "Mini Lop",
      "Netherland Dwarf",
      "Rex",
      "Flemish Giant",
      "English Lop",
      "Angora",
      "Mixed Breed",
      "Other",
    ],
    "guinea-pig": ["Abyssinian", "American", "Peruvian", "Silkie", "Skinny Pig", "Texel", "Mixed Breed", "Other"],
    hamster: ["Syrian", "Dwarf Campbell", "Dwarf Winter White", "Roborovski", "Chinese", "Other"],
    bird: ["Budgerigar", "Cockatiel", "Canary", "Finch", "Lovebird", "Parrot", "Parakeet", "Cockatoo", "Other"],
    other: [],
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-[#84cc16] to-[#10b981] text-white border-0 text-xs sm:text-sm px-3 py-1">
            New Patients Welcome
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance px-2 text-[#1e3a5f]">
            Pre-Register Your Pet
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Join our mailing list to receive updates on our opening and special offers
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="border-2 border-[#84cc16]/30 bg-gradient-to-r from-[#84cc16]/10 to-[#10b981]/10 rounded-2xl shadow-sm">
            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#84cc16]/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#84cc16]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 text-[#1e3a5f]">Opening Spring 2026</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Pre-register now to receive exclusive updates and be notified when we open our doors
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
                <p className="text-muted-foreground font-semibold">[To be confirmed]</p>
                <p className="text-sm text-muted-foreground mt-2">For registration enquiries</p>
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

          {/* Registration Form */}
          <Card className="lg:col-span-2 rounded-2xl shadow-xl border-0 ring-1 ring-gray-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#00bcd4] to-[#7ed321]" />
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#1e3a5f]">Pre-Registration Form</CardTitle>
              <CardDescription className="text-sm sm:text-base mt-2">
                Join our mailing list to receive updates on our opening and special offers. We'll contact you with
                exclusive updates as we approach our Spring 2026 opening.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form method="POST" action="https://formspree.io/f/mqarynkl" className="space-y-4 sm:space-y-6">
                <input type="hidden" name="_subject" value="New Pre-Registration from Almond Vet Care Website" />
                <input type="hidden" name="_next" value="/thank-you" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="01738 123456"
                      className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="town" className="text-sm font-medium text-gray-700">
                      Town/Village *
                    </label>
                    <Input
                      id="town"
                      name="town"
                      required
                      placeholder="Perth"
                      className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 sm:pt-8">
                  <h3 className="font-bold text-lg text-[#1e3a5f] mb-4 sm:mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#7ed321]/20 flex items-center justify-center text-[#7ed321] text-sm">
                      🐾
                    </span>
                    Pet Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="petName" className="text-sm font-medium text-gray-700">
                        Pet's Name *
                      </label>
                      <Input
                        id="petName"
                        name="petName"
                        required
                        placeholder="Max"
                        className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="petType" className="text-sm font-medium text-gray-700">
                        Type of Pet *
                      </label>
                      <select
                        id="petType"
                        name="petType"
                        required
                        value={selectedPetType}
                        onChange={(e) => setSelectedPetType(e.target.value)}
                        className="flex h-11 sm:h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select pet type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="guinea-pig">Guinea Pig</option>
                        <option value="hamster">Hamster</option>
                        <option value="gerbil">Gerbil</option>
                        <option value="bird">Bird</option>
                        <option value="ferret">Ferret</option>
                        <option value="chinchilla">Chinchilla</option>
                        <option value="rat">Rat</option>
                        <option value="mouse">Mouse</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <div className="space-y-2">
                      <label htmlFor="petAge" className="text-sm font-medium text-gray-700">
                        Pet's Age
                      </label>
                      <Input
                        id="petAge"
                        name="petAge"
                        placeholder="e.g., 2 years"
                        className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="petBreed" className="text-sm font-medium text-gray-700">
                        Breed
                      </label>
                      {selectedPetType && breedOptions[selectedPetType as keyof typeof breedOptions]?.length > 0 ? (
                        <select
                          id="petBreed"
                          name="petBreed"
                          className="flex h-11 sm:h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00bcd4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select breed</option>
                          {breedOptions[selectedPetType as keyof typeof breedOptions].map((breed) => (
                            <option key={breed} value={breed}>
                              {breed}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          id="petBreed"
                          name="petBreed"
                          placeholder="e.g., Labrador"
                          className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mt-4 sm:mt-6">
                    <label htmlFor="currentVet" className="text-sm font-medium text-gray-700">
                      Current Veterinary Practice (if any)
                    </label>
                    <Input
                      id="currentVet"
                      name="currentVet"
                      placeholder="Name of current vet"
                      className="rounded-xl h-11 sm:h-12 bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4]"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any questions or special requirements for your pet?"
                    className="rounded-xl bg-gray-50 border-gray-200 focus:border-[#00bcd4] focus:ring-[#00bcd4] resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-[#00bcd4] rounded border-gray-300 focus:ring-[#00bcd4]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to be contacted by Almond Vet Care and consent to my information being stored in accordance
                    with the Privacy Policy. *
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00bcd4] to-[#7ed321] hover:from-[#00a5bd] hover:to-[#6bc019] text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-base sm:text-lg h-12 sm:h-14"
                >
                  Pre-Register Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

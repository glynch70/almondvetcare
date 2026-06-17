import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                <Image
                  src="/images/almond-circle-logo.png"
                  alt="Almond Vet Care"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold">Almond Vet Care</span>
            </div>
            <p className="text-primary-foreground/80 mb-2 leading-relaxed text-sm sm:text-base">
              Independent vets in Perth, Scotland, dedicated to putting animal welfare first. Your trusted partner in
              pet care.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm mb-3 sm:mb-4">
              Founded by Dr Katie Jones & Dr Lisa Elgie
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580661627428"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#emergency"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
              <li>Lawgrove Place</li>
              <li>Inveralmond Industrial Estate</li>
              <li>Perth, PH1 3XQ</li>
              <li className="pt-2">
                <a href="tel:01738234811" className="hover:text-primary-foreground transition-colors">
                  01738 234811
                </a>
              </li>
              <li>reception@almondvetcare.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
            <a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
            <span className="text-primary-foreground/40">|</span>
            <a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="text-center text-xs sm:text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Almond Vet Care. All rights reserved.</p>
            <p className="mt-2">Almond Vet Care is owned and operated by Dr Kate Jones and Dr Lisa Elgie.</p>
            <p className="mt-2">
              Website by{" "}
              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
              >
                www.bear-media.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

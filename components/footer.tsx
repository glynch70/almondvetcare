import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center overflow-hidden shadow-2xl shrink-0">
                <Image
                  src="/images/almond-circle-logo.png"
                  alt="Almond Vet Care"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight">Almond Vet Care</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-lg max-w-md">
              Independent vets in Perth, Scotland, dedicated to putting animal welfare first. Your trusted partner in pet care.
            </p>
            <p className="text-white/50 text-sm mb-8 italic">
              Almond Vet Care is owned and operated by Dr Katie Jones and Dr Lisa Elgie
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61580661627428", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-[#00b4d8] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-xl mb-6 text-[#00b4d8] uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              {[
                { href: "#about", label: "About Us" },
                { href: "#founders", label: "Our Founders" },
                { href: "#team", label: "Our Team" },
                { href: "#services", label: "Services" },
                { href: "#pricing", label: "Pricing" },
                { href: "#emergency", label: "Emergency Care" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] scale-0 group-hover:scale-100 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-xl mb-6 text-[#00b4d8] uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4 text-white/70 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#84cc16] font-bold mt-1">A:</span>
                Lawgrove Place<br />Inveralmond Industrial Estate<br />Perth, PH1 3XQ
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#84cc16] font-bold">E:</span>
                <a href="mailto:reception@almondvetcare.org" className="hover:text-white transition-colors">reception@almondvetcare.org</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#84cc16] font-bold">T:</span>
                <a href="tel:01738234811" className="hover:text-white transition-colors">01738 234811</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#84cc16] font-bold mt-1">H:</span>
                <span>
                  Mon-Fri: 8am-7pm<br />
                  Sat: 8am-12pm<br />
                  Sun: 9am-12pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium uppercase tracking-widest">
            <a href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/cookies" className="text-white/40 hover:text-white transition-colors">Cookie Policy</a>
            <a href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="text-center text-sm text-white/30">
            <p>&copy; {new Date().getFullYear()} Almond Vet Care. All rights reserved.</p>
            <p className="mt-4">
              Website by{" "}
              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00b4d8] hover:text-white transition-colors font-bold underline underline-offset-4"
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

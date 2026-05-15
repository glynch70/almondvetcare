import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Almond Vet Care",
  description: "Privacy policy for Almond Vet Care - how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Almond Vet Care ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our veterinary services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Personal Information</h3>
              <p className="leading-relaxed">We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Name and contact details (email address, phone number, postal address)</li>
                <li>Pet information (name, species, breed, age, medical history)</li>
                <li>Appointment details and preferences</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Automatically Collected Information</h3>
              <p className="leading-relaxed">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Provide veterinary services and care for your pets</li>
                <li>Schedule and manage appointments</li>
                <li>Process payments and maintain billing records</li>
                <li>Send appointment reminders and follow-up care instructions</li>
                <li>Communicate about our services and promotions (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and maintain records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="leading-relaxed">Under GDPR, we process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  <strong>Contractual necessity:</strong> To provide veterinary services you have requested
                </li>
                <li>
                  <strong>Legal obligation:</strong> To comply with veterinary practice regulations and record-keeping
                  requirements
                </li>
                <li>
                  <strong>Legitimate interests:</strong> To improve our services and communicate relevant information
                </li>
                <li>
                  <strong>Consent:</strong> For marketing communications (which you can withdraw at any time)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="leading-relaxed">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Other veterinary professionals involved in your pet's care</li>
                <li>Laboratories and diagnostic services</li>
                <li>Pet insurance companies (with your authorization)</li>
                <li>Payment processors for billing purposes</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information and pet medical records for as long as required by veterinary
                practice regulations (typically 7 years from the last consultation) or as necessary to provide our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Your Rights</h2>
              <p className="leading-relaxed">Under GDPR and UK data protection law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Please see our{" "}
                <a href="/cookies" className="text-accent hover:underline">
                  Cookie Policy
                </a>{" "}
                for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg mt-4">
                <p className="leading-relaxed">
                  <strong>Almond Vet Care</strong>
                  <br />
                  Lawgrove Place, Inveralmond Industrial Estate
                  <br />
                  Perth, PH1 3XQ
                  <br />
                  Email: reception@almondvetcare.org
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

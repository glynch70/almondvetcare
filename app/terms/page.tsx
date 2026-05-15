import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Almond Vet Care",
  description: "Terms and conditions for using Almond Vet Care services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Almond Vet Care. By using our veterinary services or website, you agree to be bound by these
                Terms of Service. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Services Provided</h2>
              <p className="leading-relaxed">
                Almond Vet Care provides veterinary medical services for companion animals. Our services include, but
                are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Routine health examinations and preventive care</li>
                <li>Vaccinations and parasite control</li>
                <li>Diagnostic services and laboratory testing</li>
                <li>Surgical procedures</li>
                <li>Emergency and urgent care</li>
                <li>Dental care</li>
                <li>End-of-life care</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Appointments and Cancellations</h2>
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Booking</h3>
              <p className="leading-relaxed">
                Appointments can be made by phone, email, or through our website. We will confirm your appointment and
                provide any necessary preparation instructions.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Cancellations</h3>
              <p className="leading-relaxed">
                Please provide at least 24 hours notice if you need to cancel or reschedule an appointment. Late
                cancellations or missed appointments may be subject to a cancellation fee.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Late Arrivals</h3>
              <p className="leading-relaxed">
                If you arrive more than 15 minutes late for your appointment, we may need to reschedule to ensure all
                clients receive adequate care time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Fees and Payment</h2>
              <p className="leading-relaxed">Payment is due at the time services are rendered unless:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>You have arranged payment through pet insurance (with prior authorization)</li>
                <li>You have made alternative payment arrangements with our practice</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We accept payment by cash, debit card, credit card, and bank transfer. Estimates for services will be
                provided where possible, but final costs may vary based on your pet's needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Client Responsibilities</h2>
              <p className="leading-relaxed">As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Provide accurate information about your pet's health history and current condition</li>
                <li>Follow treatment instructions and administer medications as prescribed</li>
                <li>Keep your pet under control during visits</li>
                <li>Inform us of any behavioral issues that may affect handling</li>
                <li>Attend follow-up appointments as recommended</li>
                <li>Ensure your contact information is current</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Veterinary Care Standards</h2>
              <p className="leading-relaxed">
                We are committed to providing high-quality veterinary care in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Royal College of Veterinary Surgeons (RCVS) Code of Professional Conduct</li>
                <li>Current veterinary best practices and guidelines</li>
                <li>Animal welfare legislation</li>
              </ul>
              <p className="leading-relaxed mt-4">
                While we strive for the best outcomes, we cannot guarantee results as veterinary medicine involves
                inherent uncertainties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Emergency Care</h2>
              <p className="leading-relaxed">
                For emergencies outside our regular hours, we will provide information about emergency veterinary
                services available in the area. We make every effort to accommodate urgent cases during practice hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Medical Records</h2>
              <p className="leading-relaxed">
                We maintain comprehensive medical records for all patients. You have the right to access your pet's
                records. We may charge a reasonable fee for copies of records. Records may be transferred to another
                veterinary practice upon your written request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Liability and Insurance</h2>
              <p className="leading-relaxed">
                Almond Vet Care maintains professional indemnity insurance. Our liability is limited to the extent
                permitted by law. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Complications arising from pre-existing conditions not disclosed to us</li>
                <li>Outcomes when you do not follow our treatment recommendations</li>
                <li>Side effects from medications or treatments that are within normal expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Complaints and Feedback</h2>
              <p className="leading-relaxed">
                We welcome feedback about our services. If you have a concern or complaint, please contact us directly
                so we can address it promptly. If you are not satisfied with our response, you may contact the Royal
                College of Veterinary Surgeons (RCVS).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Privacy</h2>
              <p className="leading-relaxed">
                Your personal information and your pet's medical records are handled in accordance with our{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">12. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to update these Terms of Service. Changes will be posted on our website with an
                updated revision date. Continued use of our services constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">13. Contact Information</h2>
              <p className="leading-relaxed">If you have questions about these Terms of Service, please contact us:</p>
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

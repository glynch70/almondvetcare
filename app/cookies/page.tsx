import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy | Almond Vet Care",
  description: "Cookie policy for Almond Vet Care - how we use cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="leading-relaxed">We use cookies for the following purposes:</p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Essential Cookies</h3>
              <p className="leading-relaxed">
                These cookies are necessary for the website to function properly. They enable basic functions like page
                navigation, secure access, and form submissions.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Performance Cookies</h3>
              <p className="leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting anonymous
                information about pages visited, time spent on the site, and any errors encountered.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Functionality Cookies</h3>
              <p className="leading-relaxed">
                These cookies allow the website to remember choices you make (such as your language preference) and
                provide enhanced, personalized features.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Marketing Cookies</h3>
              <p className="leading-relaxed">
                These cookies track your online activity to help us deliver more relevant advertising and measure the
                effectiveness of our marketing campaigns. We only use these with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-4">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Cookie Name</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                      <th className="border border-border p-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Session Cookie</td>
                      <td className="border border-border p-3">Maintains your session while browsing</td>
                      <td className="border border-border p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Preference Cookie</td>
                      <td className="border border-border p-3">Remembers your settings and preferences</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Analytics Cookie</td>
                      <td className="border border-border p-3">Tracks website usage and performance</td>
                      <td className="border border-border p-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Third-Party Cookies</h2>
              <p className="leading-relaxed">
                We may use third-party services that set cookies on our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Google Analytics - to analyze website traffic and user behavior</li>
                <li>Social media platforms - to enable social sharing features</li>
                <li>Map services - to display our location</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies, and we have no control over their cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Managing Cookies</h2>
              <p className="leading-relaxed">You can control and manage cookies in several ways:</p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Browser Settings</h3>
              <p className="leading-relaxed">
                Most browsers allow you to view, manage, and delete cookies. You can usually find these options in your
                browser's settings or preferences menu. Please note that blocking all cookies may affect your experience
                on our website.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Opt-Out Tools</h3>
              <p className="leading-relaxed">You can opt out of specific types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>
                  Google Analytics:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Changes to This Cookie Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
                business practices. We will notify you of any significant changes by posting the new policy on this page
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">If you have questions about our use of cookies, please contact us:</p>
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

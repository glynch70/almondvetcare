import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "When will Almond Vet Care open?",
      answer:
        "We're opening in Spring 2026! Register now as a founding client to receive exclusive updates and be notified of our exact opening date. You'll also receive over £200 in founding client benefits.",
    },
    {
      question: "How do I register as a founding client?",
      answer:
        "Simply fill out the registration form on this page with your details and your pet's information. We'll contact you with exclusive updates as we approach our opening date, and you'll automatically receive all founding client benefits.",
    },
    {
      question: "What are the founding client benefits?",
      answer:
        "Founding clients receive 20% off their first consultation, a free first health check (worth £45), special health plan rates locked in for 12 months, priority appointment booking, exclusive updates, and a welcome gift pack for your pet. Total value over £200!",
    },
    {
      question: "Can I sign up for a health plan now?",
      answer:
        "Yes! You can register for a health plan now, but payments won't start until we open in Spring 2026. By signing up early, you'll lock in founding client rates and save up to 20% compared to paying individually.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Perth, Crieff, Auchterarder, Pitlochry, Kinross, Dunkeld, Blairgowrie, and surrounding Perthshire villages. We're centrally located to provide convenient access for pet owners across the region.",
    },
    {
      question: "Will you offer 24/7 emergency care?",
      answer:
        "Yes! Unlike many practices that outsource emergency care, our own vets will be available 24/7 at our premises. Your pet's complete medical history will always be at hand when emergencies happen.",
    },
    {
      question: "Are you part of a corporate chain?",
      answer:
        "No, we're proudly independent and family-run. We're not part of any corporate chain, which means our decisions are based on your pet's welfare, not corporate targets. We answer to you and your pets, not shareholders.",
    },
    {
      question: "Can I transfer my pet's records from my current vet?",
      answer:
        "When you register, let us know your current veterinary practice and we'll arrange to transfer your pet's medical records. This ensures continuity of care and that we have your pet's complete history from day one.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring any vaccination certificates, current medications, and any relevant medical information. If you've registered as a founding client, we'll already have your pet's basic information and transferred records ready.",
    },
    {
      question: "How many founding client spaces are available?",
      answer:
        "We have limited founding client spaces available to ensure we can provide the personal, attentive service we promise. Register soon to secure your place and exclusive benefits before spaces fill up.",
    },
  ]

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about registering and our Spring 2026 opening
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

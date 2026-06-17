export function OurStory() {
  return (
    <section id="story" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why We're Starting Almond Vet Care</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Dr Katie Jones and Dr Lisa Elgie have worked in veterinary medicine for many years. Throughout their careers,
              they've seen firsthand how corporate ownership can impact the quality and personal nature of pet care.
            </p>

            <p>
              They founded Almond Vet Care to bring back what matters most: independent vets who make decisions based on
              animal welfare, not profit targets. A practice where your pet is known by name, where you see familiar
              faces, and where care is always the priority.
            </p>

            <p className="font-semibold text-foreground">
              Opening in Perthshire in 2026, Almond Vet Care represents a return to traditional veterinary values
              combined with modern facilities and the latest medical technology.
            </p>
            <p className="text-secondary font-semibold">Construction begins January 2025. Grand Opening Spring 2026.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-2xl border-2 border-border">
              <div className="text-4xl font-bold text-secondary mb-2">Independent</div>
              <p className="text-sm text-muted-foreground">Not part of a corporate chain</p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl border-2 border-border">
              <div className="text-4xl font-bold text-secondary mb-2">Local</div>
              <p className="text-sm text-muted-foreground">Serving the Perthshire community</p>
            </div>
            <div className="text-center p-6 bg-background rounded-2xl border-2 border-border">
              <div className="text-4xl font-bold text-secondary mb-2">Modern</div>
              <p className="text-sm text-muted-foreground">Latest facilities and technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

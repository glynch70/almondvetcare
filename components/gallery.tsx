"use client"

export function Gallery() {
  const images = [
    {
      src: "/happy-dog-at-veterinary-clinic.jpg",
      alt: "Happy dog patient",
    },
    {
      src: "/cat-being-examined-by-vet.jpg",
      alt: "Cat examination",
    },
    {
      src: "/modern-veterinary-examination-room.jpg",
      alt: "Examination room",
    },
    {
      src: "/veterinary-surgical-suite.jpg",
      alt: "Surgical suite",
    },
    {
      src: "/veterinary-waiting-room-with-pets.jpg",
      alt: "Waiting area",
    },
    {
      src: "/vet-with-puppy-and-kitten.jpg",
      alt: "Puppy and kitten care",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Clinic</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a look at our modern facilities and happy patients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

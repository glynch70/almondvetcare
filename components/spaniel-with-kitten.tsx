export function SpanielWithKitten() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/images/spaniel-with-kitten.jpeg"
              alt="Springer spaniel with kitten - caring for all your pets"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/70 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 text-balance drop-shadow-lg">
                Caring For All Your Pets
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-md">
                Dogs, cats, and small animals all receive compassionate, expert care
              </p>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}

export function Founders() {
  return (
    <section id="founders" className="py-10 sm:py-20 bg-[#f9fafb] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#1e3a5f]">
            Meet the Founders
          </h2>
          <div className="max-w-4xl mx-auto px-4 mt-6 sm:mt-8 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                We are Dr Katie and Dr Lisa, two passionate and experienced veterinarians based in Perth. Originally from Glasgow and friends since the age of 15, we’ve built our lives here in Perth alongside our families and have grown to love the strong sense of community the area offers.
              </p>
              <p>
                After graduating Katie in 2015 and Lisa in 2016, we both shared the same ambition to create an independent veterinary practice focused on exceptional care for small animals and a more personal experience for local pet owners.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 mb-8 px-4">
            {/* Dr Katie Jones */}
            <div className="flex flex-col items-center group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-[#00bcd4] transition-all duration-300 mb-6">
                <img
                  src="/images/almond-20vet-20katie.png"
                  alt="Dr Katie Jones - Co-Founder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-1">Dr Katie Jones</h4>
              <p className="text-sm sm:text-base text-[#7ed321] font-bold uppercase tracking-wider">
                Co-Founder & Veterinary Surgeon
              </p>
            </div>

            {/* Dr Lisa Elgie */}
            <div className="flex flex-col items-center group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-[#00bcd4] transition-all duration-300 mb-6">
                <img
                  src="/images/lisa.png"
                  alt="Dr Lisa Elgie - Co-Founder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-1">Dr Lisa Elgie</h4>
              <p className="text-sm sm:text-base text-[#7ed321] font-bold uppercase tracking-wider">
                Co-Founder & Veterinary Surgeon
              </p>
            </div>
          </div>
          
          <div className="w-20 h-1.5 bg-[#7ed321] mx-auto mt-12 rounded-full" />
        </div>
      </div>
    </section>
  )
}

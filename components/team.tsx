export function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 scroll-mt-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance text-[#1e3a5f] px-4">
            Meet the Team
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-[#7ed321] mx-auto mt-6 sm:mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Katie Jones */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#00bcd4] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 sm:mb-6">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src="/images/almond-20vet-20katie.png"
                  alt="Katie Jones"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#1e3a5f]">Katie Jones</h4>
              <p className="text-[#7ed321] font-bold text-center text-sm sm:text-base">
                Co-Founder & Veterinary Surgeon
              </p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Katie is a dedicated veterinarian with 10 years of experience, graduating from the University of Glasgow
              before beginning her career in mixed practice. She now focuses exclusively on small animal care, where her
              lifelong passion for animals truly shines.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
              Outside the clinic, Katie's life is just as full of furry (and hooved!) friends. She keeps busy with her
              family, her Labrador Wally, her Spaniel Aggie, a very fluffy Elsie cat and six much-loved horses. Her
              deep-rooted love for animals and commitment to their wellbeing guide everything she does.
            </p>
          </div>

          {/* Lisa Elgie */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#00bcd4] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-6">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src="/images/lisa.png"
                  alt="Lisa Elgie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#1e3a5f]">Lisa Elgie</h4>
              <p className="text-[#7ed321] font-bold text-center text-sm sm:text-base">
                Co-Founder & Veterinary Surgeon
              </p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Lisa is a small animal veterinarian with nine years of experience, graduating from the University of
              Edinburgh before beginning her career in mixed practice in Highland Perthshire. She soon discovered her
              passion for small animal medicine and has focused on it ever since. Becoming a vet has been her dream
              since childhood, and that dedication continues to shape her compassionate, patient-centered approach.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
              Outside of work, Lisa enjoys an active and animal-filled life with her husband, their Cocker Spaniel
              Flynn, and two cats, Indi and Saffy. When she's not with her pets, you'll often find her training for
              long-distance running events.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Claire */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#00bcd4] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 sm:mb-6">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src="/images/nurse-claire.png"
                  alt="Claire, Head Nurse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#1e3a5f]">Claire</h4>
              <p className="text-[#7ed321] font-bold text-center text-sm sm:text-base">Head Nurse</p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Claire qualified as a Registered Veterinary Nurse in 2014 and has since gone on to complete her
              Certificate in Emergency and Critical Care. She is also a Clinical Coach, supporting and training student
              veterinary nurses throughout their studies and early careers.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
              Claire is passionate about sharing her knowledge and experience with the wider team and is always on hand
              to offer guidance and support when needed. Although she enjoys all aspects of veterinary nursing, Claire
              has a particular interest in inpatient care, post-operative nursing, and emergency and critical care.
              Outside of work, Claire enjoys reading, spending time with family and friends, and going on adventures
              with her Maremma Sheepdog, Ivar.
            </p>
          </div>

          {/* Katie - Veterinary Nurse */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#00bcd4] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 sm:mb-6">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:border-[#00bcd4] transition-colors duration-300">
                <img
                  src="/images/nurse-katie.png"
                  alt="Katie, Veterinary Nurse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-center mb-1 text-[#1e3a5f]">Katie</h4>
              <p className="text-[#7ed321] font-bold text-center text-sm sm:text-base">Veterinary Nurse</p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Katie is a brilliant nurse with a real passion for patient care and always goes above and beyond to make
              sure every pet feels safe, comfortable, and well looked after during their visit. She has a particular
              soft spot for feline patients and has the patience of an absolute saint — especially when it comes to
              nervous pets who need a little extra time, reassurance, and gentle handling.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
              Outside of work Katie enjoys spending time with her cat Blousey, going to the theatre and keeping fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

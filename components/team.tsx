"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Dr Katie Jones",
    role: "Co-Founder & Veterinary Surgeon",
    image: "/images/patients/almond-vet-care-perth-practice-dog.jpg.png",
    imageAlt: "Dr Katie Jones holding a dog patient at Almond Vet Care",
    objectPosition: "center 35%",
    bio: "Katie graduated from the University of Glasgow in 2015 and began her career in mixed practice before focusing fully on small animal care. A dedicated veterinarian with a lifelong passion for animals, she brings warmth, experience and practical clinical knowledge to the practice. Outside the clinic, Katie keeps busy with her family, her Labrador Wally, Spaniel Aggie, Elsie the cat and six much-loved horses."
  },
  {
    name: "Dr Lisa Elgie",
    role: "Co-Founder & Veterinary Surgeon",
    image: "/images/lisa.png",
    imageAlt: "Dr Lisa Elgie - Co-Founder and Veterinary Surgeon",
    objectPosition: "center",
    bio: "Lisa graduated from the University of Edinburgh in 2016 and began her career in mixed practice before moving into small animal work. Becoming a vet was her dream from childhood, and that dedication shapes her compassionate, patient-centred approach. Away from work, Lisa enjoys life with her husband, Cocker Spaniel Flynn, and cats Indi and Saffy, as well as training for long-distance running events."
  },
  {
    name: "Claire",
    role: "Head Nurse",
    image: "/images/patients/almond-vet-care-veterinary-nurse-with-dog.jpg.png",
    imageAlt: "Claire holding a dog patient at Almond Vet Care",
    objectPosition: "center 30%",
    bio: "Claire qualified as a Registered Veterinary Nurse in 2014 and has completed her Certificate in Emergency and Critical Care. She is also a Clinical Coach, supporting student veterinary nurses through their studies and early careers. Claire enjoys all aspects of nursing, with particular interests in inpatient care, post-operative nursing and emergency care. Outside work, she enjoys reading, time with family and friends, and adventures with Ivar."
  },
  {
    name: "Katie",
    role: "Veterinary Nurse",
    image: "/images/patients/vet-checking-bulldog-patient.jpg.png",
    imageAlt: "Katie caring for a bulldog patient at Almond Vet Care",
    objectPosition: "center 25%",
    bio: "Katie is a brilliant nurse with a real passion for patient care, going above and beyond to help every pet feel safe, comfortable and well looked after. She has a particular soft spot for feline patients and brings patience and gentle handling to nervous pets who need extra reassurance. Outside work, Katie enjoys spending time with her cat Blousey, going to the theatre and keeping fit."
  }
]

export function Team() {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollTeam = (direction: "previous" | "next") => {
    const slider = sliderRef.current
    if (!slider) return
    const cardWidth = slider.querySelector("article")?.clientWidth ?? 320
    slider.scrollBy({
      left: direction === "next" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    })
  }

  return (
    <section id="team" className="py-10 sm:py-14 bg-[#f9fafb] scroll-mt-20 px-5 sm:px-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1e3a5f]">Meet the Team</h2>
            <div className="w-20 h-1.5 bg-[#7ed321] mx-auto sm:mx-0 mt-6 rounded-full" />
          </div>
          <div className="hidden md:flex gap-3">
            <button
              type="button"
              aria-label="Previous team member"
              onClick={() => scrollTeam("previous")}
              className="w-12 h-12 rounded-full bg-white text-[#1e3a5f] shadow-lg flex items-center justify-center hover:text-[#00b4d8] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              aria-label="Next team member"
              onClick={() => scrollTeam("next")}
              className="w-12 h-12 rounded-full bg-white text-[#1e3a5f] shadow-lg flex items-center justify-center hover:text-[#00b4d8] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 max-w-7xl sm:mx-auto sm:px-0"
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="snap-start shrink-0 w-[82vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] bg-white rounded-[2rem] p-5 sm:p-6 border-2 border-gray-100 shadow-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-md mb-6 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-1">{member.name}</h3>
              <p className="text-[#7ed321] font-bold text-sm uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-0">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

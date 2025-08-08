"use client";



function OurStory(){
    return(
       <section className="py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Our Philosophy: Smart Coverage. Real Support.
                    Rooted in Integrity, Growing with You.
        </h2>
        <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
          Much like our namesake “Zure” — suggesting trust and assurance — our philosophy is simple: make insurance accessible, human, and effective.

            ⸻

            Our Commitment
                •	Authentic Support – We don’t sell policies, we build relationships.
                •	Clear Communication – No jargon. Just clear, direct information.
                •	Flexible Plans – Coverage that evolves as your needs change.
                •	Fast, Fair Claims – We prioritize ease, speed, and fairness in every case.

            ⸻

            What Makes ZureInsurance Different
        </p>
    
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart h-6 lg:h-8 w-6 lg:w-8 text-amber-600"
            aria-hidden="true"
            role="img"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-base lg:text-lg font-semibold text-gray-900">
            Family-owned with strong roots since 2011
          </span>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;h=500&amp;fit=crop"
          alt="TrueOak Insurance history"
          className="rounded-2xl shadow-xl w-full"
        />
        <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-amber-600 text-white p-4 lg:p-6 rounded-xl">
          <div className="text-xl lg:text-2xl font-bold">A+ Rating</div>
          <div className="text-amber-600 text-sm lg:text-base">Better Business Bureau</div>
        </div>
      </div>
    </div>
  </div>
       </section>

    )
}

export default OurStory
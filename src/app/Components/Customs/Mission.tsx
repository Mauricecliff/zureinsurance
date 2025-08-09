"use client";


function Mission(){
    return(
        <section className="py-16 lg:py-20 bg-amber-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Mission */}
      <div className="text-center lg:text-left">
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
          className="lucide lucide-target h-12 lg:h-16 w-12 lg:w-16 text-emerald-600 mx-auto lg:mx-0 mb-6"
          aria-hidden="true"
          role="img"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg lg:text-xl text-white leading-relaxed">
          To make insurance straightforward and supportive right from day one. We want every person we work with to feel understood, valued, and confidently protected.”
            We&apos;re not here to just grow fast we&apos;re here to grow well, maintaining trust as our foundation.
        </p>
      </div>

      {/* Vision */}
      <div className="text-center lg:text-left">
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
          className="lucide lucide-trending-up h-12 lg:h-16 w-12 lg:w-16 text-emerald-600 mx-auto lg:mx-0 mb-6"
          aria-hidden="true"
          role="img"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg lg:text-xl text-white leading-relaxed">
        Ready to Protect What Matters?    
        Whether you&apos;re safeguarding your first home, building a startup, or ensuring peace of mind for your family ZureInsurance offers clear, accessible solutions crafted for you. Join us, and let&apos;s build real coverage you can trust
        </p>
      </div>
    </div>
  </div>
</section>

    )
}


export default Mission
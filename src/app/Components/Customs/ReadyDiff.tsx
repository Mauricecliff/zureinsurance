"use client";

function ReadyDiff(){
    return(
       <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TrueOak Insurance?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We believe in investing in our people with strong roots in care and commitment. When you join Zure Insurance, you&apos;re not just getting a job—you&apos;re joining a family that provides true protection for your career growth.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-6 w-6 text-white" aria-hidden="true">
              <line x1="12" x2="12" y1="2" y2="22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Competitive Compensation</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Industry-leading salaries with performance-based bonuses and commission opportunities that reward excellence.
        </p>
      </div>

      {/* Repeat pattern with other cards - colors swapped */}
      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-white" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Comprehensive Benefits</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Full health, dental, vision insurance plus life insurance and disability coverage for true protection.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-6 w-6 text-white" aria-hidden="true">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Professional Development</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Continuing education opportunities, certifications, and leadership training programs with strong foundations.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6 text-white" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Flexible Schedule</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Work-life balance with flexible hours, remote work options, and generous PTO rooted in respect for your time.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee h-6 w-6 text-white" aria-hidden="true">
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" x2="6" y1="2" y2="4" />
              <line x1="10" x2="10" y1="2" y2="4" />
              <line x1="14" x2="14" y1="2" y2="4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Great Work Environment</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Modern offices, collaborative spaces, and a supportive team culture built on strong relationships.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
        <div className="flex items-center mb-6">
          <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift h-6 w-6 text-white" aria-hidden="true">
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <path d="M12 8v13" />
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 ml-4">Additional Perks</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Employee discounts, wellness programs, company events, and referral bonuses that show we care.
        </p>
      </div>
    </div>

    {/* Banner Section */}
    <div className="mt-16 relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-amber-600">
        {/* <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
          alt="Team celebrating success"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-amber-800 opacity-90" />
      </div>
      <div className="relative p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
        <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
          Join our mission to provide true protection with strong roots while building a rewarding career that makes a meaningful impact in people&apos;s lives.
        </p>
        <button className="bg-emerald-900 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
          View Open Positions
        </button>
      </div>
    </div>
  </div>
</section>

    )
}


export default ReadyDiff
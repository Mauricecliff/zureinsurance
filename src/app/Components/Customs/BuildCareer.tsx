"use client"

function BuildCareers(){
    return(
       <section className="relative bg-gradient-to-br from-amber-600 via-amber-600 to-amber-600 text-white py-20 overflow-hidden">
  <div className="absolute inset-0 bg-amber-600">
    {/* <img
      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      alt="Professional team collaboration"
      className="w-full h-full object-cover opacity-20"
    /> */}
    <div className="absolute inset-0 bg-amber-800 opacity-80"></div>
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6">
        Build Your Career at
        <span className="text-emerald-400 block">TrueOak Insurance</span>
      </h1>
      <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
        Join a team that's passionate about providing true protection with strong roots in community service.
        We're looking for dedicated professionals who share our commitment to excellence and genuine care.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Strong Team */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
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
            className="lucide lucide-users h-10 w-10 text-emerald-400"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Strong Team</h3>
        <p className="text-amber-100 text-sm">
          Work alongside talented professionals who support each other's growth and success.
        </p>
      </div>

      {/* Career Growth */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
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
            className="lucide lucide-trending-up h-10 w-10 text-emerald-400"
            aria-hidden="true"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
        <p className="text-amber-100 text-sm">
          Advance your career with comprehensive training and development programs rooted in excellence.
        </p>
      </div>

      {/* Recognition */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
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
            className="lucide lucide-award h-10 w-10 text-emerald-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Recognition</h3>
        <p className="text-amber-100 text-sm">
          Your hard work and achievements are recognized and rewarded in meaningful ways.
        </p>
      </div>

      {/* Work-Life Balance */}
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
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
            className="lucide lucide-heart h-10 w-10 text-emerald-400"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
        <p className="text-amber-100 text-sm">
          Enjoy flexible schedules and comprehensive benefits that support your life outside work.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}


export default BuildCareers
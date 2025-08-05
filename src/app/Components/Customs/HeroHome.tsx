function HeroHome() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
          alt="Happy family in their home"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-emerald-900 opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strong Roots.
              <span className="text-amber-400 block">True Protection.</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed">
              For over 25 years, TrueOak Insurance has been deeply rooted in our
              communities, providing unwavering protection and genuine peace of
              mind for families and businesses across America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer">
                Get Your Quote
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
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                Join Our Team
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                className="lucide lucide-shield h-8 sm:h-12 w-8 sm:w-12 text-amber-400 mb-3 sm:mb-4"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Deep-Rooted Reliability
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                Built on a foundation of trust, integrity, and unwavering
                commitment to our customers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                className="lucide lucide-users h-8 sm:h-12 w-8 sm:w-12 text-amber-400 mb-3 sm:mb-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Community-Centered Service
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                Rooted in Montana values, serving communities nationwide with
                personalized care.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                className="lucide lucide-award h-8 sm:h-12 w-8 sm:w-12 text-amber-400 mb-3 sm:mb-4"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Proven Protection
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                True protection that stands the test of time, backed by decades
                of trusted service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

import Link from "next/link";

function HeroHome() {



  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-amber-600">
        {/* <img
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
          alt="Happy family in their home"
          className="w-full h-full object-cover opacity-20"
        /> */}
        <div className="absolute inset-0 bg-amber-800 opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dependable Coverage.
              {/* <span className="text-amber-400 block">True Protection.</span> */}
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed">
              Built on a foundation of honesty, transparency, and commitment, ZureInsurance delivers smart protection with a human touch. You can count on us to be here when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer">
                <Link href="/contact" className="flex items-center gap-1">
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
                
                </Link>
               
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                <Link href="/careers" >
                    Join Our Team
                </Link>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                People First Service
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                We&apos;re not a faceless corporation we&apos;re a community minded team focused on building lasting relationships. Every policy we offer is tailored with care, because we know our customers by name, not by number.
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
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Trustworthy Protection
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base">
                We may be a startup, but our dedication is tested daily and proven through real time support, responsive claims, and client-centered policies that are built to last. You&apos;re not just covered you&apos;re supported.
              </p>
            </div>
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

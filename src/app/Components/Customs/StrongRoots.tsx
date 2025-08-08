"use client";

import Link from "next/link";

function StrongRoots() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800&amp;h=600&amp;fit=crop"
                alt="Professional insurance team"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">
                  14
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Years of Strong Roots
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Strong Roots. True Protection.
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2011 in the heart of Grand Rapids, Michigan, ZureInsurance began with one mission: to make reliable, affordable insurance accessible to everyone — no matter their background or budget. From humble beginnings, we’ve grown into a modern provider trusted by individuals, families, and small businesses across the country.
            </p>
            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              Our foundation is grounded in three simple but powerful values: transparency, care, and protection that works when you need it most.
              Just like the name “Zure” represents assurance and peace of mind, we’ve remained true to our roots — serving with integrity, growing through trust, and staying committed to protecting what you’ve worked so hard to build.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[
                {
                  title: "People-First Service",
                  desc: "We’re not a faceless corporation — we’re a community-minded team focused on building lasting relationships. Every policy we offer is tailored with care, because we know our customers by name, not by number.",
                  icon: (
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  ),
                },
                {
                  title: "Trustworthy Protection",
                  desc: "WWe may be a startup, but our dedication is tested daily and proven through real-time support, responsive claims, and client-centered policies that are built to last. You’re not just covered — you’re supported.e deliver genuine excellence in every interaction, from customer service to claims.",
                  icon: (
                    <>
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </>
                  ),
                },
                // {
                //   title: "Community Roots",
                //   desc: "Deeply connected to the communities we serve, strengthening bonds that last generations.",
                //   icon: (
                //     <>
                //       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                //       <circle cx="9" cy="7" r="4"></circle>
                //       <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                //       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                //     </>
                //   ),
                // },
                // {
                //   title: "Always Protected",
                //   desc: "True protection means being there 24/7, providing security when you need it most.",
                //   icon: (
                //     <>
                //       <circle cx="12" cy="12" r="10"></circle>
                //       <polyline points="12 6 12 12 16 14"></polyline>
                //     </>
                //   ),
                // },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-amber-600 p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4">
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
                      className="h-4 w-4 sm:h-6 sm:w-6 text-white"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              <Link href="/about" >
                Discover Our Story
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrongRoots;

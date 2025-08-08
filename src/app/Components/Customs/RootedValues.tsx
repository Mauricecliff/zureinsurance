"use client";



function RootedValues(){
    return(
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Our Deep-Rooted Values
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    These values are the strong roots that anchor everything we do and shape how we provide true protection every day.
                </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-amber-600 p-3 lg:p-4 rounded-full w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
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
                        className="lucide lucide-shield h-6 lg:h-8 w-6 lg:w-8 text-white"
                        aria-hidden="true"
                        role="img"
                    >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                    Deep-Rooted Trust
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    We build lasting relationships based on honesty, transparency, and reliability in everything we do.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-amber-600 p-3 lg:p-4 rounded-full w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
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
                        className="lucide lucide-award h-6 lg:h-8 w-6 lg:w-8 text-white"
                        aria-hidden="true"
                        role="img"
                    >
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                    Trustworthy Protection
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    We may be a startup, but our dedication is tested daily and proven through real-time support, responsive claims, and client-centered policies that are built to last. You’re not just covered — you’re supported.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-amber-600 p-3 lg:p-4 rounded-full w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
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
                        className="lucide lucide-users h-6 lg:h-8 w-6 lg:w-8 text-white"
                        aria-hidden="true"
                        role="img"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                        People-First Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        We’re not a faceless corporation — we’re a community-minded team focused on building lasting relationships. Every policy we offer is tailored with care, because we know our customers by name, not by number.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-amber-600 p-3 lg:p-4 rounded-full w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
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
                        className="lucide lucide-clock h-6 lg:h-8 w-6 lg:w-8 text-white"
                        aria-hidden="true"
                        role="img"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">
                    Always Protected
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    24/7 claims support and customer service—true protection means we're always here for you.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default RootedValues
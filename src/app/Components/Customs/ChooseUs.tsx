"use client";

function ChooseUs() {   
    return(
    <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zure Insurance?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re more than just an insurance provider we&apos;re your trusted partner in true protection, rooted in strong values.
            </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="text-center">
                <div className="bg-amber-600 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center">
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
                    className="lucide lucide-shield h-8 w-8 sm:h-10 sm:w-10 text-white"
                    aria-label="Shield Icon"
                >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Comprehensive True Protection
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our policies are designed with strong roots in trust to provide complete protection, covering all aspects of your insurance needs.
                </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
                <div className="bg-amber-600 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center">
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
                    className="lucide lucide-users h-8 w-8 sm:h-10 sm:w-10 text-white"
                    aria-label="Users Icon"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Deep Rooted Personal Service
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Work with dedicated agents who understand your unique needs and provide personalized solutions rooted in genuine care.
                </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
                <div className="bg-amber-600 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center">
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
                    className="lucide lucide-check-circle h-8 w-8 sm:h-10 sm:w-10 text-white"
                    aria-label="Check Circle Icon"
                >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Claims Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Fast, fair claims processing with 24/7 support when you need us most true protection means we&apos;re always here.
                </p>
            </div>

            </div>
        </div>
    </section>
)
}

export default ChooseUs
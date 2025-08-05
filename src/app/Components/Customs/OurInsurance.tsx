function OurInsurance() {

    return (
        <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a complete range of insurance products rooted in trust and designed to provide true protection for what matters most to you and your business.
            </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* === Reusable Card Start === */}
            {[
                {
                title: "Home Insurance",
                image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-home h-5 w-5 sm:h-6 sm:w-6 text-white"
                    aria-hidden="true"
                    >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                ),
                desc: "Protect your most valuable asset with comprehensive homeowners insurance coverage rooted in trust.",
                list: [
                    "Property protection",
                    "Personal belongings",
                    "Liability coverage",
                    "Additional living expenses",
                ],
                },
                {
                title: "Auto Insurance",
                image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-car h-5 w-5 sm:h-6 sm:w-6 text-white"
                    aria-hidden="true"
                    >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                    </svg>
                ),
                desc: "Drive with confidence knowing you have true protection on every journey.",
                list: [
                    "Collision coverage",
                    "Comprehensive protection",
                    "Liability insurance",
                    "Uninsured motorist",
                ],
                },
                {
                title: "Business Insurance",
                image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-building h-5 w-5 sm:h-6 sm:w-6 text-white"
                    aria-hidden="true"
                    >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                    </svg>
                ),
                desc: "Safeguard your business with tailored commercial insurance solutions built on strong foundations.",
                list: [
                    "General liability",
                    "Property coverage",
                    "Workers compensation",
                    "Professional liability",
                ],
                },
                 {
                title: "Life Insurance",
                image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-5 w-5 sm:h-6 sm:w-6 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                ),
                desc: "Ensure your family's financial security with life insurance policies that provide true protection.",
                list: [
                    "Term life insurance",
                    "Whole life insurance",
                    "Universal life",
                    "Final expense",
                ],
                },
                 {
                title: "Commercial",
                image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400&amp;h=300&amp;fit=crop",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-5 w-5 sm:h-6 sm:w-6 text-white"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                ),
                desc: "Safeguard your business with tailored commercial insurance solutions built on strong foundations.",
                list: [
                    "Equipment coverage",
                    "Cyber liability",
                    "Key person insurancee",   
                    "Business interruption",
                    
                ],
                },
                  {
                title: "Group Benefits",
                image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 sm:h-6 sm:w-6 text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                ),
                desc: "Employee benefit packages that help you attract and retain top talent with true protection.",
                list: [

                   "Health insurance", 
                    "Dental &amp; vision",
                    "Disability insurance",
                    "Retirement plans",
                ],
                },
                // Add more entries below for Life Insurance, Commercial, Group Benefits
            ].map((service, i) => (
                <div
                key={i}
                className="bg-gray-50 rounded-xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                    <div className="bg-emerald-900 p-2 sm:p-3 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                        {service.icon}
                    </div>
                    </div>
                </div>
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{service.desc}</p>
                    <ul className="space-y-2 mb-6">
                    {service.list.map((item, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0" />
                        {item}
                        </li>
                    ))}
                    </ul>
                    <button className="text-emerald-900 font-medium hover:text-amber-600 transition-colors duration-200 text-sm sm:text-base">
                        Learn More →
                    </button>
                </div>
                </div>
            ))}
            {/* === Reusable Card End === */}
            </div>

            <div className="text-center mt-12">
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                Discover All Services
            </button>
            </div>
        </div>
        </section>
    );
}

export default OurInsurance;

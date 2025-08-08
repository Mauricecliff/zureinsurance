"use client";




function CareerChoose(){
    return(
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose Zure Insurance?
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    We're more than just an insurance provider - we're your trusted partner in true protection, rooted in strong values.
                </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card */}
        {[
            {
            title: "Competitive Compensation",
            icon: (
                <>
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </>
            ),
            desc: "Industry-leading salaries with performance-based bonuses and commission opportunities that reward excellence.",
            },
            {
            title: "Comprehensive Benefits",
            icon: (
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            ),
            desc: "Receive industry-competitive salaries, performance-driven bonuses, and growth-based incentives that recognize your contributions and excellence.",
            },
            {
            title: "Professional Development",
            icon: (
                <>
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </>
            ),
            desc: "Access continuous learning through sponsored certifications, leadership workshops, and career advancement programs rooted in excellence.",
            },
            {
            title: "Flexible Schedule",
            icon: (
                <>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
                </>
            ),
            desc: "Achieve work-life balance with flexible hours, remote work options, and generous paid time off (PTO) — because we respect your time.",
            },
            {
            title: "Great Work Environment",
            icon: (
                <>
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" x2="6" y1="2" y2="4" />
                <line x1="10" x2="10" y1="2" y2="4" />
                <line x1="14" x2="14" y1="2" y2="4" />
                </>
            ),
            desc: "Work in a collaborative, inclusive, and modern workspace with a team culture that values communication, support, and innovation.",
            },
            {
            title: "Additional Perks",
            icon: (
                <>
                <rect x="3" y="8" width="18" height="4" rx="1" />
                <path d="M12 8v13" />
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                </>
            ),
            desc: "From wellness initiatives and staff discounts to engaging company events and referral bonuses, we show appreciation in meaningful ways.",
            },
        ].map((card, i) => (
            <div
            key={i}
            className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
            <div className="flex items-center mb-6">
                <div className="bg-amber-600 p-3 rounded-lg group-hover:bg-emerald-900 transition-colors duration-300">
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
                    className="h-6 w-6 text-white"
                >
                    {card.icon}
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{card.title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
        ))}
        </div>

        {/* Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-amber-600">
            {/* <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200&amp;h=600&amp;fit=crop"
            alt="Team celebrating success"
            className="w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-amber-800 opacity-90" />
        </div>
        <div className="relative p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our mission to provide true protection with strong roots while building a rewarding career that makes a meaningful impact in people's lives.
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

export default CareerChoose
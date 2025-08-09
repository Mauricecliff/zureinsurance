import Link from "next/link";

function OurInsurance() {

    return (
        <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                <b>Comprehensive Protection Rooted in Trust </b><br />

                At ZureInsurance, we offer more than just policies we deliver peace of mind. Our insurance solutions are thoughtfully designed to protect the people, businesses, and dreams you care about most. With us, you&apos;re not just insured you&apos;re truly covered.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-3.5">
               <b>Complete Protection Solutions </b><br />

                Whether you&apos;re safeguarding your home, vehicle, health, or business, our offerings are grounded in transparency, built on trust, and tailored to your needs. Explore our range of reliable, easy to understand insurance products all created to give you confidence in every decision and security at every stage.
            </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* === Reusable Card Start === */}
            {[
                {
                title: "Home Insurance",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                desc: "Affordable Health Plans for You and Your Family",
                list: [
                     "What Home Insurance Covers: Structure, Belongings, Liability",
                    "Add Ons: Flood, Earthquake, Valuables",
                    "Homeowners vs. Renters Insurance",
                    "How to File a Home Insurance Claim",
                    "Tips to Lower Your Premium",
                    
                ],
                CTA: 'Protect Your Property Today'
                },
                {
                title: "Auto Insurance",
                image: "https://images.unsplash.com/photo-1567113463730-77e3df20363c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                desc: "Drive Protected – Wherever the Road Takes You.",
                list: [
                
                     "Types of Coverage: Liability, Collision, Comprehensive",
                     "Add Ons: Roadside Assistance, Rental Reimbursement",
                     "Discounts: Safe Driver, Multi-Car, Bundling",
                     "How Claims Are Handled",
                     "Local & Nationwide Coverage"

                     
                ],
                CTA: 'Get a Fast Auto Insurance Quote'
                },
                {
                title: "Business Insurance",
                image: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                desc: "Coverage That Works as Hard as You Do.",
                list: [
                "Types: General Liability, Professional Liability, Workers’ Comp, Commercial Auto",
                "Industry Specific Packages",
                "Property Insurance for Offices, Equipment",
                "Cybersecurity & Data Breach Coverage",
                "Small Business Plans & Enterprise Options"
                ],
                CTA: 'Protect Your Business Now'
                },
                 {
                title: "Life Insurance",
                image: "https://plus.unsplash.com/premium_photo-1723507291530-47c2f7aa9197?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-5 w-5 sm:h-6 sm:w-6 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                ),
                desc: "Secure Their Future – Even When You’re Not Around.",
                list: [
                     "Term Life vs. Whole Life Insurance",
                     "Who Needs Life Insurance",
                     "Benefits: Funeral Costs, Mortgage Payoff, Family Income Protection",
                     "How Much Coverage Do You Need?",
                     "Riders and Add ons (e.g. critical illness, accidental death}",
                     "Easy Application Process"
                ],
                CTA: 'Calculate Your Life Insurance Needs'
                },
                 {
                title: "Commercial Insurance",
                image: "https://plus.unsplash.com/premium_photo-1661301190249-6cc8685dbc6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                CTA: 'Compare Plans Now'
                },
                  {

                title: "Travel Insurance",
                image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-5 w-5 sm:h-6 sm:w-6 text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                ),
                desc: "Worry Less, Travel More.",
                list: [
                    "Trip Cancellation & Interruption",
                    "Medical Emergencies Abroad",
                    "Lost Baggage & Delays",
                    "International Coverage Scope",
                    "Business & Student Travel Coverage"

                ],
                CTA: 'Insure Your Next Trip in Minutes'
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
                        {service.CTA} →
                    </button>
                </div>
                </div>
            ))}
            {/* === Reusable Card End === */}
            </div>

            <div className="text-center mt-12">
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                <Link href="/service" >
                    Discover All Services
                </Link>
            </button>
            </div>
        </div>
        </section>
    );
}

export default OurInsurance;







// 1. Health Insurance

// Headline: “Affordable Health Plans for You and Your Family”

// Content Sections:
//  • Why Health Insurance Matters
//  • Individual vs. Family Plans
//  • HMO vs. PPO Options
//  • Coverage for Prescriptions, Doctor Visits, Emergencies
//  • Preventive Care and Wellness Benefits
//  • How to File a Claim
//  • FAQ: Pre-existing conditions, waiting periods

// Call-to-Action (CTA): “Compare Plans Now”

// ⸻

// 2. Life Insurance

// Headline: “Secure Their Future – Even When You’re Not Around”

// Content Sections:
//  • Term Life vs. Whole Life Insurance
//  • Who Needs Life Insurance?
//  • Benefits: Funeral Costs, Mortgage Payoff, Family Income Protection
//  • How Much Coverage Do You Need?
//  • Riders and Add-ons (e.g. critical illness, accidental death)
//  • Easy Application Process

// CTA: “Calculate Your Life Insurance Needs”

// ⸻

// 3. Auto Insurance

// Headline: “Drive Protected – Wherever the Road Takes You”

// Content Sections:
//  • Types of Coverage: Liability, Collision, Comprehensive
//  • Add-Ons: Roadside Assistance, Rental Reimbursement
//  • Discounts: Safe Driver, Multi-Car, Bundling
//  • How Claims Are Handled
//  • Local & Nationwide Coverage

// CTA: “Get a Fast Auto Insurance Quote”

// ⸻

// 4. Home Insurance

// Headline: “Protect Your Home, Protect Your Peace of Mind”

// Content Sections:
//  • What Home Insurance Covers: Structure, Belongings, Liability
//  • Add-Ons: Flood, Earthquake, Valuables
//  • Homeowners vs. Renters Insurance
//  • How to File a Home Insurance Claim
//  • Tips to Lower Your Premium

// CTA: “Protect Your Property Today”

// ⸻

// 5. Travel Insurance

// Headline: “Worry Less, Travel More”

// Content Sections:
//  • Trip Cancellation & Interruption
//  • Medical Emergencies Abroad
//  • Lost Baggage & Delays
//  • International Coverage Scope
//  • Business & Student Travel Coverage

// CTA: “Insure Your Next Trip in Minutes”

// ⸻

// 6. Business Insurance

// Headline: “Coverage That Works as Hard as You Do”

// Content Sections:
//  • Types: General Liability, Professional Liability, Workers’ Comp, Commercial Auto
//  • Industry-Specific Packages
//  • Property Insurance for Offices, Equipment
//  • Cybersecurity & Data Breach Coverage
//  • Small Business Plans & Enterprise Options

// CTA: “Protect Your Business Now”
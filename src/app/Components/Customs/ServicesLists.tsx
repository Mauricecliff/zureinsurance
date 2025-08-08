"use client";

import Link from "next/link";



const protectionPlans = [
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
                desc: "Affordable Health Plans for You and Your Family",
                list: [
                    // "Why Health Insurance Matters",
                    // "Individual vs. Family Plans",
                    // "HMO vs. PPO Options",
                    // "Coverage for Prescriptions, Doctor Visits, Emergencies",
                    // "Preventive Care and Wellness Benefits",
                    // "How to File a Claim",
                    // "FAQ: Pre-existing conditions, waiting periods"
                     "What Home Insurance Covers: Structure, Belongings, Liability",
                    "Add-Ons: Flood, Earthquake, Valuables",
                    "Homeowners vs. Renters Insurance",
                    "How to File a Home Insurance Claim",
                    "Tips to Lower Your Premium",
                    
                ],
                CTA: 'Protect Your Property Today'
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
                desc: "Drive Protected – Wherever the Road Takes You.",
                list: [
                
                     "Types of Coverage: Liability, Collision, Comprehensive",
                     "Add-Ons: Roadside Assistance, Rental Reimbursement",
                     "Discounts: Safe Driver, Multi-Car, Bundling",
                     "How Claims Are Handled",
                     "Local & Nationwide Coverage"

                     
                ],
                CTA: 'Get a Fast Auto Insurance Quote'
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
                desc: "Coverage That Works as Hard as You Do.",
                list: [
                "Types: General Liability, Professional Liability, Workers’ Comp, Commercial Auto",
                "Industry-Specific Packages",
                "Property Insurance for Offices, Equipment",
                "Cybersecurity & Data Breach Coverage",
                "Small Business Plans & Enterprise Options"
                ],
                CTA: 'Protect Your Business Now'
                },
                 {
                title: "Life Insurance",
                image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-5 w-5 sm:h-6 sm:w-6 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                ),
                desc: "Secure Their Future – Even When You’re Not Around.",
                list: [
                     "Term Life vs. Whole Life Insurance",
                     "Who Needs Life Insurance",
                     "Benefits: Funeral Costs, Mortgage Payoff, Family Income Protection",
                     "How Much Coverage Do You Need?",
                     "Riders and Add-ons (e.g. critical illness, accidental death}",
                     "Easy Application Process"
                ],
                CTA: 'Calculate Your Life Insurance Needs'
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
                CTA: 'Compare Plans Now'
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
                CTA: 'Compare Plans Now'
                },
                // Add more entries below for Life Insurance, Commercial, Group Benefits
            ]

export default function ServicesLists() {
  return (
    <section className="py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Our Insurance Services
      </h2>
      <p className="text-lg lg:text-xl text-gray-600">
        Discover tailored coverage options for your peace of mind.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {protectionPlans.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <div className="relative h-48 sm:h-64">
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
              <div className="bg-amber-600 p-3 sm:p-4 rounded-xl">
                {plan.icon}
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-emerald-900 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base">
              Competitive rates
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {plan.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              {plan.desc}
            </p>
            <div className="mb-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                What&apos;s Included:
              </h4>
              <ul className="space-y-3">
                {plan.list.map((item, i) => (
                  <li key={i} className="flex items-start">
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
                      className="lucide lucide-check-circle h-4 w-4 sm:h-5 sm:w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                      role="img"
                      aria-label="Checkmark"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-500 text-white text-[12px] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center flex-1 shadow-lg hover:shadow-xl text-sm cursor-pointer">
                <Link href="/contact" className="flex gap-2 items-center">
                {plan.CTA}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2"
                  role="img"
                  aria-label="Arrow right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                </Link>
              </button>
              <button className="border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm cursor-pointer">
                <Link href="/contact">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}


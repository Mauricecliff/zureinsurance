"use client";




interface CurrentOpeningsProps {
  handleOpenViewJobDetails: () => void;
  handleApply: () => void;

}

function ViewJobDetails({handleOpenViewJobDetails, handleApply}: CurrentOpeningsProps) {

   


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={handleOpenViewJobDetails}  className="flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors duration-200 cursor-pointer">
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
            className="lucide lucide-arrow-left h-5 w-5 mr-2"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Job Listings
        </button>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Apply for Senior Insurance Agent
                </h1>
                <p className="text-amber-100 mb-4">
                  Join our team and help us provide true protection with strong
                  roots in community service.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-amber-100">
                  <div className="flex items-center">
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
                      className="lucide lucide-building h-5 w-5 mr-2"
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
                    Underwriting
                  </div>
                  <div className="flex items-center">
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
                      className="lucide lucide-map-pin h-5 w-5 mr-2"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Remote/Hybrid
                  </div>
                  <div className="flex items-center">
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
                      className="lucide lucide-clock h-5 w-5 mr-2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Full-time
                  </div>
                  <div className="flex items-center">
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
                      className="lucide lucide-dollar-sign h-5 w-5 mr-2"
                    >
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Competitive
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0">
                <button onClick={handleApply} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 border-b border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
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
                  className="lucide lucide-calendar h-5 w-5 text-amber-900 mr-3"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Posted</div>
                  <div className="text-gray-600">1 week ago</div>
                </div>
              </div>

              <div className="flex items-center">
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
                  className="lucide lucide-users h-5 w-5 text-amber-900 mr-3"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Reports To</div>
                  <div className="text-gray-600">Underwriting Manager</div>
                </div>
              </div>

              <div className="flex items-center">
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
                  className="lucide lucide-award h-5 w-5 text-amber-900 mr-3"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Team Size</div>
                  <div className="text-gray-600">
                    6-person underwriting team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About the Role
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Evaluate insurance applications and determine appropriate
                coverage and pricing. Work with agents and customers to
                structure policies that meet their needs while maintaining our
                commitment to providing true protection with sound risk
                management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an Underwriter at TrueOak Insurance, you'll play a crucial
                role in our ability to provide comprehensive coverage while
                maintaining financial stability. You'll evaluate risks, make
                coverage decisions, and work closely with our sales team to find
                creative solutions for our customers' insurance needs.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {[
                  "Review and evaluate insurance applications",
                  "Determine risk levels and appropriate pricing",
                  "Communicate with agents regarding coverage decisions",
                  "Ensure compliance with company guidelines and regulations",
                  "Maintain underwriting files and documentation",
                  "Collaborate with claims and sales teams",
                  "Stay current on industry trends and regulations",
                  "Participate in training and professional development",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="lucide lucide-check-circle h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Requirements
              </h2>
              <ul className="space-y-3">
                {[
                  "Bachelor's degree in Business, Finance, or related field",
                  "Insurance experience preferred but not required",
                  "Strong analytical and decision-making skills",
                  "Attention to detail and accuracy",
                  "Knowledge of insurance regulations and guidelines",
                  "Proficiency in underwriting software and systems",
                  "Excellent communication skills",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="lucide lucide-star h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preferred Qualifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Preferred Qualifications
              </h2>
              <ul className="space-y-3">
                {[
                  "Strong mathematical and analytical abilities",
                  "Critical thinking and problem-solving skills",
                  "Understanding of risk assessment principles",
                  "Professional certification (CPCU, AU) preferred",
                  "Knowledge of state insurance regulations",
                  "Ability to work independently and meet deadlines",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="lucide lucide-check-circle h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            {/* Benefits & Perks */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Benefits &amp; Perks
              </h3>
              <ul className="space-y-3">
                {[
                  "Competitive salary with performance bonuses",
                  "Comprehensive health and dental coverage",
                  "Professional certification support and reimbursement",
                  "401(k) with generous company matching",
                  "Flexible work schedule",
                  "Continuing education opportunities",
                  "Career advancement pathways",
                  "Employee stock purchase plan",
                  "Paid volunteer time off",
                  "Wellness programs and health incentives",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
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
                      className="lucide lucide-check-circle h-4 w-4 text-amber-600 mr-3 mt-1 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Section */}
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Join our team and be part of a company that values strong roots
                and true protection. We're committed to helping you grow your
                career while making a meaningful impact.
              </p>
              <button onClick={handleApply}  className="w-full bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Apply for This Position
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Equal opportunity employer committed to diversity and inclusion
              </p>
            </div>

            {/* About TrueOak Insurance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About TrueOak Insurance
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For over 25 years, TrueOak Insurance has been providing true
                protection with strong roots in Montana, serving families and
                businesses nationwide.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Founded:</span>
                  <span className="text-gray-900">1998</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Employees:</span>
                  <span className="text-gray-900">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Customers:</span>
                  <span className="text-gray-900">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">States Served:</span>
                  <span className="text-gray-900">All 50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJobDetails;

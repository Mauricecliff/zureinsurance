"use client";


interface ApplyProps {
    handleApply: () => void;
}

function Apply({handleApply}:ApplyProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={handleApply} className="flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors duration-200 cursor-pointer">
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
          <div className="bg-amber-800 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Apply for Senior Insurance Agent</h1>
            <p className="text-white mb-4">
              Join our team and help us provide true protection with strong
              roots in community service.
            </p>
          </div>
        </div>
        <form className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
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
                className="lucide lucide-user h-6 w-6 text-amber-600 mr-3"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">
                Personal Information
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  placeholder="Your last name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
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
                className="lucide lucide-map-pin h-6 w-6 text-amber-600 mr-3"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">
                Address Information
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="addressStreet"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="addressStreet"
                  name="addressStreet"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="addressCity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="addressCity"
                    name="addressCity"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label
                    htmlFor="addressState"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    State *
                  </label>
                  <select
                    id="addressState"
                    name="addressState"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                  >
                    <option value="">Select State</option>
                    {[
                      "AL",
                      "AK",
                      "AZ",
                      "AR",
                      "CA",
                      "CO",
                      "CT",
                      "DE",
                      "FL",
                      "GA",
                      "HI",
                      "ID",
                      "IL",
                      "IN",
                      "IA",
                      "KS",
                      "KY",
                      "LA",
                      "ME",
                      "MD",
                      "MA",
                      "MI",
                      "MN",
                      "MS",
                      "MO",
                      "MT",
                      "NE",
                      "NV",
                      "NH",
                      "NJ",
                      "NM",
                      "NY",
                      "NC",
                      "ND",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VT",
                      "VA",
                      "WA",
                      "WV",
                      "WI",
                      "WY",
                    ].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="addressZip"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="addressZip"
                    name="addressZip"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 border-gray-300"
                    placeholder="12345"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections like Documents, Additional Info, and Submit */}
          {/* Let me know if you'd like those converted too – JSX is very long so I split this here. */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
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
                className="lucide lucide-file-text h-6 w-6 text-amber-600 mr-3"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-600 transition-colors duration-200">
                  <div>
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
                      className="lucide lucide-upload h-12 w-12 text-gray-400 mx-auto mb-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p className="text-gray-600 mb-2">Upload your resume</p>
                    <p className="text-sm text-gray-500 mb-4">
                      PDF or Word document, max 5MB
                    </p>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="bg-amber-600 hover:bg-amber-600 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-600 transition-colors duration-200">
                  <div>
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
                      className="lucide lucide-upload h-12 w-12 text-gray-400 mx-auto mb-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p className="text-gray-600 mb-2">
                      Upload your cover letter
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      PDF or Word document, max 5MB
                    </p>
                    <input
                      type="file"
                      id="coverLetter"
                      name="coverLetter"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="coverLetter"
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Information
            </h2>
            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Why are you interested in this position? (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us why you're excited about this opportunity and what you would bring to our team..."
              ></textarea>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                 onClick={handleApply}
                type="button"
                className="flex-1 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                Back to Job Details
              </button>
              <button
                type="submit"
                className="flex-1 bg-amber-600 hover:bg-amber-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center cursor-pointer"
              >
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
                  className="lucide lucide-check-circle h-5 w-5 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                Submit Application
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this application, you agree to our privacy policy
              and terms of service. TrueOak Insurance is an equal opportunity
              employer.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Apply
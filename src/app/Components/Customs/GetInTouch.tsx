"use client";

import Link from "next/link";

function GetInTouch() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience true protection? Contact us today for a
            personalized insurance quote rooted in trust and designed for your
            unique needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1661301053519-880c720aadcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Customer service representative"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  We&apos;re here to help
                </h3>
                <p className="text-amber-100 text-sm sm:text-base">
                  True protection with deep-rooted personal service
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
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
                    className="lucide lucide-phone h-5 w-5 sm:h-6 sm:w-6 text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <a
                      href="tel:702686-7820"
                      className="hover:text-amber-600 transition-colors duration-200"
                    >
                      (702) 686-7820
                    </a>
                  </p>
                  {/* <p className="text-xs sm:text-sm text-gray-500">
                    24/7 Claims Hotline:
                    <a
                      href="tel:4069986267"
                      className="ml-1 hover:text-amber-600 transition-colors duration-200"
                    >
                      (406) 998-6267
                    </a>
                  </p> */}
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
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
                    className="lucide lucide-mail h-5 w-5 sm:h-6 sm:w-6 text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <a
                      href="mailto:info@trueoakinsurance.com"
                      className="hover:text-amber-600 transition-colors duration-200"
                    >
                      info@zureinsurance.com
                    </a>
                  </p>
                  {/* <p className="text-xs sm:text-sm text-gray-500">
                    <a
                      href="mailto:claims@trueoakinsurance.com"
                      className="hover:text-amber-600 transition-colors duration-200"
                    >
                      claims@zureinsurance.com
                    </a>
                  </p> */}
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
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
                    className="lucide lucide-map-pin h-5 w-5 sm:h-6 sm:w-6 text-white"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Office
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Patrick V. McNamara Federal Building
                    <br />
                    477 Michigan Avenue
                    <br />
                    Detroit, MI 48226-2523
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 p-4 sm:p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us how we can provide true protection for you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Send Message
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
                  className="lucide lucide-send ml-2 h-5 w-5"
                >
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4 text-sm">
                Need immediate assistance or want to explore all our contact
                options?
              </p>
              <button className="text-amber-600 hover:text-amber-800 font-medium transition-colors duration-200 cursor-pointer">
                <Link href="/contact">
                  Visit Our Contact Page →
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;

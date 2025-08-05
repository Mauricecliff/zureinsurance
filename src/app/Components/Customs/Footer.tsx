"use client";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="zureinsurance/true-logo.jpg"
                alt="TrueOak Insurance Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">TrueOak</h3>
                <p className="text-sm text-gray-300 -mt-1">Insurance</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protecting what matters most to you and your family for over 25
              years. Your trusted partner for comprehensive insurance solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
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
                  className="lucide lucide-facebook h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
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
                  className="lucide lucide-twitter h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
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
                  className="lucide lucide-linkedin h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
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
                  className="lucide lucide-instagram h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home Insurance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Auto Insurance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Business Insurance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Life Insurance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Commercial Insurance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Group Benefits
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  News &amp; Press
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Customer Reviews
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Claims Center
                </a>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
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
                  className="lucide lucide-phone h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-white font-medium">(870) 281-4894</p>
                  <p className="text-gray-400 text-sm">
                    24/7 Claims: (406) 998-6267
                  </p>
                </div>
              </div>
              <div className="flex items-start">
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
                  className="lucide lucide-mail h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <p className="text-white">info@trueoakinsurance.com</p>
                </div>
              </div>
              <div className="flex items-start">
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
                  className="lucide lucide-map-pin h-5 w-5 text-amber-400 mr-3 mt-1 flex-shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-white">3734 Crescent Lake Rd</p>
                  <p className="text-white">Billings, MT 59101</p>
                  <a
                    href="https://g.co/kgs/y6Kptwp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 text-sm transition-colors duration-200"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2025 TrueOak Insurance. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
              <button className="hidden lg:flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200">
                Employee Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

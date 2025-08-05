"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav(!openNav);

  const pathName = usePathname()

  console.log('current path>>>', pathName)




  // console.log('check nav state>>>', openNav)

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 bg-white shadow-lg">
      <div className="bg-emerald-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-2">
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
                  className="lucide lucide-phone h-3 w-3 sm:h-4 sm:w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:8702814894"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  (870) 281-4894
                </a>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
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
                  className="lucide lucide-mail h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:info@trueoakinsurance.com"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  info@trueoakinsurance.com
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span>
                Licensed in All 50 States | Claims:
                <a
                  href="tel:4069986267"
                  className="ml-1 hover:text-amber-400 transition-colors duration-200"
                >
                  (406) 998-6267
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <button
            onClick={toggleNav}
            className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group"
          >
            <img
              src="zureinsurance/true-logo.jpg"
              alt="TrueOak Insurance Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-emerald-900 group-hover:text-emerald-800 transition-colors duration-200">
                Zure
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 -mt-1">
                Insurance
              </p>
            </div>
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 hover:scale-105  ${pathName === '/' ? 'bg-emerald-900 text-white ' : 'shadow-none'}  shadow-lg cursor-pointer`}>
             <Link href="/">
                  Home
             </Link>
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 hover:scale-105  ${pathName === '/service' ? 'bg-emerald-900 text-white ' : 'shadow-none'}  shadow-lg cursor-pointer`}>
              <Link href="/service">
                    Our Services
              </Link>
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 hover:scale-105  ${pathName === '/about' ? 'bg-emerald-900 text-white ' : 'shadow-none'}  shadow-lg cursor-pointer`}>
             <Link href="/about">
                About Us
             </Link>
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 hover:scale-105  ${pathName === '/contact' ? 'bg-emerald-900 text-white ' : 'shadow-none'}  shadow-lg cursor-pointer`}>
              <Link href="/contact">
                 Contact Us
              </Link>
             
            </button>
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 hover:scale-105  ${pathName === '/careers' ? 'bg-emerald-900 text-white ' : 'shadow-none'}  shadow-lg cursor-pointer`}>
              <Link href="/careers">
                    Careers
              </Link>
            </button>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Get Quote
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleNav} className="text-gray-700 hover:text-emerald-900 p-2 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
              {openNav ? (
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
                  className="lucide lucide-x h-6 w-6"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
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
                  className="lucide lucide-menu h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              <button className="px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50">
                Home
              </button>
              <button className="px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50">
                Our Services
              </button>
              <button className="px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50">
                About Us
              </button>
              <button className="px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50">
                Contact Us
              </button>
              <button className="px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 bg-emerald-900 text-white">
                Careers
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mt-4">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

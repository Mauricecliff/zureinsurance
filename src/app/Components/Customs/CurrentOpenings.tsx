"use client";

import { useState } from "react";
import ViewMore from "./ViewMore";

interface CurrentOpeningsProps {
  handleOpenViewJobDetails: () => void;
}

function CurrentOpenings({handleOpenViewJobDetails}: CurrentOpeningsProps) {

  const [viewMore, setViewMore] = useState(false);
  

    const toggleViewMore = () => {
        setViewMore(!viewMore);
    };

  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re looking for talented and passionate individuals to join our
            growing team.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
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
                  className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                <option value="all">All Departments</option>
                <option value="Sales">Sales</option>
                <option value="Claims">Claims</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Marketing">Marketing</option>
                <option value="Underwriting">Underwriting</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Administration">Administration</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                <option value="all">All Locations</option>
                <option value="Multiple Locations">Multiple Locations</option>
                <option value="Remote/Hybrid">Remote/Hybrid</option>
                <option value="Billings, MT Office">Billings, MT Office</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing 12 of 12 positions
          </div>
        </div>
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Senior Insurance Agent
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 mr-2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Sales
                        </div>
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 mr-2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Multiple Locations
                        </div>
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 mr-2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Full-time
                        </div>
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-4 w-4 mr-2">
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        Competitive
                        </div>
                    </div>
                     
                    </div>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <span className="text-sm text-gray-500">Posted 2 days ago</span>
                    <button onClick={toggleViewMore}  className="flex items-center text-amber-600 hover:text-emerald-900 font-medium transition-colors duration-200 cursor-pointer">
                       {viewMore ? 'Less Details' : 'More Details'} 
                       {viewMore ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-2 h-4 w-4">
                        <path d="m6 9 6 6 6-6"></path>
                        </svg>
                       ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-2 h-4 w-4">
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                       )
                             
                       } 
                    </button>
                    </div>
                </div>
               
                <p className="text-gray-600 leading-relaxed mb-6">
                    Join our dynamic sales team as a Senior Insurance Agent and help families and businesses find the perfect insurance solutions. You&apos;ll work with a diverse portfolio of clients, providing expert guidance and building lasting relationships while contributing to our mission of providing true protection with strong roots in community service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={handleOpenViewJobDetails} className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex-1 sm:flex-none  cursor-pointer">
                    Apply Now
                    </button>
                    <button onClick={handleOpenViewJobDetails} className="border border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
                    View Details
                    </button>
                </div>
                 {viewMore && (<ViewMore handleOpenViewJobDetails={handleOpenViewJobDetails}/>)}
                </div>
            </div>
        </div>
        <div className="text-center mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See the Perfect Fit?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team. Submit a general application and we&apos;ll keep you in mind for future opportunities that match your skills and interests.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
            Submit General Application
            </button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentOpenings;

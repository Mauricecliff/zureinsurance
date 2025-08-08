"use client";

import { CircleCheckBig, FileText, MessageSquare, User } from "lucide-react";

function ApplicationProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hiring process is designed to be thorough yet efficient, rooted in fairness and transparency. Here&apos;s what you can expect when you apply for a position at TrueOak Insurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Submit Application",
              desc: "Complete our online application form and upload your resume and cover letter through our secure portal.",
              icon: FileText,
              step: "1",
            },
            {
              title: "Initial Screening",
              desc: "Our HR team will review your application with care and contact qualified candidates within 1-2 weeks.",
              icon: User,
              step: "2",
            },
            {
              title: "Interview Process",
              desc: "Participate in phone/video screening followed by in-person or virtual interviews with our hiring team.",
              icon: MessageSquare,
              step: "3",
            },
            {
              title: "Job Offer",
              desc: "Successful candidates receive a comprehensive job offer including salary, benefits, and start date details.",
              icon: CircleCheckBig,
              step: "4",
            },
          ].map(({ title, desc, icon: Icon, step }) => (
            <div className="text-center" key={step}>
              <div className="relative mb-6">
                <div className="bg-amber-600 text-white rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center">
                  <Icon />
                </div>
                <div className="absolute -top-2 -right-2 bg-emerald-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-amber-600">
            {/* <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200&amp;h=600&amp;fit=crop"
              alt="Professional interview setting"
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-amber-800" />
          </div>

          <div className="relative p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Apply?</h3>
                <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                  Take the next step toward an exciting future at Zure Insurance. We&apos;re building a team where inclusion, impact, and innovation thrive — grounded in our values of protection and trust.
                </p>

                <div className="space-y-4">
                  {[
                    "Equal opportunity employer",
                    "Comprehensive benefits package",
                    "Professional growth support",
                    "Empowering and inclusive culture",
                  ].map((text, index) => (
                    <div className="flex items-center" key={index}>
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
                        className="lucide lucide-check-circle h-5 w-5 text-amber-600 mr-3"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span className="text-amber-100">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Application Tips</h4>
                <ul className="space-y-4">
                  {[
                    "Tailor your resume to emphasize your insurance experience, customer relations, and achievements.",
                    "Share real examples of how you&apos;ve solved problems and supported clients with care.",
                    "Learn about our company mission of “true protection with deep roots.”",
                    "Come prepared with questions about our team culture and growth paths.",
                  ].map((tip, index) => (
                    <li className="flex items-start" key={index}>
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Questions about the application process?</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <strong>Email:</strong> info@zureinsurance.com
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> (702) 686-7820 ext. 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationProcess;

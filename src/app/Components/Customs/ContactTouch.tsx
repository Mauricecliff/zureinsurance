"use client";


function ContactTouch() {
    return (
       <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose the contact method that works best for you. We're committed to providing prompt, professional service through every channel.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-amber-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-phone h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2c-3.07-.57-6-2.13-8.63-3.07a19.5 19.5 0 0 1-6-6C3.07 10.79 1.51 7.86 1 4.79A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.16.94.43 1.87.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.27 1.87.54 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
        <div className="space-y-2 mb-4">
          <p className="text-lg font-medium text-amber-600">(870) 281-4894</p>
          <p className="text-gray-600">Claims: (406) 998-6267</p>
        </div>
        <p className="text-gray-600 mb-4">Speak directly with our experienced agents</p>
        <div className="flex items-center justify-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-clock h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Mon-Fri: 8AM-6PM, Sat: 9AM-2PM
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-amber-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-mail h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
        <div className="space-y-2 mb-4">
          <p className="text-lg font-medium text-amber-600">info@zureinsurance.com</p>
          {/* <p className="text-gray-600">claims@trueoakinsurance.com</p> */}
        </div>
        <p className="text-gray-600 mb-4">Send us a message anytime</p>
        <div className="flex items-center justify-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-clock h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Response within 24 hours
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="bg-amber-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-map-pin h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
        <div className="space-y-2 mb-4">
          <p className="text-lg font-medium text-amber-600">Patrick V. McNamara Federal Building</p>
          <p className="text-gray-600">477 Michigan Avenue</p>
          <p className="text-gray-600">Detroit, MI 48226-2523</p>
          <p className="text-gray-600">USA</p>
        </div>
        <p className="text-gray-600 mb-4">Meet with us in person</p>
        <div className="flex items-center justify-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-clock h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          By appointment preferred
        </div>
      </div>
    </div>

    {/* Emergency Box */}
    {/* <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
      <h3 className="text-xl font-semibold text-red-800 mb-2">24/7 Emergency Claims</h3>
      <p className="text-red-700 mb-4">For urgent claims that can't wait, call our 24/7 claims hotline</p>
      <a
        href="tel:4069986267"
        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-phone h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2c-3.07-.57-6-2.13-8.63-3.07a19.5 19.5 0 0 1-6-6C3.07 10.79 1.51 7.86 1 4.79A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.16.94.43 1.87.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.94.27 1.87.54 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        (406) 998-6267
      </a>
    </div> */}
  </div>
</section>

    );
}

export default ContactTouch;
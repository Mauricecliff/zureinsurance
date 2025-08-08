"use client";

import Link from "next/link";



function ContactForm() {
    return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call us directly.
            </p>
            <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                />
                </div>
                <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your phone number"
                />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
                />
            </div>
            <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Type of Inquiry</label>
                <select
                id="inquiryType"
                name="inquiryType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                >
                <option value="general">General Information</option>
                <option value="quote">Request Quote</option>
                <option value="claim">File a Claim</option>
                <option value="policy">Policy Questions</option>
                <option value="billing">Billing Inquiry</option>
                <option value="complaint">File a Complaint</option>
                </select>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200"
                placeholder="Brief subject line"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Please provide details about your inquiry..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
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
        </div>

        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;h=400&amp;fit=crop"
                alt="TrueOak Insurance office"
                className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Zure Insurance</h3>
                <p className="">Serving Montana since 2011</p>
            </div>
            </div>

            <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
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
                    className="lucide lucide-map-pin h-5 w-5 text-amber-600 mr-2"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Office Address
                </h4>
                 <p className="text-gray-900">Patrick V. McNamara Federal Building</p>
                  <p className="text-gray-900">477 Michigan Avenue</p>
                  <p className="text-gray-900">Detroit, MI 48226-2523</p>
                  <p className="text-gray-900">USA</p>
                <a
                href="https://www.google.com/maps/place/Patrick+V.+McNamara+Federal+Building,+477+Michigan+Ave,+Detroit,+MI+48226,+USA/@42.3314645,-83.053233,17z/data=!3m1!4b1!4m6!3m5!1s0x883b2d375ea4cb85:0xfc764ebf9941d970!8m2!3d42.3314645!4d-83.053233!16s%2Fg%2F11b62klchy?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-600 font-medium transition-colors duration-200"
                >
                View on Google Maps →
                </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
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
                    className="lucide lucide-clock h-5 w-5 text-amber-600 mr-2"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-500">Monday - Friday:</span>
                    <span className="text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Saturday:</span>
                    <span className="text-gray-900">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Sunday:</span>
                    <span className="text-gray-900">Closed</span>
                </div>
                </div>
            </div>

            <div className="bg-amber-100 p-6 rounded-xl border border-amber-300">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
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
                    className="lucide lucide-users h-5 w-5 text-amber-600 mr-2"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Schedule an Appointment
                </h4>
                <p className="text-gray-600 mb-4">
                Prefer to meet in person? Schedule a consultation with one of our experienced agents.
                </p>
                <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer">
                    <Link href="tel:7026867820">
                            Book Appointment
                    </Link>
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    );
}

export default ContactForm;
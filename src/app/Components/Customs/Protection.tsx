"use client"

import Link from "next/link";

function Protection() {
    return (
      <section className="py-16 lg:py-20 bg-amber-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
      Ready for True Protection?
    </h2>
    <p className="text-lg lg:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
      Contact us today for a personalized quote and discover how our strong roots and true protection can safeguard what matters most to you.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
        <Link href="/service">
           Get Free Quote
        </Link>
      </button>
      <a
        href="tel:7026867820"
        className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105"
      >
        Call (702) 686-7820
      </a>
    </div>
  </div>
</section>

    );
}

export default Protection;
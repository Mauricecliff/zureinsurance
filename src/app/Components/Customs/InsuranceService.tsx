"use client";

function InsuranceService() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-amber-600">
        {/* <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
          alt="Insurance services overview"
          className="w-full h-full object-cover opacity-20"
        /> */}
        <div className="absolute inset-0 bg-amber-800 opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Our Insurance<span className="text-amber-400 block">Services</span>
        </h1>
        <p className="text-lg lg:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            At ZureInsurance, we offer more than just policies — we deliver peace of mind. Our insurance solutions are thoughtfully designed to protect the people, businesses, and dreams you care about most. With us, you’re not just insured — you’re truly covered.
        </p>
      </div>
    </section>
  );
}

export default InsuranceService;

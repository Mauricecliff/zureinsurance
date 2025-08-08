"use client";

function Trusted() {
  return (
    <section className="relative py-20 bg-amber-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
          alt="Professional team meeting"
          className="w-full h-full object-cover opacity-20"
        /> */}
        <div className="absolute inset-0 bg-amber-800  opacity-80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-emerald-100">
            Our track record speaks for itself
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
             14 
            </div>
            <div className="text-lg text-emerald-100">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
              20k+ 
            </div>
            <div className="text-lg text-emerald-100">Satisfied Customers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
              98%
            </div>
            <div className="text-lg text-emerald-100">Customer Retention</div>
          </div>
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-amber-400 mb-2">
              $1B+
            </div>
            <div className="text-lg text-emerald-100">Claims Paid Out</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;

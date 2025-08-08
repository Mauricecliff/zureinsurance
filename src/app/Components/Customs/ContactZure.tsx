"use client"

function ContactZure() {
    return (
       <section className="relative bg-gradient-to-br bg-amber-600 via-amber-600 to-amber-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
            {/* <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
            alt="Customer service representative"
            className="w-full h-full object-cover opacity-20"
            /> */}
            <div className="absolute inset-0 bg-amber-800 opacity-80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
            Contact<span className="text-emerald-600 block">Zure Insurance</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We're here to help with all your insurance needs. Reach out to us today for personalized service and expert guidance.
            </p>
  </div>
</section>

    );
}

export default ContactZure;
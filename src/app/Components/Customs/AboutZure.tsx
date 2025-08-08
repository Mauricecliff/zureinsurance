"use client";



function AboutZure(){
    return(
            <section className="relative bg-gradient-to-br from-amber-600 via-amber-600 to-amber-600 text-white py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0">
                <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920&amp;h=1080&amp;fit=crop"
                alt="TrueOak Insurance team"
                className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-amber-600 opacity-80"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    About<span className="text-emerald-600 block">Zure Insurance</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
                    Smart Coverage. Real Support.
                    Rooted in Integrity, Growing with You
                    Founded by a team of insurance insiders who believe in transparency and compassion, ZureInsurance is built from the ground up to serve individuals, families, and small businesses with affordable, easy-to-understand policies. Though we’re still early in our journey, our approach is steadfast: honest guidance, community-first values, and coverage that adapts with you.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-emerald-600">14</div>
                        <div className="text-white text-sm lg:text-base">Years of Strong Roots</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-emerald-600">20K+</div>
                        <div className="text-white text-sm lg:text-base">Satisfied Customers</div>
                    </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;h=400&amp;fit=crop"
                    alt="TrueOak Insurance office"
                    className="rounded-2xl shadow-2xl w-full"
                    />
                </div>
                </div>
            </div>
            </section>
    )
}



export default AboutZure
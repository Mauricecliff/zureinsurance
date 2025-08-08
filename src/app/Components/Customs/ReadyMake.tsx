"use client";


function ReadyMake() {
    return (
        <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
            </h2>
            <p className="text-lg lg:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join our mission to provide true protection with strong roots while
            building a rewarding career that makes a meaningful impact in people's
            lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-900 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Submit Your Resume
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Employment Verification
            </button>
            </div>
        </div>
    </section>
    );
}       

export default ReadyMake;
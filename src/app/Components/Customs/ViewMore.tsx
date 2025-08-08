"use client";



interface CurrentOpeningsProps {
  handleOpenViewJobDetails: () => void;
}


function ViewMore({handleOpenViewJobDetails}: CurrentOpeningsProps){
    

    return(
        <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Key Requirements */}
                <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Requirements</h4>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Valid insurance license (Property &amp; Casualty) required</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">3+ years of insurance sales experience</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Excellent communication and interpersonal skills</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Strong attention to detail and organizational abilities</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Ability to work independently and as part of a team</span>
                    </li>
                    <li className="text-sm text-gray-500 italic">+2 more requirements</li>
                </ul>
                </div>

                {/* Key Benefits */}
                <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="space-y-2">
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Competitive base salary plus commission structure</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Comprehensive health, dental, and vision insurance</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">401(k) retirement plan with company matching</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Paid time off and holiday pay</span>
                    </li>
                    <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Professional development and continuing education support</span>
                    </li>
                    <li className="text-sm text-gray-500 italic">+5 more benefits</li>
                </ul>
                </div>
            </div>

            {/* Apply Button */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <button onClick={handleOpenViewJobDetails} className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 Senior Insurance Agent">
                Apply for This Position
                </button>
            </div>
        </div>

    )
}


export default ViewMore;
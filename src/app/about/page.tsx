"use client"



import AboutZure from "../Components/Customs/AboutZure"
import Mission from "../Components/Customs/Mission"
import OurStory from "../Components/Customs/OurStory"
import RootedValues from "../Components/Customs/RootedValues"


const AboutPage = () => {
    return(
        <div className="min-h-screen bg-gray-50">
            <AboutZure />
            <OurStory />
            <RootedValues />
            <Mission />
        </div>
    )
}


export default AboutPage
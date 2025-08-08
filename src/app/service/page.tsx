import ChooseUs from "../Components/Customs/ChooseUs"
import InsuranceService from "../Components/Customs/InsuranceService"
import Protection from "../Components/Customs/Protection"
import ServicesLists from "../Components/Customs/ServicesLists"


const ServicePage = () => {
    return(
        <div className="min-h-screen bg-gray-50">
            <InsuranceService />
           <ServicesLists />
           <ChooseUs />
           <Protection/>
        </div>
    )
}


export default ServicePage
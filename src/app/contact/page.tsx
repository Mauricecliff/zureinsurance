import ContactForm from "../Components/Customs/ContactForm"
import ContactTouch from "../Components/Customs/ContactTouch"
import ContactZure from "../Components/Customs/ContactZure"
import FAQ from "../Components/Customs/FAQ"





const ContactUsPage = () => {
    return(
        <div className="min-h-screen bg-gray-50">
            <ContactZure />
            <ContactTouch />
            <ContactForm />
            <FAQ />
        </div>
    )
}


export default ContactUsPage 
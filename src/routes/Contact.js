import Navbar from "../components/Navbar";
import imag1 from '../assets/petr-sevcovic-BZ3aE3ouAfc-unsplash.jpg'
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                homeimg={imag1}
                title='Contact Us'
            />
            <ContactForm />

            <Footer />
        </>
    )
}
export default Contact;
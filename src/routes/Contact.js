import Navbar from "../components/Navbar";
import imag1 from '../assets/petr-sevcovic-BZ3aE3ouAfc-unsplash.jpg'
import Hero from "../components/Hero";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        homeimg = {imag1}
        title = 'Contact Us'
        text='Please fill this form'
        btntext='More Details'
        url='/'
        btnClass='show'
        />
   
        
        </>
    )
}
export default Contact;
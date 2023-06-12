import Navbar from "../components/Navbar";
import imag1 from '../assets/chathura-anuradha-subasinghe-_M4yPHONK58-unsplash.jpg'
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        homeimg = {imag1}
        title = 'About Guide.Com'
        text='Choose your favourite place'
        btntext='More Details'
        url='/'
        btnClass='show'
        />
   
   <Footer/>
        </>
    )
}
export default About;
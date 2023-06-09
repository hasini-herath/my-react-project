import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import imag1 from '../assets/alla-havriushenko-O-yCWCD3vb0-unsplash.jpg'
import Destination from "../components/Destination";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        homeimg = {imag1}
        title = 'Your Journey Your Story'
        text='Choose your favourite place'
        btntext='Travel Plan'
        url='/'
        btnClass='show'
        />
   
        <Destination/>
        </>
    )
}
export default Home;
import './Hero.css'
import imag1 from '../assets/david-marcu-78A265wPiO4-unsplash.jpg'

function Hero(){
    return(
        <>
<div className='hero'>
    <img alt='HerpImg' src={imag1}></img>

    <div className='hero-text'>
        <h1>Your Journey Your Story</h1>
        <p>Choose your favourite place</p>
<a href='/'>Travel Plan</a>
    </div>
</div>
    </>
    );
    
}
export default Hero;
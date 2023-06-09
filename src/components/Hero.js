import './Hero.css'
//import imag1 from '../assets/david-marcu-78A265wPiO4-unsplash.jpg'

function Hero(props){
    return(
        <>
<div className={props.cName}>
    <img alt='HerpImg' src={props.homeimg}></img>

    <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <br></br>
<a href={props.url} className={props.btnClass}>{props.btntext}</a>
    </div>
</div>
    </>
    );
    
}
export default Hero;
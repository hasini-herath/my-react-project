import './Destination.css';
import ellaone from '../assets/petr-sevcovic-BZ3aE3ouAfc-unsplash.jpg';
import ellatwo from '../assets/hendrik-cornelissen-jpTT_SAU034-unsplash.jpg';

function Destination() {
    return (
        <div className="destination">
            <div className='dest-main'>
                <h1>Popular Places inSri Lanka</h1>
                <p>Check out the Most Popular Tours offered by colour holidays.</p>
            </div>

            <div className='first-des'>
                <div className='des-text'>
                    <h2>Ella</h2>
                    <p>Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation. The Ella Gap allows views across the southern plains of Sri Lanka. On a sunny morning, you can even see the glow from the lighthouses along the southern coast.</p>
                    </div>
            <div className='des-image'>
            <img alt='img' src={ellatwo}></img>
                <img alt='img' src={ellaone}></img>
            </div>
        </div>
        </div>
            
    )
}
export default Destination;
import './Trip.css';
import TripData from './TripData';
import trip1 from '../assets/steven-kamenar-MMJx78V7xS8-unsplash.jpg';
import trip2 from '../assets/oliver-sjostrom-SDrAcUDJ-Qg-unsplash.jpg';
import trip3 from '../assets/eirik-skarstein-_hJVUYzrQfo-unsplash.jpg';

function Trip() {
    return (
        <>
            <div className='trip'>
                <h1>Recent Trips</h1>
                <p>Tou can discover unique Destinations using google maps.</p>
                <div className='tripcard'>
                    <TripData
                        image={trip1}
                        heading='Sinharaja Rain Forest'
                        text='Sinharaja is a Rain Forest and a biodiversity hotspot which is located in south west lowland wet zone within Sabaragamu and Southern provinces of Sri Lanka. Sinharaja rain forest is the country’s last viable area of primary tropical rain forest. It covers an area of 11,000 Ha of primary and secondary forests. This narrow strip of rolling site comprises of a series of ridges and valleys.'
                    />
                    <TripData
                        image={trip2}
                        heading='Mirissa'
                        text='Fringing two sandy bays separated by a rock island reachable at low tide, Mirissa feels hidden away compared to Sri Lanka’s other busier resort towns. While the quiet sands are sprinkled with bars and surf rentals, it’s Mirissa’s May-to-November whale-watching boat trips that steal the show.'
                    />
                    <TripData
                        image={trip3}
                        heading='Unawatuna'
                        text='Unawatuna is one of the most popular areas of Sri Lanka. Tourists on vacation like to spend their time in the southern part of Sri Lanka, mainly because it has the most beautiful beaches in Sri Lanka. With roughly a one-hour ride from the capital city Colombo, Unawatuna’s a perfect area to stay for a few days.'
                    />
                </div>
            </div>
        </>
    )
}
export default Trip;
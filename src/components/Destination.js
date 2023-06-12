import DestinationData from './DestinatioData';
import './Destination.css';
import ellaone from '../assets/petr-sevcovic-BZ3aE3ouAfc-unsplash.jpg';
import ellatwo from '../assets/hendrik-cornelissen-jpTT_SAU034-unsplash.jpg';
import sigone from '../assets/shashank-hudkar-McZvOlhAHVQ-unsplash.jpg';
import sigtwo from '../assets/dylan-shaw-smUAKwMT8XA-unsplash.jpg';
import ruwanone from '../assets/rathna-deepaya-TyNXWzVQl_Y-unsplash.jpg';
import ruwantwo from '../assets/rathna-deepaya-U19tlIRU1As-unsplash.jpg';
import Trip from './Trip'



function Destination() {
    return (
        <div className="destination">
            <div className='dest-main'>
                <h1>Popular Places inSri Lanka</h1>
                <p>Check out the Most Popular Tours offered by colour holidays.</p>
            </div>

            <DestinationData
            className='first-des'
                header="Ella"
                text='Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation. The Ella Gap allows views across the southern plains of Sri Lanka. On a sunny morning, you can even see the glow from the lighthouses along the southern coast.'
                imag1={ellatwo}
                imag2={ellaone}
            />
               <DestinationData
            className='first-des-reverse'

                header="Sigiriya"
                text='Sigiriya Lion Rock is an ancient rock fortress known for its massive column of rock that reaches nearly 200 meters high. The site dates back to the reign of King Kasyapa (477-495 AD), who chose this site as his new capital. He decorated the walls with frescoes, and built an impressive palace right on top of the rock column, accessible only through the mouth of an enormous carved lion.'
                imag1={sigtwo}
                imag2={sigone}
            />   <DestinationData
            className='first-des'
                header="Ruwanweliseya"
                text='Ruwanweliseya Stupa (Ruwanveli Seya Stupa), the foremost of the supremely glorious ancient living monuments of Sinhalese Buddhist Heritage at the city of Anuradhapura (a UNESCO World Heritage Site-Culture) was built by King Dutugamunu (161-137 BC), the Hero of the Nation, who hailed from Ruhuna, which was destined to give birth to most of the glorious heroes of the island nation of Sri Lanka from the ancient era to the modern day. Ruwanweliseya Stupa (Ruwanveli Seya Stupa) also called Maha Stupa (Sinhala: the great dagoba) or Ratnapali Stupa or Swarnamali stupa has been the most adored, most venerated among the great ancient stupas (dagobas) of Sri Lanka.  '
                imag1={ruwanone}
                imag2={ruwantwo}
            />
            <Trip/>
        </div>

    )
}
export default Destination;
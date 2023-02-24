import '../StylePage/HomeStyle.css'
// import { Button,Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function HomePage(){
return (
<div>  <Navbar/>
        {/* content_1 */}
        <div className='content_1'>
            <div >
            <h1>Set Your <br /> Walking Style</h1>
            <p>
                Create unique outfits with the <br />
                perfect pair of sneakers
            </p>
            <button>Shop Now →</button>
            </div>

            <div>
            <div>
            <Link to={'/MenShoes'}>
            <img src='https://i.ebayimg.com/images/g/zEQAAOSwWbpj2Loi/s-l400.webp' alt='image1'/>
            </Link>
            </div>
            <div>
            <Link to={'/WomenShoes'}>
            <img src='https://i.ebayimg.com/images/g/2bIAAOSwnxBj2Loj/s-l400.webp' alt='image1'/>
            </Link>
            </div>
            <div>
            <Link to={'/MenShoes'}>
            <img src='https://i.ebayimg.com/images/g/QqoAAOSwsj1j2Loi/s-l400.webp' alt='image1'/>
            </Link>
            </div>
            </div>   
        </div>
        {/* content_2 */}
        <div className="content_2">
        <div>
        <h1>Daily Deals</h1>
        <h1>|</h1>
        <h1>See all →</h1>    
        </div>    
        </div>         
        {/* content_3 */}

        <div className='content_3'>
        <div>
            <h1>Up to 40% OFF. Kick off the year with teach!</h1>
            <p>Everything you need to help you succeed</p>
        </div>
        <div>
            <p>Let's go →</p>
        </div>
        </div>
        {/* content_4 */}
        <div className="content_2">
        <div>
        <h1>Popular Destination</h1>
        <h1>|</h1>
        <h1>See all →</h1>    
        </div>
        <div className='contact_4'>
        <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/9vIAAOSwik9bhdyV/s-l225.webp" alt="1" />
            <p>Shoes</p>
        </div>
        <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/HQkAAOSwk6dbrPXU/s-l225.webp" alt="2" />
            <p>Jewelry & Watch</p>
        </div>
        <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/jbQAAOSwJjNb0koU/s-l225.webp" alt="3" />
            <p>Beauty</p>
        </div>
        <div>
            <img src="https://i.ebayimg.com/images/g/ekkAAOSwmGdjvtmy/s-l640.png" alt="4" />
            <p>Computer and Tablets</p>
        </div>
        <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/bCwAAOSw6xVcbw76/s-l225.webp" alt="5" />
            <p>Phone</p>
        </div>
        <div>
            <img src="https://i.ebayimg.com/thumbs/images/g/ntQAAOSwuddiag59/s-l225.webp" alt="6" />
            <p>Home</p>
        </div>
        </div>   
        </div>
        {/* content_5 */}
        <div className='content_5'>
            <div>
            <img src='https://i.ebayimg.com/images/g/9DIAAOSwq-Fj7Z56/s-l1600.webp' alt='banner'/>
            </div>
            <div>
                <p>Fitness <br />
                Gadgets
                </p>
                <button>Buy it now →</button>
            </div>
        </div>
</div>
)
}

export default HomePage;
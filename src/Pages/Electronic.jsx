import '../StylePage/ElectronicStyle.css'
import Navbar from '../Pages/Navbar.jsx'
import backGround from '../Video/backGround.mp4'
import Footer from '../Pages/Footer.jsx'
export default function Electronic(){
return(
    <div>
    <Navbar/>
    {/* banner */}
    <div className='banner'>
    <div>
    <video style={{width:'450px'}} muted autoPlay loop>
    <source src={backGround} type='video/mp4'/>
    </video>
    </div>
    <div>
    <h1>Electronics</h1>
    <p>The place for smarter upgrades since 1995.</p>
    </div>
    </div>
    {/* content */}
    <div>
        <h1 className='heading_lite'>Shop By Category</h1>
        <div className='catagorys'>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/RLUAAOSw3CZhcJY0/s-l225.webp" alt="phone" />
            <p>PHONE</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/L1gAAOSwDsNhcJeS/s-l225.webp" alt="monitor" />
            <p>MONITOR</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/lgwAAOSwv-VhcJhv/s-l225.webp" alt="earphone" />
            <p>EARPHONE</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/9m0AAOSwNHVhcJO2/s-l225.webp" alt="speaker" />
            <p>SPEAKER</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/crEAAOSw52JcpmnG/s-l225.webp" alt="headphone" />
            <p>HEADPHONE</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/PUcAAOSwWANhcJSh/s-l225.webp" alt="apple" />
            <p>APPLE</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/cFEAAOSwXFhhcJOW/s-l225.webp" alt="tv" />
            <p>TV</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/pfoAAOSwMlhhcJau/s-l225.webp" alt="drone" />
            <p>DRONE</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/LsAAAOSwDsNhcJdE/s-l225.webp" alt="CPU" />
            <p>CUP</p>
        </div>
        <div className="items">
            <img src="https://i.ebayimg.com/thumbs/images/g/jx4AAOSw01tdgnC-/s-l225.webp" alt="videoGame" />
            <p>VIDEO GAMES</p>
        </div>
        </div>
    </div>
    {/* bottom */}
    <div className="bottom">
    <div>
    <img src="https://i.ebayimg.com/thumbs/images/g/YcwAAOSwmnFeBkB6/s-l960.webp" alt="bottom" />
    </div>
    <div className='bottom_1'>
    <h1>Take Out the old</h1>
    <p>Put the new</p>
    <button>Start Saveing →</button>
    </div>
    </div>
    {/* bottom_2 */}
    <div className="bottom_2">
    <h1 className='heading_lite'>Shop the Latest Apple AirPods and Headsets</h1>
    <div className='catagorys'>
        <div className="item">
            <img src="https://i.ebayimg.com/thumbs/images/g/4UkAAOSwHwlePBHz/s-l225.webp" alt="phone" />
            <p>Apple AirPods 2</p>
        </div>
        <div className="item">
            <img src="https://i.ebayimg.com/thumbs/images/g/7c8AAOSwBQ1eNsm~/s-l225.webp" alt="phone" />
            <p>Apple AirPods Pro</p>
        </div>
        <div className="item">
            <img src="https://i.ebayimg.com/thumbs/images/g/GQ4AAOSwgUdhcJ2b/s-l225.webp" alt="phone" />
            <p>Apple AirPods Max</p>
        </div>
        <div className="item">
            <img src="https://i.ebayimg.com/thumbs/images/g/0aYAAOSw4T5XHhUq/s-l225.webp" alt="phone" />
            <p>Apple HeadSet</p>
        </div>
        <div className="item">
            <img src="https://i.ebayimg.com/thumbs/images/g/5N8AAOSwAmNfFlYs/s-l225.webp" alt="phone" />
            <p>Apple AirPods</p>
        </div>
    </div>
    </div>
    <div className='banner_2'>
    <img src="https://i.ebayimg.com/thumbs/images/g/CDAAAOSwBZJjEl5M/s-l1200.webp" alt="" />
    </div>
    <Footer/>
    </div>
)
}
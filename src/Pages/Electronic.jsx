import '../StylePage/ElectronicStyle.css'
import Navbar from '../Pages/Navbar.jsx'
import backGround from '../Video/backGround.mp4'

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


    </div>
)
}
import Navbar_Lite from "./Navbar_Lite"
import { useParams } from "react-router-dom"
import '../StylePage/CheckoutStyle.css'
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthorContext } from "../AuthContext/AuthorContextProvider";

export default function CheckOut(){
const {cart,order,setOrder} = useContext(AuthorContext)
const {payment} = useParams();
const [click,setClick] = useState('Order Place')
const navi = useNavigate();

const handleOrder = () =>{

setClick('Successfull...')
setTimeout(()=>{
navi('/')
},900)
}

// console.log(payment);
return (
    <div>
    <Navbar_Lite/>
    <div className="checkoutpage">
    <div>
    <h1>Billing Details</h1>
    <input type='text' placeholder="Enter Your Name"/> <br />
    <input type='email' placeholder="Enter Your Email"/> <br />
    <select value={'SELECT-COUNTRY'}>
    <option>INDIA</option>
    <option>USA</option>
    <option>UK</option>
    <option>RUSSIA</option>
    <option>FRANCE</option>
    </select> <br />
    <div className="towins">
    <input type="text" placeholder="City"/>
    <input type="number" placeholder="ZIP/Postal Code"/>
    </div>
    <h2>Total Ammount - {payment}<i>$</i></h2>
    </div>

    <div>
    <h1>Payment Method</h1>
    <input style={{margin:"10px 0"}} type="number" placeholder="Card Number"/>

    <div className="cards">
    <div style={{display:"flex",marginLeft:"20px",alignItems:"center"}}>
    <p>Credits_Card</p>
    <input style={{marginLeft:"15px",marginRight:"1.2cm"}} type="checkbox" />
    </div>
    <img src="https://www.bing.com/th?id=OIP.lbZMsZVfTvLetT4GnRrPLQHaEq&w=226&h=165&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="visa" />
    <img src="https://www.bing.com/th?id=OIP.XybdBNeA81q0MhHe1KF5OAHaEb&w=276&h=165&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="masterCard" />
    <img src="https://zeevector.com/wp-content/uploads/2021/03/rupay-logo.png" alt="Rupay" />
    </div>
    {/* <Link to={'/'}> */}
    <button onClick={handleOrder} className="order">{click}</button>
    {/* </Link> */}
    </div>
    

    </div>
        
    </div>
)
}
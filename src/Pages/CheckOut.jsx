import Navbar_Lite from "./Navbar_Lite"
import { useParams } from "react-router-dom"
import '../StylePage/CheckoutStyle.css'

export default function CheckOut(){
const {payment} = useParams()

console.log(payment);
return (
    <div>
    <Navbar_Lite/>
    <div className="checkout">
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
    </select>
    <input type="text" placeholder="State/Country"/>
    <input type="number" placeholder="ZIP/Postal Code"/>
    </div>
    <div>
    <h1>Payment Method</h1>
    <input type="number" placeholder="Card Number"/>
    
    </div>
    

    </div>
        
    </div>
)
}
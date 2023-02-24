import { useState,useEffect } from 'react'
import axios from 'axios'
import '../StylePage/MenStyle.css'
import Product from './Product'
import Navbar from './Navbar'

export default function MenShoes(){
const [data,setData] = useState([])

const getDate = ()=>{
axios(`https://dead-gray-millipede-ring.cyclic.app/user`)
.then((data)=>{
setData(data.data.menshoes)
// console.log(data.data.menshoes)
})
}

useEffect(()=>{
getDate();
},[])

return(
    <div>
        <Navbar/>
        {/* men_1 */}
        <div className="men_1">
            <div>
            <div>
            <h1>Women Sneakers</h1>
            <h5>Take 15% Off!</h5>
            </div>
            <div>
            <p>Click to copy coupon</p>
            <button>SNEAK23</button>
            <p>See Terms and Conditions</p>
            </div>
            </div>
            <div>
            <img src="https://i.ebayimg.com/images/g/kR8AAOSw7RFj4YII/s-l1600.webp" alt="banner"/>
            </div>
        </div>
        {/* men_2 */}
        <div className='men_2'>
            <div className='men_21'>hello</div>
            <div className='men_22'>
            <div className='gridProduct'>
                {data.map((ele)=>(
                <Product 
                key  = {ele.id}
                id = {ele.id}
                img = {ele.img}
                name = {ele.name}
                color = {ele.color}
                size = {ele.size}
                price = {ele.price}
                catagory = {ele.catagory}
                />
                ))}
            </div>
            </div>
        </div>
    </div>
)
}
//https://dead-gray-millipede-ring.cyclic.app/user
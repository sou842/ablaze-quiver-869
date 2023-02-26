import { useContext, useEffect, useState } from "react";
import { AuthorContext } from "../AuthContext/AuthorContextProvider"
import Navbar_Lite from "./Navbar_Lite";
import '../StylePage/CartStyle.css';
import { Link } from "react-router-dom";

export default function CartPage(){
const {cart,setCart} = useContext(AuthorContext);
const [totalPrice,setTotalPrice] = useState(0);


const CartItem = ({id,name,price,img,catagory,color,size,quantity})=>{


const handleMinus = (num) =>{
let ss = cart.filter((ele)=>{
if(ele.id==num){
    ele.quantity -= 1
return ele;
}
else {
    return ele;
}
})
setCart(ss)
console.log(cart)

}


const handlPlus = (num) =>{

let ss = cart.filter((ele)=>{
if(ele.id==num){
    ele.quantity += 1
return ele;
}
else {
    return ele;
}
})
setCart(ss)
console.log(cart)

}



const make = ()=>{
let val = cart.reduce((acc,item)=>{
acc += item.price * item.quantity;

return acc ;
},0)
setTotalPrice(val)
}

useEffect(()=>{
make();
},[cart])


// console.log(totalPrice)
return (
    <div style={{textAlign:"center",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <img style={{width:"200px",height:"200px",margin:"auto"}} src={img} alt={id}/>
        <p style={{fontSize:"12px",margin:"10px 0"}}>{name}</p>
        <span style={{display:"flex",justifyContent:"space-around"}}>
        <p style={{fontSize:"15px"}}>{price} $</p>
        <span style={{display:"flex",width:"60%",justifyContent:"space-evenly"}}>
        <button disabled={quantity==1} onClick={()=>handleMinus(id)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>handlPlus(id)}>+</button>
        </span>
        </span>
        
    </div>
)
}

return (
    <div>
        <Navbar_Lite/>
        <div>
        <div className="Gridstyleing">
        {cart.map((ele)=>(
        <CartItem
        key = {Math.random()}
        id = {ele.id}
        name = {ele.name}
        img = {ele.img}
        size = {ele.size}
        color = {ele.color}
        price = {ele.price}
        catagory = {ele.catagory}
        quantity = {ele.quantity}
        />
        ))}
        </div>
        <div className="details">
        <div>
        <p style={{fontSize:"20px",fontWeight:"bolder"}}>TOTAL Price - {totalPrice} $</p>
        <p>Total Number Of Product - {cart.length}</p>
        </div>
        <div>
        <Link to={`/CheckOut/${totalPrice}`}>
        <button className="checkout">CHECKOUT</button>
        </Link>
        </div>
        </div>
        </div>

    </div>
)
}
import Navbar_Lite from '../Pages/Navbar_Lite'
import { useParams } from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../StylePage/ProductPageStyle.css'
import {AuthorContext} from '../AuthContext/AuthorContextProvider';

export default function ProductPage(){
const [text,setText] = useState([]);
const {cart,setCart} = useContext(AuthorContext);
const [flag,setFlag] = useState("CART");
// const [cart,setCart] = useState([]);
const {catagory} = useParams();

let id = (catagory[catagory.length-1])
let value = catagory.slice(0, catagory.length-1)

const getDate = ()=>{
axios(`https://dead-gray-millipede-ring.cyclic.app/${value}`)
.then((data)=>{
setText(data.data)
})
}

useEffect(()=>{
getDate();
},[])
 
    
const handleCart = (ele) =>{ 
if(flag=="CART"){
setCart([...cart,{...ele,quantity:1}]);
setFlag("ADDED")
}

}

console.log(cart)

return (
    <div>
    <Navbar_Lite/>
    <div className='product_container'>
    {/* first */}
    <div>
        <p>COMPOSITION, CARE & ORIGIN </p>
        <p>COMPOSITION</p>
        <p>
        We work with monitoring <br /> programmes to ensure <br /> compliance with our social,<br />
        environmental and health and <br /> safety standards for our<br /> garments.
        </p>
        <p>To assess compliance, we have<br /> developed a programme of </p>
    </div>
    {/* second */}
    <div>
    {text.map((ele)=>{
    return <img key={ele.id} src={ele.id==id?ele.img:null} alt="" /> 
    })}
    </div>
    {/* third */}
    <div className='third'>
    {text.map((ele)=>{
    if(ele.id==id){
    return (
    <div>
        <p>{ele.name}</p>
        <p>PRICE - <i key={ele.id} style={{color:"red"}}> {ele.price} </i> $</p>

        <p className='color'>COLOR - {ele.color}

        <div style={{width:"20px",
        height:"20px",
        margin:"0 10px",
        borderRadius:"50%",
        opacity:"0.6",
        backgroundColor:ele.color}}>
        </div>
        </p>

        <p>SIZE - 
        <i> {ele.size} </i>
        </p>
        <Link to={`/CheckOut/${ele.price}`}>
        <button className='btn'>BUY</button>
        </Link>
        <button onClick={()=>handleCart(ele)} className='btn'>{flag}</button>
    </div>
    )}
    })}
    </div>
    </div>
    </div>
)
}
//{ele.id==id?ele.id:null}
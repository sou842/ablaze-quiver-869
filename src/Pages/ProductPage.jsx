import Navbar_Lite from '../Pages/Navbar_Lite'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../StylePage/ProductPageStyle.css'

export default function ProductPage(){
const [text,setText] = useState([]);
// const [product,setProduct] = useState([])
const {catagory} = useParams();
let id = (catagory[catagory.length-1])
let value = catagory.slice(0, catagory.length-1)


const getDate = ()=>{
axios(`https://dead-gray-millipede-ring.cyclic.app/user`)
.then((data)=>{
setText(data.data[value])
})
}

useEffect(()=>{
getDate();
},[])



// console.log(text)

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
    return <img src={ele.id==id?ele.img:null} alt="" /> 
    })}
    </div>
    {/* third */}
    <div>
    {text.map((ele)=>{
    return <p>{ele.id==id?ele.name:null}</p>
    })}
    <p>PRICE - 
    {text.map((ele)=>{
    return <i style={{color:"red"}}> {ele.id==id?ele.price:null} </i>
    })}
    $
    </p>
    <p className='color'>COLOR - 
    {text.map((ele)=>{
    return <> {ele.id==id?ele.color:null} </>
    })}

    {text.map((ele)=>{
    return <> {ele.id==id?<div style={{width:"20px",
    height:"20px",
    margin:"0 10px",
    borderRadius:"50%",
    opacity:"0.6",
    backgroundColor:ele.id==id?ele.color:null}}>
    </div>:null} </>
    })}
    </p>
    <p>SIZE - 
    {text.map((ele)=>{
    return <i> {ele.id==id?ele.size:null} </i>
    })}
    </p>
    <button className='btn'>BUY</button>
    <button className='btn'>CART</button>
    </div>
    </div>
    </div>
)
}
//{ele.id==id?ele.id:null}
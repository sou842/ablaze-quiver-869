import { Link } from "react-router-dom"

export default function Product({id,name,color,img,size,price,catagory}){
return (
    <Link to={`/${catagory}/${catagory}${id}`}>
    <div style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",padding:"0 0 15px 0"}}>
        <img style={{width:"100%",height:"230px"}} src={img} alt={id}/>
        <p style={{margin:"15px 0"}}>{name}</p>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <p ><i style={{color:"red"}}>Size</i> - {size}</p>
        <p>Price - {price}$</p>
        </div>
    </div>
    </Link>
)
}
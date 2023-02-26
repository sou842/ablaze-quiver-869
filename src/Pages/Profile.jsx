import Navbar_Lite from "./Navbar_Lite"
import '../StylePage/ProfileStyle.css'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorContext } from "../AuthContext/AuthorContextProvider"

export default function Profile(){
const {pdata,setUser,logout,setLogout} = useContext(AuthorContext);
const navi = useNavigate();

console.log(pdata)

const handleLogout = ()=>{
setUser('Login');
setLogout('COMPLITED')
setTimeout(()=>{
  navi('/')
},1000)
}
return (
    <div>
    <Navbar_Lite/>
    <div className="profile">
        <div>
        <img style={{width:"250px",heigth:"300px"}} src="https://th.bing.com/th/id/OIP.4HFNPpAomjyQFfNm6XLZkAHaJ4?pid=ImgDet&rs=1" alt="" />
        </div>
        <div>
        <h1>NAME <p>- {pdata.name} </p></h1>
        <h1>email <p>- {pdata.email}</p></h1>
        <button onClick={handleLogout}>{logout}</button>
        </div>
    </div>
    </div>
)
}
import '../StylePage/RegisterStyle.css';
import Navbar_Lite from './Navbar_Lite';
import { useState } from 'react';
import axios from 'axios'

export default function Register(){
const [name,setName] = useState('');
const [ email,setEmail] = useState('');
const [password,setPassword] = useState('');

let obj = {
    name : name,
    email : email,
    password : password
}

const hahdleClick = ()=>{




}

//https://jsondadakijai.onrender.com/account

return (
    <div>
    <Navbar_Lite/>
    <div className='content'>
    <h1>REGISTER</h1>
    <input className='inputs' onChange={(e)=>setName(e.target.value)} type='text' placeholder='Enter Your Name'/> <br />
    <input className='inputs' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' /> <br />
    <input className='inputs' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' /> <br />
    <input className='inputs' type="password" placeholder='Repeate Your Password' />
    <button className='btn_sub' onClick={hahdleClick}>CREATE</button>
    </div>
    </div>
)
}




// axios
//       .post("http://localhost:3000/signin", {
//         ...state,cart:[]
//       })
import '../StylePage/RegisterStyle.css';
import Navbar_Lite from './Navbar_Lite';
import { useState } from 'react';
import axios from 'axios'

export default function Register(){
const [name,setName] = useState('');
const [ email,setEmail] = useState('');
const [password,setPassword] = useState('');

const hahdleClick = ()=>{
// let data = {
//     email: "ss.gmail.com",
//     password: "hello",
//     name: "Sourav Samanta"
// }
// console.log("login")
// fetch(`http://localhost:8080/`,{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })

axios({
    method: 'post',
    url: `https://dead-gray-millipede-ring.cyclic.app/account`,
    data: {
    title: "text",
    status: "false",
}
})
}

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
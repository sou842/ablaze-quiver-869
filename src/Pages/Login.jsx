import { Link } from 'react-router-dom'
import '../StylePage/Login.css'
import Navbar_Lite from './Navbar_Lite'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AuthorContext } from '../AuthContext/AuthorContextProvider';
import { useNavigate } from "react-router-dom"

export default function Login(){
const [data,setData] = useState([]);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [submit,setSubmit] = useState('SUBMIT');
const [Alert,setAlert] = useState('');
const {setUser,pdata,setPdata,setLogout} = useContext(AuthorContext);
const navi = useNavigate();

useEffect(()=>{
axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/account`)
.then((data)=>{
setData(data.data)
})
},[])

const handleSubmit = ()=>{
if(password=='' && email==''){
setAlert('Please fill all box!!')
}
else{
data.map((ele)=>{
if(ele.email==email && ele.password==password){
setUser(ele.name);
setPdata(ele);
setLogout('lOGOUT')
setSubmit('SUCCESSFULL...')
setTimeout(()=>{
navi('/')
},1000)
}
else if(ele.email!=email && ele.password!=password){
setAlert('No User Found!')
}
})
}
    
}
console.log(pdata)

// console.log(email,password)
return (
    <div>
        <Navbar_Lite/>
    <div className='container'>
        {/* login */}
        <div className='login'>
        <h1>LOGIN</h1>
        <input onChange={(e)=>setEmail(e.target.value)} className='Login_Input' type="email" placeholder='Enter Your Password'/><br />
        <input onChange={(e)=>setPassword(e.target.value)} className='Login_Input' type="password" placeholder="Enter Your Password"/>
        <p style={{color:"red",textAlign:"center"}}>{Alert}</p>
        <button onClick={handleSubmit} className='Login_Button'>{submit}</button>
        </div>
        {/* register */}
        <div className='register'>
        <h1>REGISTRE</h1>
        <p>IF YOU STILL DON'T HAVE A <b>ELECTRO.COM</b> ACCOUNT, USE THIS OPTION TO
        ACCESS THE REGISTRATION FORM.

        BY GIVING US YOUR DETAILS, PURCHASING IN <b>ELECTRO.COM</b> WILL BE FASTER
        AND AN ENJOYABLE EXPERIENCE.</p>
        <div>
        <Link to={'/Register'}>
        <button className='Register_Button'>REGISTER</button>
        </Link>
        </div>
        </div>
    </div>
    </div>
)
}
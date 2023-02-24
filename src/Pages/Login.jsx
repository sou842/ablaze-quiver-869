import { Link } from 'react-router-dom'
import '../StylePage/Login.css'
import Navbar_Lite from './Navbar_Lite'


export default function Login(){
return (
    <div>
        <Navbar_Lite/>
    <div className='container'>
        {/* login */}
        <div className='login'>
        <form>
        <h1>LOGIN</h1>
        <input className='Login_Input' type="email" placeholder="Enter Your Email"/><br />
        <input className='Login_Input' type="password" placeholder="Enter Your Password"/>
        <button className='Login_Button'>SUBMIT</button>
        </form>
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
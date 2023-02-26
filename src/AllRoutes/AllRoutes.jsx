import { Routes,Route } from "react-router-dom";
import Electronic from "../Pages/Electronic";
import HomePage from "../Pages/HomePage";
import MenShoes from'../Pages/MenShoes'
import WomenShoes from "../Pages/WomenShoes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckOut from "../Pages/CheckOut";

export default function AllRoutes(){
return (
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/MenShoes' element={<MenShoes></MenShoes>}></Route>
        <Route path='/WomenShoes' element={<WomenShoes></WomenShoes>}></Route>
        <Route path='/Electronic' element={<Electronic></Electronic>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/menShoes/:catagory' element={<ProductPage></ProductPage>}></Route>
        <Route path='/CartPage' element={<CartPage></CartPage>}></Route>
        <Route path='CheckOut/:payment' element={<CheckOut></CheckOut>}></Route>
    </Routes>
)
}
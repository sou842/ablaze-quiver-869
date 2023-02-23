import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MenShoes from'../Pages/MenShoes'

export default function AllRoutes(){
return (
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/MenShoes' element={<MenShoes></MenShoes>}></Route>
    </Routes>
)
}
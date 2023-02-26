import { useState,useEffect } from 'react'
import axios from 'axios'
import '../StylePage/MenStyle.css'
import Product from './Product'
import Navbar from './Navbar'
import { Button,Input } from '@chakra-ui/react';

export default function WomenShoes(){
const [data,setData] = useState([]);
const [sort,setSort] = useState('id');
const [price,setPrice] = useState(null);
const [catg,setCatg ] = useState('catagory');
const [catv,setCatv] = useState('womenshoes');
const [sag,setSag] = useState('catagory');
const [size,setSize] = useState('womenshoes');
const [page,setPage] = useState(1)

const getDate = ()=>{
axios(`https://dead-gray-millipede-ring.cyclic.app/womenshoes?${catg}=${catv}&_sort=${sort}&_order=${price}&${sag}=${size}&_page=${page}&_limit=6`)
.then((data)=>{
setData(data.data)
})
}

useEffect(()=>{
getDate();
},[price,sort,catg,catv,sag,size,page])

const handleSort = (e)=>{
if(e=='sort'){
setSort('id')
setPrice(null)
}
else{
setSort('price')
setPrice(e)
}
}

const handleColor = (e)=>{
if(e=='color'){
setCatg('catagory')
setCatv('womenshoes')
}
else{
setCatg('color')
setCatv(e)
}
}

const handleSize = (e)=>{
if(e=='Size'){
setSag('catagory')
setSize('womenshoes')
}
else{
setSag('size')
setSize(e)
}
}

const handleBtn = (num) =>{
setPage(num)
}

return(
    <div>
        <Navbar/>
        {/* men_1 */}
        <div className="men_1">
            <div>
            <div>
            <h1>Women Sneakers</h1>
            <h5>Take 15% Off!</h5>
            </div>
            <div>
            <p>Click to copy coupon</p>
            <button>SNEAK23</button>
            <p>See Terms and Conditions</p>
            </div>
            </div>
            <div>
            <img src="https://i.ebayimg.com/images/g/kR8AAOSw7RFj4YII/s-l1600.webp" alt="banner"/>
            </div>
        </div>
        {/* men_2 */}
        <div className='men_2'>
            <div className='men_21'>
            {/* price */}
            <select onChange={(e)=>handleSort(e.target.value)}>
            <option value={'sort'}>Price Sort</option>
            <option value={'asc'}>Low to High</option>
            <option value={'desc'}>High to Low</option>
            </select>
            {/* color */}
            <select onChange={(e)=>handleColor(e.target.value)}>
            <option value="color">Color</option>
            <option value='black'>black</option>
            <option value='white'>white</option>
            <option value='yellow'>yellow</option>
            <option value='blue'>blue</option>
            </select>
            {/* size */}
            <select onChange={(e)=>handleSize(e.target.value)}>
            <option value="Size">Size</option>
            <option value={9}>9</option>
            <option value={8}>8</option>
            <option value={7}>7</option>
            </select>
            </div>
            <div className='men_22'>
            <div className='gridProduct'>
                {data.map((ele)=>(
                <Product 
                key  = {ele.id}
                id = {ele.id}
                img = {ele.img}
                name = {ele.name}
                color = {ele.color}
                size = {ele.size}
                price = {ele.price}
                catagory = {ele.catagory}
                />
                ))}
            </div>
            <center>
            <Button colorScheme='cyan' margin={7} variant='outline' onClick={()=>handleBtn(1)}>1</Button>
            <Button colorScheme='cyan' margin={7} variant='outline' onClick={()=>handleBtn(2)}>2</Button>
            <Button colorScheme='cyan' margin={7} variant='outline' onClick={()=>handleBtn(3)}>3</Button>
            </center>
            </div>
        </div>
    </div>
)
}
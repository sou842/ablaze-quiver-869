import { useState,useEffect } from 'react'
import axios from 'axios'
import '../StylePage/MenStyle.css'
import Product from './Product'
import Navbar from './Navbar'
import { Button } from '@chakra-ui/react';

export default function Shoes(){
const [data,setData] = useState([]);
const [sort,setSort] = useState('id');
const [price,setPrice] = useState(null);
const [catg,setCatg ] = useState('catagory');
const [catv,setCatv] = useState('menshoes');
const [sag,setSag] = useState('catagory');
const [size,setSize] = useState('menshoes');
const [page,setPage] = useState(1)

//https://dead-gray-millipede-ring.cyclic.app/shoes?${catg}=${catv}&_sort=${sort}&_order=${price}&${sag}=${size}&_page=${page}&_limit=8
const getDate = ()=>{
axios(`https://dead-gray-millipede-ring.cyclic.app/shoes?_page=${page}&_limit=8`)
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
setCatv('menshoes')
}
else{
setCatg('color')
setCatv(e)
}
}

const handleSize = (e)=>{
if(e=='Size'){
setSag('catagory')
setSize('menshoes')
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
        {/* men_2 */}
        <div className='men_2'>
            
            <div className='men_22'>
            <div style={{gridTemplateColumns:"repeat(4,1fr)"}} className='gridProduct'>
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
            <Button colorScheme={'cyan'} margin={7} variant='outline' onClick={()=>handleBtn(1)}>1</Button>
            <Button colorScheme={'cyan'} margin={7} variant='outline' onClick={()=>handleBtn(2)}>2</Button>
            <Button colorScheme={'cyan' }margin={7} variant='outline' onClick={()=>handleBtn(3)}>3</Button>
            <Button colorScheme={'cyan' }margin={7} variant='outline' onClick={()=>handleBtn(4)}>4</Button>
            </center>
            </div>
        </div>
    </div>
)
}
//https://dead-gray-millipede-ring.cyclic.app/user
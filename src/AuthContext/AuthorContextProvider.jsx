import { createContext, useState } from "react";

export const AuthorContext = createContext();

const AuthorContextProvider = ( {children} )=>{
const [cart,setCart] = useState([])
const [user,setUser] = useState('Login')
const [pdata,setPdata] = useState([]);
const [logout,setLogout] = useState('LOGOUT')
const [order,setOrder] = useState()

return <AuthorContext.Provider value={{cart,setCart,user,setUser,pdata,setPdata,logout,setLogout,order,setOrder}}>
    {children}
</AuthorContext.Provider>
}

export default AuthorContextProvider;
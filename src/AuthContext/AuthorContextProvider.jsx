import { createContext, useState } from "react";

export const AuthorContext = createContext();

const AuthorContextProvider = ( {children} )=>{
const [cart,setCart] = useState([])

return <AuthorContext.Provider value={{cart,setCart}}>
    {children}
</AuthorContext.Provider>
}

export default AuthorContextProvider;
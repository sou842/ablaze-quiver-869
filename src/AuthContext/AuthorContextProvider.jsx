import { createContext } from "react";

export const AuthorContext = createContext();

const AuthorContextProvider = ( {children} )=>{
return <AuthorContext.Provider>
    {children}
</AuthorContext.Provider>
}

export default AuthorContextProvider;
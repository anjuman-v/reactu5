import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextPovider = ({children}) =>{
    const [isAuth,setAuth] = useState(true);
    const [login,setLogin] = useState("Login");
    const [newuser, setNewUser] = useState(0)

    const increase=(status)=>{
setNewUser(status+1);
    }
   
    const handleAuth = (state) =>{
        setAuth(state)
    }

    const checkLogin =()=>{
        if(isAuth){
            setLogin("Logout")
        }else {
            setLogin("Login")
        }
    }
    return <AuthContext.Provider value={{isAuth,handleAuth, login, checkLogin, newuser, increase}}>{children}</AuthContext.Provider>
}
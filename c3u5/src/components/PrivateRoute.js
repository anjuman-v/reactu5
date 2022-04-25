import { useContext } from "react";
import {Navigate} from "react-router"
import { AuthContext } from "../Context/AuthContext";

export const ProtectedRoute = ({children})=>{
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to = {"/login"} replace={true}/>
    }
    else {
        return children
    }
}
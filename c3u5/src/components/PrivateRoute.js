import { useContext } from "react";
import {useNavigate} from "react-router-dom" 
import { AuthContext } from "../Context/AuthContext";

export const ProtectedRoute = ({children})=>{
    const {isAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    if(!isAuth){
        return (
            navigate('/login')
        )
    }
    else {
        return children
    }
}
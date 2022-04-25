import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
    const{isAuth, login, checkLogin} = useContext(AuthContext)
    if(isAuth){
        <Link className="nav-logout" to="/logout">
        {login}
      </Link>
    }else {
        <Link className="nav-login" to="/login">
       {checkLogin}
      </Link>
    }
    return (
      <div className="navbar"
      style={{
        display: "flex",
        justifyContent: 'space-around',
        padding: '15px',
        backgroundColor: 'gray',
        marginBottom: '15px'
    }}
      >
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
         

    <Link className="nav-logout" to="/logout">
        {checkLogin()}
  {login}
  </Link>

        
       
  
        {/* <Link className="nav-login" to="/login">
          Login
        </Link>  */}
      </div>
    );
  };
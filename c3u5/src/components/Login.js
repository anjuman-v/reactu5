import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react"; 



export const Login = () => {
    //  use reqres to log user in.
    const {newuser,increase} = useContext(AuthContext);
    const{handleAuth} = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [userPassword, setUserPassword] = useState("")
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
          onChange={(e)=>{
            setUser(e.target.value)
          }}
       
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
          onChange={(e)=>{
            setUserPassword(e.target.value)
          }}
        />
        <input type="submit" value="SIGN IN" onSubmit={()=>{
          increase(1)
          handleAuth(true);
          const payload = {
            
            "employee_name":"Suman",
            "employee_id": "407f36db-e1d4-4581-bf50-38b9fd8142c3",
            "title": "intern",
            "salary": 4000,
            "image": "http://dummyimage.com/139x104.png/ff4444/ffffff",
            "username":user,
            "password": userPassword,
            "tasks": ["writting tests", "fixing bugs"],
            "status": "working",
            "team": "backend"
          };
          fetch("http://localhost:8080/employee",{
            method:"POST",
            headers:{
              "contennt-type" :"application/json"
            },
            body:JSON.sringfy(payload),
          })
        }} className="login_submit" />
      </form>
    );
  };
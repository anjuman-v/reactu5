import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css"
import { AuthContext } from "../Context/AuthContext";
export const EmployeeDetail = () => {
  const [userDetail, setUserDetail] = useState({})
  const {isAuth} = useContext(AuthContext);
  const {id} = useParams();
  const navigate  = useNavigate()
  useEffect(()=>{

    async function getData(){
      const data = await fetch(`http://localhost:8080/employee/${id}`).then((d) =>d.json());
      setUserDetail(data)
    }
    getData();
  },[])
console.log(userDetail)
if(!isAuth){
  return (
    navigate('/login')
  )
}
    return (
    <>
        {
          // userDetail.map((e) =>(
            <div className="user_details App">
            <img className="user_image" src={userDetail.image} />
            <h4 className="user_name">{userDetail.employee_name}</h4>
            <span className="user_salary">{userDetail.salary}$</span>
            <span className="tasks">
              <li className="task">{userDetail.tasks}</li>
            </span>
            Status: <b className="status">{userDetail.status}</b>
            Title: <b className="title">{userDetail.title}</b>
            {/* Show this button only if user is not already terminated (users status is working) */}
            <button className="fire">Fire Employee</button>
            {/* Show this button only if user is not already team lead or terminated */}
            <button className="promote">promote</button>
            </div>
          // ))
        }
      
      </>
    );
  };
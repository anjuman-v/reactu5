import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../App.css"
export const EmployeeList = () => {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    async function getData(){
      const data = await fetch("http://localhost:8080/employee").then((d) =>d.json());
      setUser(data)
    }
    getData();
  },[])

    return (
      <div className="list_container">
        {  user.map((e)=>(
          <Link to={`/employees/${e.id}`}>
 <div className="employee_card"
 style={{
  padding: '15px',
 display:"inline-flex",
 height:"100px",
 width:"200px"
  

}}
 >
 <img className="employee_image" src={e.image}/><br></br>
 <span className="employee_name">{e.employee_name}</span>
 <span className="employee_title">{e.title}</span>
</div>
          </Link>

        ))

        }
        {/* On clicking this card anywhere, user goes to user details */}
       
      </div>
    );
  };
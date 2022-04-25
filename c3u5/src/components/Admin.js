import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom';

export const Admin = () => {
  const [userAdmin, setUserAdmin] = useState({})
  const {isAuth} = useContext(AuthContext)
  const [salary, setSalary] = useState()
  const [image, setImage] = useState()
  const [username, setUsername] = useState()
  const [password, setpassword] = useState()
  const [intern, setIntern] = useState()
  const navigate  = useNavigate()
  if(!isAuth){
    navigate('/login');
  }
    return ( 
      <form className="createEmployee">
        <input type="text" placeholder="Employee Name" name="employee_name" /><br></br><br></br>
        <input type="text" placeholder="Employee id" name="employee_id" /><br></br><br></br>
        <select name="title" onChange={(e)=>{
setIntern(e.target.value)
        }}>
          <option value="intern">Intern</option>
          <option value="Jr Software Developer">Jr Software Developer</option>
          <option value="Sr Software Developer">Sr Software Developer</option>
          <option value="Team Lead">Team Lead</option>
        </select><br></br><br></br>
        <input type="number" placeholder="Salary" name="salary" onChange={(e)=>{
          setSalary(e.target.value)
        }}/><br></br><br></br>
        <input type="text" placeholder="Image" name="image" onChange={(e)=>{
          setImage(e.target.value)
        }}/><br></br><br></br>
        <input type="text" placeholder="User Name" name="username" onChange={(e)=>{
          setUsername(e.target.value)
        }} /><br></br><br></br>
        <input type="password" placeholder="Password" name="password"onChange={(e)=>{
          setpassword(e.target.value)
        }} /><br></br><br></br>
        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          name="tasks"
        /><br></br><br></br>
        <select name="status" id="status">
          <option value="">Select Status</option>
          <option value="terminated">Terminated</option>
          <option value="working">Working</option>
        </select><br></br><br></br>
        <select name="team" id="team">
          <option value="">Select team</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="qa">QA</option>
        </select><br></br><br></br>
        <input className="createUser" type="submit"
        
        
        value={"submit"}
        
         />
      </form>
    );
  };
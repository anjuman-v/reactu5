import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [info, setInfo] = useState([]);
  
  useEffect(()=>{
    async function getData(){
      const data = await fetch("http://localhost:8080/students").then((d)=>d.json());
    
      setInfo(data);

    }
    getData();
  
  },[])
  const selectme =(e)=>{
  let x = e.target.value;
  console.log(e.target.value)
selectsort(x)
  }
  const selectsort = (e,x)=>{
    console.log(e.target.value);
if(e.target.value == "asc"){
  info.sort(function (a,b) {return  info.x.a-info.x.b})
}
else if(e.target.value == "desc"){
  info.sort(function (a,b) {return info.x.b-info.x.a})
}

  }
 
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
              onChange={selectme}
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
     onChange={selectsort}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
      
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>

  

    <tbody className="tbody">
    {/* populate all rows like below: */}
    {
  info.map(elem=>(

    <tr className="row">
      <td className="first_name">{elem.first_name}</td>
      <td className="last_name">{elem.last_name}</td>
      <td className="email">{elem.email}</td>
      <td className="gender">{elem.gender}</td>
      <td className="age">{elem.age}</td>
      <td className="tenth_score">{elem.tenth_score}</td>
      <td className="twelth_score">{elem.twelth_score}</td>
      <td className="preferred_branch">{elem.preferred_branch}</td>
    </tr>

  ))
          }
   </tbody>
        </table>
      </div>
    );
  };
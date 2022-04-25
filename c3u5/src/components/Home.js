import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
let total=0,terminated=0,promoted=0,total_new=0;

export const Home = () => {
  const [userDetail, setUserDetail]= useState([]);
  const {newuser} = useContext(AuthContext);
  console.log(newuser)
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created

    useEffect(()=>{

      async function getData(){
        const data = await fetch(`http://localhost:8080/employee`).then((d) =>d.json());
        setUserDetail(data)
      }
      getData();
    },[])

    
    useEffect(()=>{
    for( let i=0;i<userDetail.length;i++){
if(userDetail[i].status === "terminated"){
  terminated++;
  console.log(userDetail[i].id)
}
// if()

    }
  },[])
  
    return (
      <>
    
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp"> : {userDetail.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{terminated}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{0}</span>
          </div>
          <div>
            Total New: <span className="total_new">{newuser}</span>
          </div>
        </div>
      </>
    );
  };
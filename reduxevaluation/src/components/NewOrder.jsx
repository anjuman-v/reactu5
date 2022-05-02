import { useState, useEffect } from "react";

export const NewOrder = () => {
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    const [problem, setProblem] = useState();
    const [owner, setOwner] = useState();
    const [brand, setBrand] = useState();
    const[map, setMap] = useState();
    
    const getData = async () => {
        const data = await fetch("http://localhost:8080/orders").then((d) => d.json());
        console.log(data);
        setMap(data);
      }
      console.log(map)

    return (
      <div>
        <div className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
            onChange={(e)=>{
                setProblem(e.target.value);
            }}
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            readOnly
            onChange={(e)=>{
                setOwner(e.target.value);
            }}
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
            onChange={(e)=>{
                setBrand(e.target.value);
            }}
          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit"  
          
          onClick={() => {
         
            const payload = {
              "problem": problem,
              "owner_name": owner,
              "brand": brand,
              "cost": "$235",
              "status": "Done",
              

            };

            console.log(payload)
            fetch("http://localhost:8080/orders", {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(payload),
            }).then(() => {
              getData();
            })
          }}
          >submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
          <div className="past-orders">
            <span className="id"></span>. <span className="problem"></span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            </span>
            <p className="status">Status: </p>
            <hr />
          </div>
        </div>
      </div>
    );
  };
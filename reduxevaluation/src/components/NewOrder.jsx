import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
import {addOrder} from "../Redux/actions";
const axios = require("axios");

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`

  const [order, setOrder] = useState({
       problem: "",
       brand: "",
       owner_name: "",
       cost :"",
       status : ""
  });



  const orders = useSelector((store) => store.order) || [];

       const dispatch = useDispatch();

       const handlechange = (e) => {
          let {name, value} = e.target;
          setOrder({...order, [name]:value})
       }

          const handleSubmit = (e) => {
            e.preventDefault();
              axios.post("http://localhost:8080/orders", order).then(() => 
              setOrder({
                problem: "",
                brand: "",
                owner_name: "",
                cost :"",
                status : ""
              })
              ,getOrders())
      
          }
         
          useEffect(() => {
            getOrders()
        },[])
 
        const getOrders = () => {
            axios.get("http://localhost:8080/orders").then(({ data }) => {
                dispatch(addOrder(data));
            })
        }

        // console.log(orders)




  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
        <input
          className="new-problem"
          type="text"
          name="problem"
          value = {order.problem}
          placeholder="Enter problem"
          onChange={handlechange}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          value={order.owner_name}
          placeholder="yourname"
          
          onChange={handlechange}
        />
        <input
          className="brand"
          type="text"
          name="brand"
          value={order.brand}
          placeholder="Enter brand name"
          onChange={handlechange}
        />
        <input
          className="cost"
          type="text"
          name="cost"
          value={order.cost}
          placeholder="Enter cost"
          onChange={handlechange}
        />
        <input
          className="status"
          type="text"
          name="status"
          value={order.status}
          placeholder="Enter status name"
          onChange={handlechange}
        />
        {/* Create new problem, show it in below form immediately */}
        <input type="submit" className="submit" value="submit"/>
        </form>
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

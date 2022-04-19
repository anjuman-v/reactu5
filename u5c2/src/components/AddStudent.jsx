import React, { useState } from 'react'

export default function AddStudent() {
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [tenth, setTenth] = useState(10)
  const [twelve, setTwelve] = useState(12)
  const [select, setSelect] = useState("")
  const [gender, setGender] = useState("")
//  const handlechange = (e)=>{
// const {name,value} = e.target;
// setGender({
//   [name]:value
// });
//  }
const handlechange = (e)=>{
  if(e.target.value=="male"){
    setGender("male")
  }else {
    setGender("female")
  }
}
  // const [lastName, setlastName] = useState("")
  return (
    <div>
        <button>Go To Student List</button>
 <form className="addstudent">
    <div>
      Firstname:{" "}
      <input
        type="text"
        name="first_name"
        className="first_name"
        placeholder="enter first name"
        onChange={(e)=>{
          setName(e.target.value);
        }}
      />
    </div>
    <div>
      {" "}
      Last Name:
      <input
        type="text"
        name="last_name"
        className="last_name"
        placeholder="enter last name"
        onChange={(e)=>{
          setlastName(e.target.value);
        }}
      />
    </div>
    <div>
      {" "}
      Email:
      <input
        type="email"
        name="email"
        className="email"
        placeholder="enter email"
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
    </div>

    <div>
      Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
      <div>
        Male
        <input
          name="gender"
          className="male"
          type="radio"
          value={"male"}
          onChange={handlechange}
        />{" "}
        Female{" "}
        <input
          name="gender"
          className="female"
          type="radio"
          value={"female"}
          onChange={handlechange}
        />
      </div>
    </div>
    <div>
      Age{" "}
      <input
        type="number"
        name="age"
        className="age"
        placeholder="enter age"
        onChange={(e)=>{
          setAge(e.target.value);
        }}
      />
    </div>
    <div>
      Tenth Score:{" "}
      <input
        type="number"
        name="tenth_score"
        className="tenth_score"
        placeholder="enter 10th score"
        onChange={(e)=>{
          setTenth(e.target.value);
        }}
      />{" "}
    </div>
    <div>
      Twelth Score:{" "}
      <input
        type="number"
        name="twelth_score"
        className="twelth_score"
        placeholder="enter 12th score"
        onChange={(e)=>{
          setTwelve(e.target.value);
        }}
      />{" "}
    </div>
    <div>
      <select
        value={""} // select dropdown needs both value and onChange attributes
        name="preferred_branch"
        className="preferred_branch"
        onChange={(e)=>{
          setSelect(e.target.value);
        }}
      >
        <option value="law">law</option>
        <option value="commerce">commerce</option>
        <option value="science">science</option>
        <option value="sports">sports</option>
        <option value="arts">arts</option>
        <option value="acting">acting</option>
      </select>
    </div>

    <input className="submit" type="submit" onClick={(e)=>{
      e.preventDefault();
      console.log("i am clicked")
      const payload ={
        "first_name":name,
        "last_name":lastName,
        "email":email,
        "gender":gender,
        "age":age,
        "tenth_score":tenth,
        "twelth_score":twelve,
        "preferred_branch":select
      };
      console.log(payload)
      fetch("http://localhost:8080/students",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(payload)

      })
    }} value="Submit" />
    {
      // <div className="error"></div>
      // show this div with proper error before submitting form, if there's anything not provided
      // eg: first name missing, age cannot be greater than 100 etc
    }
  </form>
    </div>

   
  )
}
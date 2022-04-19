import { useState } from "react";
import "./App.css";
function App() {
  const [inv, setInv] = useState({
    score: 76,
    wicket: 2,
    over: 8.4,
    
  });

  
  const adding1 = ()=>{
    inv.score = inv.score+1
    setInv({
     ...inv 
    })
  }
  const adding4 = ()=>{
    inv.score = inv.score+4
    setInv({
     ...inv 
    })
  }

  const adding6 = ()=>{
    inv.score = inv.score+6
    setInv({
     ...inv 
    })
  }

const addwicket = () =>{
  inv.wicket = inv.wicket +1
  setInv({
    ...inv
  })
}
 
const addover = () =>{
  inv.over = inv.over +0.1
  setInv({
    ...inv
  })
}

  return (

    <div className="App">
      
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              inv.score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              inv.wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              inv.over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={adding1} className="addScore1">Add 1</button>
        <button  onClick={adding4} className="addScore4">Add 4</button>
        <button onClick={adding6} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        inv.wicket
        <button onClick={addwicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        inv.over
        <button onClick={addover}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
     
      
    <div className="text">
      {inv.score >= 100 ? "India Won":""}
    </div>
      
    </div>
  );
}

export default App;
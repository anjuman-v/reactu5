import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetail } from "./components/EmployeeDetail";
import { Admin } from "./components/Admin";
 import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees/:id" element={<EmployeeDetail/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth" element={<ProtectedRoute/>}/>
      
        {/* Routes here */}
        
        </Routes>

    </div>
  );
}

export default App;
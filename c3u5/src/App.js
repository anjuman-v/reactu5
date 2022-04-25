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
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employees/:id" element={<ProtectedRoute><EmployeeDetail/></ProtectedRoute>}></Route>
        <Route path="/employees" element={<EmployeeList/>}></Route>
        <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      
        {/* Routes here */}
        
        </Routes>

    </div>
  );
}

export default App;
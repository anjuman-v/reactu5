import { Link } from "react-router-dom"
import { Routes, Route} from 'react-router-dom';
import {Home} from './Home';
import {NewOrder} from './NewOrder';
import {Orders } from './Orders'
export const Router = () =>{
    
    return (
        <>
          
          {/* Add Routes here */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/neworders' element={<NewOrder />}/>
            <Route path='/orders' element={<Orders />}/>
            {/* <Route path='/todo/:id' element={<ProductsDetailsPage/>}/> */}
    
          </Routes>
        </>
      );
}


import './App.css'
// import testImage from './logo512.png'
// import {  useEffect, useState } from 'react';
import { ProductProvider } from './context/ProductProvider';
import { Routes,Route} from 'react-router-dom';
import { AdminView } from './pages/AdminView';
import { GuestView } from './pages/GuestView';
import { ProductDetail } from './pages/ProductDetail';


function App() {
  // const [user,setUser]=useState("guest")
  // const navigate=useNavigate()

    // useEffect(()=>{
    //   if(user==="admin") navigate("/admin")
    //     else if(user==="guest") navigate("/")
    // },[user,navigate])


    return (
     < ProductProvider className="App">
        
      {/* <div className="flex justify-center gap-5 my-6">
        <label className="flex items-center gap-2 cursor-pointer bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all duration-200">
          <input
            type="radio"
            name="role"
            value="guest"
            checked={user==="guest"}
            onClick={() => setUser("guest")}
            className="accent-teal-400 w-4 h-4"
          />
          <span className="text-sm font-medium">Guest</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-all duration-200">
          <input
            type="radio"
            name="role"
            value="admin"
            checked={user==="admin"}
            onClick={() => setUser("admin")}
            className="accent-teal-400 w-4 h-4"
          />
          <span className="text-sm font-medium">Admin</span>
        </label>
      </div> */}

      
      <Routes>
        <Route 
        path="/" 
        element={<GuestView/>} 
        />
        
        <Route 
        path="/admin" 
        element={<AdminView/>}
        />
        <Route
        path='/product/:id'
        element={<ProductDetail />}
        />
      </Routes>

     </ProductProvider>

  );
}

export default App;

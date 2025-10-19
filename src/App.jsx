import './App.css'
// import testImage from './logo512.png'
import {  useState } from 'react';
import { Products } from './components/Products';
import { ProductInputForm } from './components/ProductInputForm';
import ProductTable from './components/productTable';
import Pagination from './utility/Pagination';
import { ProductProvider } from './context/ProductProvider';

function App() {
  const [user,setUser]=useState("guest")

    return (
     < ProductProvider className="App">
        
          <div>
            <label>
            <input  type="radio" name="role" value="guest" onClick={(e)=>setUser(e.target.value)}/>
            Guest
          </label>

          <label>
            <input  type="radio" name="role" value="admin" onClick={(e)=>setUser(e.target.value)}/>
            Admin
          </label>
          </div>

          {/* <nav>
            <Link to>Admin</Link>
            <Link >Guest</Link>
          </nav> */}

          { 
          user==="admin" &&(
          <>
          <ProductInputForm /> 
          <ProductTable />
          <Pagination/>
          </>)
          }

          {
          user==="guest" &&
          (<>
          <Products/> 
          <Pagination/>      
          </>)
          }


     </ProductProvider>

  );
}

export default App;

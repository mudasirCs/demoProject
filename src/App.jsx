import {  useState } from 'react';
import { Products } from './components/Products';
import testImage from './logo512.png'
import { ProductInputForm } from './components/ProductInputForm';
import './App.css'
import ProductTable from './components/productTable';
import Pagination from './utility/Pagination';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function App() {
  const [user,setUser]=useState("admin")
  const [editingProduct,setEditingProduct]=useState(null)

    const [pageSize]=useState(10)
    const [currentPage,setCurrentPage]=useState(1)
    const [products,setProducts]=useState([
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        { id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
        {id: crypto.randomUUID(),
          name:"icecream",
          price:18,
          stock:10,
          image:testImage,
          description:"This is the description of an icecream"
        },
        {id: crypto.randomUUID(),
          name:"chocolate",
          price:10,
          stock:100,
          image:testImage,
          description:"This is the description of a choco"
        },
      ])

    const start=(currentPage-1)*pageSize
    const end= start+pageSize
    const currentProducts=products.slice(start,end)

    function handleDelete(id){
      // eslint-disable-next-line no-restricted-globals
      const confirmDeletion= confirm("Are you sure you want to delete")
      const productToBeDeleted=products.find(p=>p.id===id)
      if(confirmDeletion){
        setProducts(products.filter(p=>p.id!==id))
      }
      else{ return}

      toast(`${productToBeDeleted.name} has been deleted`)
    }

    function handleEdit(id){
      const productToBeEdited=products.find(p=>id===p.id)
      setEditingProduct(productToBeEdited)
    }

    return (
    <div className="App">
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
      <ProductInputForm 
        products={products} 
        setProducts={setProducts} 
        editingProduct={editingProduct} 
        setEditingProduct={setEditingProduct}
      /> 
      <ProductTable 
        products={currentProducts} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
      /> 
      <Pagination 
        totalProducts={products.length} 
        pageSize={pageSize} 
        setCurrentPage={setCurrentPage}
      />
      </>)
      }

      {
      user==="guest" &&
      (<>
      <Products products={products}/> 
      <Pagination 
        totalProducts={products.length} 
        pageSize={pageSize} 
        setCurrentPage={setCurrentPage}
      />      
      </>)
      }
    </div>
  );
}

export default App;

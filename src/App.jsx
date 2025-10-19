import {  useState } from 'react';
// import { Products } from './components/Products';
import testImage from './logo512.png'
import { ProductInputForm } from './components/ProductInputForm';
import './App.css'
import ProductTable from './components/productTable';
import Pagination from './utility/Pagination';

function App() {
  const [editingProduct,setEditionProduct]=useState(null)

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
      const productToBeDeleted=products.find(p=>p.id===id)
      alert(JSON.stringify(productToBeDeleted))
      setProducts(products.filter(p=>p.id!==id))
    }

    function handleEdit(id){
      const productToBeEdited=products.find(p=>id===p.id)
      setEditionProduct(productToBeEdited)
    }

    return (
    <div className="App">
      <ProductInputForm products={products} setProducts={setProducts} editingProduct={editingProduct}/>
      <ProductTable products={currentProducts} handleDelete={handleDelete} handleEdit={handleEdit}/>
      <Pagination totalProducts={products.length} pageSize={pageSize} setCurrentPage={setCurrentPage}/>
      {/* <ProductRow  name="twix" price="10" stock="100" image={testImage} onDelete={onDelete} onEdit={onEdit}/> */}
      {/* <Products products={products}/> */}
    </div>
  );
}

export default App;

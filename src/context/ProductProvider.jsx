import { useState,createContext } from "react"
import { useLocalProducts } from "../hooks/useLocalProducts"
import { toast } from "react-toastify"

export const ProductContext=createContext(null)

export function ProductProvider({children}){
    const [products,setProducts]=useLocalProducts()
    const [editingProduct,setEditingProduct]=useState(null)
    
    const [pageSize]=useState(10)
    const [currentPage,setCurrentPage]=useState(1)


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
 
    return(
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                editingProduct,
                setEditingProduct,
                handleDelete,
                handleEdit,
                currentPage,
                setCurrentPage,
                pageSize,
                currentProducts
            }}   
        >
            {children}
        </ProductContext.Provider>
    )


}
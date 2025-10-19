import ProductRow from "./productRow"
import { ProductContext } from "../context/ProductProvider"
import { useContext } from "react"

export default function ProductTable(){
    const {currentProducts,handleDelete,handleEdit}=useContext(ProductContext)

    return(
        <table className="flex flex-col justify-center items-center">
            <thead>
                <tr className="table-row">
                    <th className="w-96">id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {currentProducts.map((p,index)=>{
             return (
                        <ProductRow 
                        key={index}
                        id={p.id}
                        name={p.name}  
                        price={p.price}
                        stock={p.stock}
                        image={p.image}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        />
                    )
            })}
            </tbody>
        </table>
    )
}
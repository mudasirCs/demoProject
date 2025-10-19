import ProductRow from "./productRow"

export default function ProductTable({products,handleDelete,handleEdit}){
    return(
        <table className="flex flex-col justify-center items-center">
            <thead>
                <tr className="table-row">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Image</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {products.map((p,index)=>{
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
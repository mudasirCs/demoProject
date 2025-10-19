export default function ProductRow({id,name,price,stock,image,handleDelete,handleEdit}){
    return(
        <tr className="table-row">
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>
                <img
                className=" w-14 h-14 rounded-full" 
                src={image} 
                alt={`This is a ${name}`}
                />
            </td>
            <td className="action-btn">
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </td>
            <td className="action-btn">
                <button onClick={()=>handleEdit(id)}>Edit</button>
            </td>
        </tr>
    )
}
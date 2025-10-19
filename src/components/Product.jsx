import { useNavigate } from "react-router-dom"

export function Product({id,name,price,stock,image,description}){
  const navigate=useNavigate()
  return(
    <div 
    className="flex flex-col gap-3 w-56 min-h-72 bg-blue-200 
    rounded-xl p-2 justify-center items-center text-wrap text-black
  hover:bg-blue-400 cursor-pointer transition-all duration-200"
    onClick={() =>{
       navigate(`/product/${id}`)
      }}
    >
      <div className="bg-white rounded-3xl w-32 h-32 flex justify-center items-center">        
      <img className=" w-20 h-20 rounded-full" src={image} alt={`Imagine this is a ${name}`}/>
      </div>
      <p className=" text-xl">{name}</p>
      <p className="text-lg">Cost:${price}</p>
    
    </div>
  )
}

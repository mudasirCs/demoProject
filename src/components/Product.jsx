export function Product({name,price,stock,image,description}){
  
  return(
    <div className="flex flex-col w-56 h-48 bg-blue-200 
    rounded-xl p-2 justify-center items-center text-wrap text-black
    hover:bg-blue-400">
      <img className=" w-20 h-20 rounded-full" src={image} alt={`Imagine this is a ${name}`}/>
      <p>{name}</p>
      <p>Cost:${price}</p>
      {/* <p>Items available:{stock}</p> */}
      {/* <p className="overflow-scroll h-20 scroll-smooth scrollbar-hide">Description: {description}</p> */}
    </div>
  )
}

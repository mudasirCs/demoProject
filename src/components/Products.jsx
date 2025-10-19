import { Product } from "./Product";

export function Products({products}){

    return (
        <div className="flex gap-5 flex-wrap justify-around mt-10">
        {products?.map((p,index)=>{
            return(  <Product
                    key={index} 
                    name={p.name} 
                    price={p.price} 
                    stock={p.stock} 
                    image={p.image} 
                    description={p.description}/>
                    )
                }
            )
        }
     
        </div>
    )
        
}
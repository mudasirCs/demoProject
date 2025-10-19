import { useContext } from "react";
import { Product } from "./Product";
import { ProductContext } from "../context/ProductProvider";

export function Products(){
    const {currentProducts}=useContext(ProductContext)
 
    return (
        <div className="flex gap-5 flex-wrap justify-around mt-10">
        {currentProducts?.map((p,index)=>{
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
import { Products } from "../components/Products"
import Pagination from "../utility/Pagination"

export function GuestView(){
    return (
        <>
          <Products/> 
          <Pagination/>      
        </>
    )
}
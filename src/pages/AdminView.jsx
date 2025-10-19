import { ProductInputForm } from "../components/ProductInputForm"
import ProductTable from "../components/productTable"
import Pagination from "../utility/Pagination"

export function AdminView(){
    return(
          <>
          <ProductInputForm /> 
          <ProductTable />
          <Pagination/>
          </>
    )
}
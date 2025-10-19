import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export default function Pagination() {
  const { pageSize, currentPage, setCurrentPage, products } = useContext(ProductContext);
  const pages = [];

  for (let i = 0; i < Math.ceil(products.length / pageSize); i++) {
    pages.push(i + 1);
  }

  return (
    <div className="flex gap-3 justify-center items-center mt-20">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`w-10 h-10 text-lg font-bold rounded-full transition-all duration-200
            ${
              currentPage === pageNumber
                ? "bg-teal-900 text-white scale-110 shadow-md"
                : "bg-teal-500 text-black hover:bg-teal-900 hover:text-white"
            }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

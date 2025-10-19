import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export function ProductDetail() {
  const { id } = useParams(); 
  const { products } = useContext(ProductContext);

  const product = products.find((p) => String(p.id) === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col items-center max-w-md mx-auto mt-10 bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-8 text-gray-800 border border-gray-200">
    <div className="bg-white rounded-full w-40 h-40 flex justify-center items-center shadow-md mb-6">
        <img
        className="w-32 h-32 object-cover rounded-full"
        src={product.image}
        alt={product.name}
        />
    </div>

    <h2 className="text-2xl font-semibold text-teal-700 mb-2">{product.name}</h2>

    <p className="text-lg font-medium text-gray-700">
        💰 <span className="font-semibold">${product.price}</span>
    </p>

    <p className="text-md text-gray-600 mt-1">
        🏷️ In stock: <span className="font-semibold">{product.stock}</span>
    </p>

    <hr className="my-4 w-full border-t border-gray-300" />

    <p className="text-sm text-gray-700 text-center leading-relaxed">
        {product.description}
    </p>

    <button
        onClick={() => window.history.back()}
        className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full shadow transition-all duration-200"
    >
        ← Back
    </button>
    </div>    
  );
}

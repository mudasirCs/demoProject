import { useEffect, useState } from "react";


export function useLocalProducts(key="products"){
    const [products, setProducts]= useState(()=>{
        const saved=localStorage.getItem(key)
        return saved?JSON.parse(saved):[]
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(products))
    },[products,key])

    return [products,setProducts]
}
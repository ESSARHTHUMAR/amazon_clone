import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
// import products from "../data/home";
    
export const ProductsContext = createContext(); 

const ProductsProvider = ({children}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProduct(data);
            // console.log(data)
        };
        fetchProduct();
    }, [])

    return <ProductsContext.Provider value={{product}}>{children}</ProductsContext.Provider>
}

export default ProductsProvider;
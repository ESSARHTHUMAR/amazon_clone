import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
// import products from "../data/home";
    
export const CategoryContext = createContext(); 

const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await fetch("https://fakestoreapi.com/products/categories")
            const data = await res.json();
            setCategory(data);
            console.log(data)
        };
        fetchCategory();
    }, [])

    return <CategoryContext.Provider value={{category}}>{children}</CategoryContext.Provider>
}

export default CategoryProvider;
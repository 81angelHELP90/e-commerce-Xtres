import { createContext, useEffect, useState } from "react";
import helperContext from "./helperContext";

import servicesProducts from "../services/products.js"

export const DinamicContext = createContext();

const ContextProvider = ({ children }) => {
    const [selectedProducts, setSelectedProducts ] = useState([]);
    const [category, setCategory ] = useState([]);
    const [allProducs, setAllProducs ] = useState([]);
    const [cantProducts, setCantProducts ] = useState(0);
    const [totalCost, setTotalCost ] = useState(0);
    const [showList, setShowList] = useState(false); 

    const _setAllProducs = (producs) => {
        setAllProducs(producs)
    }

    const _setCategory = (producs) => {
        const promesa = new Promise((resolve) => {
            resolve(servicesProducts.getUniqueCategories(producs))
        })

        promesa.then(data => {
            setCategory(data)
        })
    }

    const addProducts = (product) => {
        setSelectedProducts(helperContext._addProducts(selectedProducts, product))
    }
   
    const deleteProducts = (product) => {
        setSelectedProducts(helperContext._deleteProducts(selectedProducts, product))
    }

    const cartQtyHandler = () => {
        setCantProducts(helperContext._cartQtyHandler(selectedProducts))
    }

    const handleTotalCost = () => {
        setTotalCost(selectedProducts.reduce((acum, item) => acum += item.price * item.Cant, 0))
    }

    const setShowListCart = () => {
        (showList) ? setShowList(false) : setShowList(true)
    }

    return ( 
        <DinamicContext.Provider value={{ 
                selectedProducts, 
                cantProducts, 
                totalCost, 
                showList,
                allProducs,
                category,
                _setAllProducs,
                _setCategory,
                addProducts,
                deleteProducts, 
                cartQtyHandler, 
                handleTotalCost, 
                setShowListCart
                }}>
            {children}
        </DinamicContext.Provider>
    )
}

export default ContextProvider;
 
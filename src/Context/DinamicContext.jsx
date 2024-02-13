import { createContext, useEffect, useState } from "react";
import helperContext from "./helperContext";

export const DinamicContext = createContext();

const ContextProvider = ({ children }) => {
    const [selectedProducts, setSelectedProducts ] = useState([]);
    const [cantProducts, setCantProducts ] = useState(0);
    const [totalCost, setTotalCost ] = useState(0);
    const [showList, setShowList] = useState(false);
   
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
 
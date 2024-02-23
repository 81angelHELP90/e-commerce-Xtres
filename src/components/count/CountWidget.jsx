import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState, useContext, useEffect } from 'react'
import '../../App.css'
import { DinamicContext } from "../../Context/DinamicContext.jsx"

const CountWidget = ({ item }) => {
    const { addProducts, deleteProducts, cartQtyHandler, handleTotalCost } = useContext(DinamicContext)
    const [count, setCount] = useState((item.Cant) ? item.Cant : 0);

    function setCountDown() {
        deleteProducts(item)
        cartQtyHandler()
        setCount((item.Cant === 0) ? item.Cant : item.Cant - 1)
    }

    function setCountUp() {
        addProducts(item)
        cartQtyHandler()
        setCount(item.Cant + 1)  
    }

    useEffect(() => {
        setCount(count)
        handleTotalCost()
    }, [count])

    const CountNumber = () => {
        return (
            <div className="box-count">
                <div className="element-count" onClick={setCountDown}>
                    <img src="../../../public/remove-outline.svg" width="24" alt="menos" />
                </div>
                <div className="element-count">
                    <button type="button" className="navbar-toggler">{ (item.Cant > 0) ? item.Cant : count }</button>
                </div>
                <div className="element-count" onClick={setCountUp}>
                    <img src="../../../public/add-outline.svg" width="24" alt="mas" />
                </div>
            </div>
        )
    }

    const CountCart = () => {
        return (
            <div className="box-cart-footer" onClick={setCountUp}>
                <img src="../../../public/cart_black.svg" width="40" alt="menos" />
            </div>
        )
    }

    return ( 
        (count > 0 || item.Cant > 0) ? <CountNumber/> : <CountCart/>
    )
}
export default CountWidget 
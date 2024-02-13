import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState, useContext } from 'react'
import '../../App.css'
import { DinamicContext } from "../../Context/DinamicContext.jsx"

const CountWidget = ({item}) => {
    const { addProducts, deleteProducts, cartQtyHandler } = useContext(DinamicContext)
    const [count, setCount] = useState(0);

    function setCountDown() {
        setCount((count === 0) ? count : count - 1)
        deleteProducts(item) 
        cartQtyHandler()
    }

    function setCountUp() {
        setCount(count + 1) 
        addProducts(item) 
        cartQtyHandler()
    }

    return (
        (count > 0) ?
            <div className="box-count">
                <div className="element-count" onClick={setCountDown}>
                    <img src="../../../public/remove-outline.svg" width="24" alt="menos" />
                </div>
                <div className="element-count">
                    <button type="button" className="navbar-toggler">{count}</button>
                </div>
                <div className="element-count" onClick={setCountUp}>
                    <img src="../../../public/add-outline.svg" width="24" alt="mas" />
                </div>
            </div> :
            <div onClick={setCountUp}>
                <img src="../../../public/cart_black.svg" width="40" alt="menos" />
            </div>

    )
}
export default CountWidget 
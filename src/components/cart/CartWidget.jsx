import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useContext, useEffect, useState } from 'react'
import '../../App.css'
import { DinamicContext } from "../../Context/DinamicContext.jsx"


const ItemsCarts = ({products}) => {
    return (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {products.map(item => ( 
                <li key={item.id} className="cart-li-dropdown">
                    <img src={item.images[0]} className="img-cart my-1" alt="imagen cart"/>
					<p className="my-2 cart-li-dropdown-title">{item.title}</p>
                    <p className="my-2">{"$ " + item.price * item.Cant}</p>
                    <span className="badge bg-primary rounded-pill my-2" id="countItem-dropdown">{item.Cant}</span>
				</li>
            ))}
        </ul>
    )
}

const EmptyCarts = () => {
    return (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
                <p>NO HAY ELEMENTOS EN LE CARRITO</p>
            </li>
        </ul>
    )
}

const CartWidget = () => {
    const [valorCart, setValorCart] = useState(0)
    const { cantProducts, totalCost, handleTotalCost, setShowListCart, selectedProducts } = useContext(DinamicContext)

    useEffect(() => {
        setValorCart(cantProducts)
    }, [cantProducts])

    function showCartContent() {
        setShowListCart()
        handleTotalCost()
    }

    return (
        <div className="box-cart">
            <div className="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="mt-1 dropdown-toggle bi bi-cart"
                    viewBox="0 0 16 16" id="dropdownMenuButton" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                {(selectedProducts.length > 0) ? <ItemsCarts products={selectedProducts}/> : <EmptyCarts/>}
            </div>
            <span className="badge bg-primary rounded-pill" id="countItem">{valorCart}</span>
        </div>
    )
}
export default CartWidget
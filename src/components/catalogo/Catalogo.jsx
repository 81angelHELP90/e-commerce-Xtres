import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import servicesProducts from "../../services/products.js"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Catalogo = () => {
    const [itemsCatalogo, setItemsCatalogo] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            resolve(servicesProducts.getUniqueCategories)
        })

        promesa.then(data => {
            setItemsCatalogo(data)
        })

    }, [])

    return (
          <ul className="dropdown-menu">
            {itemsCatalogo.map(product => (
                <NavLink className="nav-link text-while" to={`/categoria/${product.id}`}>{product.name}</NavLink>
            ))}
          </ul>
    )
}

export default Catalogo
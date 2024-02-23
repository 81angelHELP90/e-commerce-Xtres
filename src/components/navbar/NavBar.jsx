import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import CartWidget from "../cart/CartWidget.jsx"
import Catalogo from "../catalogo/Catalogo.jsx"
import '../../App.css'
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const NavBar = () => {
    const [nameProduct, setNameProduct] = useState()
    
    useEffect(() => {
        setNameProduct(nameProduct)
    }, [nameProduct])

    const handleInput = ({ target }) => {
        setNameProduct(target.value)
    }
    
    return (
        <div className="nuevo">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-2">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-while" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <Catalogo />
                            </li>
                        </ul>
                        <form className="d-flex my-3 mx-2" role="search">
                            <input className="form-control me-2" type="search" value={nameProduct} onChange={handleInput} placeholder="Buscar por palabra" aria-label="Search" />
                            <NavLink to={`/producto/${nameProduct}`}>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </NavLink>
                        </form>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar

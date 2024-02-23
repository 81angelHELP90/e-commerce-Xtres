import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
//import servicesProducts from "../../services/products.js"
import { useEffect, useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import { DinamicContext } from "../../Context/DinamicContext.jsx"

const Catalogo = () => {
    const { category } = useContext(DinamicContext)
    return (
          <ul className="dropdown-menu" id="catalogo" >
            {category.map((cat, i) => (
                <div key={cat.id} className="box-category">
                  <img src={cat.image} className="card-img-top" alt="imagen detalle" />
                  <NavLink className="nav-link text-while" to={`/categoria/${cat.id}`}>{cat.name}</NavLink>
                </div>
            ))}
          </ul>
    )
}

export default Catalogo
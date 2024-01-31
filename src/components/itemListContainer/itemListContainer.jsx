import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useEffect, useState} from "react"
import servicesProducts from "../../services/products.js"
import '../../App.css'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

const ItemListContainer = () => { //categotyId
    const [products, setProducs] = useState([])
    const { categotyId } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => { 
            resolve(categotyId ? servicesProducts.getById(categotyId, false) : servicesProducts.getSrvProducs)
        })

        promesa.then(data => {
            setProducs(data)
        })
    
        /*VER PORQUE NO FUNCIONA
        new Promise((resolve) => {
            resolve(servicesProducts.getSrvProducs)
        })
        .then(data => {
            setProducs(data)
        })
        .catch(error => {
            console.log(error)
        })
        para el detalle o busqueda por producto
        <NavLink to="/">
            <img src={product.id} className="card-img-top" alt="..." />
        </NavLink>
        */
    }, [categotyId])

    return (
        <div className="container-fluid">
            <div className="cards-box">
                {products.map(product => (
                    <div className="card card-box">
                        <NavLink to={`/detalle/${product.id}`}>
                            <img src={product.images[0]} className="card-img-top" alt="..." />
                        </NavLink>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer
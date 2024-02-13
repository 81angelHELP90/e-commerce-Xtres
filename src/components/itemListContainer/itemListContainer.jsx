import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import {useContext, useEffect, useState} from "react"
import servicesProducts from "../../services/products.js"
import CountWidget from "../count/CountWidget.jsx"
import '../../App.css'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"

const ItemListContainer = () => { 
    const [products, setProducs] = useState([])
    const { categotyId, nameProduct } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => { 
            let callFunction = null

            if(categotyId && !nameProduct)
                callFunction = servicesProducts.getById(categotyId, false)

            if(!categotyId && nameProduct)
                callFunction = servicesProducts.getByProductName(nameProduct)

            if(!categotyId && !nameProduct)
                callFunction = servicesProducts.getSrvProducs()

            resolve(callFunction)
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
    }, [categotyId, nameProduct])

    return (
        <div className="container-fluid">
            <div className="cards-box">
                {products.map(product => (
                    <div key={product.id} className="card card-box">
                        <NavLink to={`/detalle/${product.id}`}>
                            <img src={product.images[0]} className="card-img-top" alt="imagen detalle" />
                        </NavLink>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="box-description">
                                <CountWidget item={product}/>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer
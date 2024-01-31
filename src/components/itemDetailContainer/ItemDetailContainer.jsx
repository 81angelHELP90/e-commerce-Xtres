import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import '../../App.css'
import servicesProducts from "../../services/products.js"
import CountWidget from "../count/CountWidget.jsx"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])
    const { productId } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            resolve(servicesProducts.getById(productId, true))
        })

        promesa.then(data => {
            setProduct(data[0])
            setImages((data[0]) ? data[0].images : [])
        })
    }, [productId])

    /*
        menor a 890 px
    */

    return (
        <div className="container-fluid">
            <div className="detail-box">
                <div className="detail-card">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="box-description">
                            <CountWidget />
                        </div> 
                    </div>
                </div>
                <div className="detail-card">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {images.map(imagen => (
                                <div className="carousel-item active">
                                    <img src={imagen} className="d-block w-100" alt="Detalle imagen" />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
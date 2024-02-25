import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useEffect, useState, useContext } from "react"
import servicesProducts from "../../services/products.js"
import CountWidget from "../count/CountWidget.jsx"
import '../../App.css'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { DinamicContext } from "../../Context/DinamicContext.jsx"

import { collection, getDocs, getDoc, doc, getFirestore, snapshotEqual } from "firebase/firestore"

const ItemListContainer = () => {
    const { _setAllProducs, _setCategory, allProducs } = useContext(DinamicContext)
    const [products, setProducs] = useState([])
    const { categotyId, nameProduct } = useParams()
   
    useEffect(() => {
        const dbInstance = getFirestore()

        if (categotyId) 
            setProducs(servicesProducts.getById(categotyId, false))

        if (nameProduct) 
            setProducs(servicesProducts.getByProductName(nameProduct))
        

        if (!categotyId && !nameProduct) {
            const getCollectionRef = collection(dbInstance, import.meta.env.VITE_COLECTION_ITEMS_PRODUCTS)
        
            getDocs(getCollectionRef) 
                .then((snapshot) => { 
                    let oList = snapshot.docs.map(doc => doc.data())
                    oList.forEach((item, i) => {
                        item.Cant = (allProducs[i] && allProducs[i].Cant) ? allProducs[i].Cant : 0
                    })
                    setProducs(oList);

                    return oList
                })
                .then(data => { 
                    _setAllProducs(data) 

                    return data
                })
                .then(data => { 
                    _setCategory(data) 
                })
                .catch(err => console.log(`Error Farebase getItems: ${err}`))
        }
    }, [categotyId, nameProduct])
    
    return (
        <>
            {products.map(product => (
                <div key={product.id} className="card">
                    <NavLink to={`/detalle/${product.id}`}>
                        <img src={product.images[0]} className="card-img-top" alt="imagen detalle" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text text-center">{`Price: $ ${product.price}`}</p>
                        <div className="box-description">
                            <CountWidget item={product} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemListContainer
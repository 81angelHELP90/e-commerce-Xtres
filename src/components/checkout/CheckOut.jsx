import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useContext, useState } from 'react'
import '../../App.css'
import { NavLink } from "react-router-dom"
import { DinamicContext } from "../../Context/DinamicContext.jsx"

const ShowSuccess = () => {

    function goHome(){
        setTimeout(() => {
            location.reload()
        }, 200)
    }

    return (
        <NavLink to="/">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Listo! Su compra fue confirmada correctamente.</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={goHome}></button>
            </div>
        </NavLink>
    )
}

const ShowError = () => {

    function showError(){
        let messageError = document.getElementById("ErrorElement")
        messageError.classList.add("hiddemComponent")
    }
    
    return (
        <div id="ErrorElement" className="hiddemComponent alert alert-danger errorBox">
            <strong>Error! Todos los datos son obligatorios.</strong>
            <button type="button" className="btn-close" aria-label="Close" onClick={showError}></button>
        </div>
    )
}

const validateDataPayment = (inputs) => {
    for(let i=1; i < inputs.length; i++){
        if(inputs[i].value === "")
            return false
    }

    return true
}

const CheckOut = () => {
    const { totalCost, selectedProducts } = useContext(DinamicContext)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function FinishPayment(){
        let messageElement = document.getElementById("box-message")
       
        if(validateDataPayment(document.getElementsByTagName("INPUT"))) {
            setShowSuccessMessage(true)
        } else {
            setShowSuccessMessage(false) 
            let messageError = document.getElementById("ErrorElement")
            messageElement.classList.remove("hiddemComponent")
            messageError.classList.remove("hiddemComponent")
        }
    }
    
    return (
        <div className="container box-checkout">
            <div id="box-message" className="hiddemComponent">
                {(showSuccessMessage) ? <ShowSuccess /> : <ShowError />}
            </div>
            {/*Productos:*/}
            <p className="my-2 mb-3 mt-3 fw-bold">Su compra:</p>
            <div className="checkout-productos mt-3">
                <ol className="list-group list-group-numbered">
                    {selectedProducts.map(item => (
                        <li key={item.id} className="d-flex justify-content-between align-items-start">
                            <img src={item.images[0]} className="img-cart my-1" alt="imagen cart" />
                            <p className="my-2 cart-li-dropdown-title" id="cart-title">{item.title}</p>
                            <p className="my-2" id="cart-price">{"$ " + item.price + " x"}</p>
                            <span className="badge bg-primary rounded-pill my-2" id="countItem-dropdown">{item.Cant}</span>
                            <p className="my-2 mx-2">unidades</p>
                        </li>
                    ))}
                    <div id="checkout-producs-footer">
                        <p className="my-2 mt-5 fw-bold">Total a pagar: $ {totalCost}</p>
                    </div>
                </ol>
            </div>
            {/*Envio:*/}
            <div className="checkout-envio mt-3">
                <p className="my-2 mb-3 fw-bold">Datos de envio: Domicilio</p>
                <div className="row g-3 mb-3">
                    <div className="col-sm-3">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                        <input type="text" className="form-control" required aria-label="Email" />
                    </div>
                    <div className="col-sm-3">
                        <label for="colFormLabelSm" className="col-sm-1 col-form-label col-form-label-sm">Telefono:</label>
                        <div className="box-telephon">
                            <input type="text" className="form-control" id="input-cod" placeholder="Cod. area" aria-label="Codigo"/>
                            <input type="text" className="form-control" id="input-number" aria-label="Numero" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-sm-2">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Provincia</label>
                        <input type="text" className="form-control" aria-label="Provincia" />
                    </div>
                    <div className="col-sm-2">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Localidad</label>
                        <input type="text" className="form-control" aria-label="Localidad"/>
                    </div>
                    <div className="col-sm-2">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Calle</label>
                        <input type="text" className="form-control" aria-label="Calle" />
                    </div>
                    <div className="col-sm-1">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Número</label>
                        <input type="text" className="form-control" aria-label="Numero"/>
                    </div>
                </div>
            </div>
            {/*Pago:*/}
            <div className="checkout-pago mt-3">
                <p className="my-2 mb-3 fw-bold">Información de pago: Tarjeta</p>
                <div className="row g-3 mb-3">
                    <div className="col-sm-2">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
                        <input type="text" className="form-control" aria-label="Provincia"/>
                    </div>
                    <div className="col-sm-2">
                        <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Apellido</label>
                        <input type="text" className="form-control" aria-label="Localidad"/>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-sm-3">
                        <label for="colFormLabelSm" className="col-sm-6 col-form-label col-form-label-sm">Número</label>
                        <input type="text" className="form-control" aria-label="NumeroTar"/>
                    </div>
                    <div className="col-sm-1">
                        <label for="colFormLabelSm" className="col-sm-1 col-form-label col-form-label-sm">Codigo</label>
                        <input type="text" className="form-control" aria-label="CodSeguridad"/>
                    </div>
                </div>
                <div className="checkout-pago-footer mt-3">
                    <button className="btn btn-outline-success" width="10px" type="submit" onClick={FinishPayment}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-check me-2 my-2" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                        Confirmar compra
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CheckOut
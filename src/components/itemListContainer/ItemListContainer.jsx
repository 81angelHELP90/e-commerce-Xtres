import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import '../../App.css'

function ItemListContainer({ greeting }) {
    return (
        <>
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="alert alert-warning alert-dismissible fade show my-5" role="alert">
                <strong>{greeting}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default ItemListContainer
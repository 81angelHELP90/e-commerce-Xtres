import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Error404 from "./components/error404/Error404.jsx"
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import NavBar from "./components/navbar/NavBar.jsx"

const App = () => {

  return (
    <BrowserRouter>
      <div className="container-fluid">
            <div className="row">
              <NavBar className="navBar" />
            </div>
      </div>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categotyId" element={<ItemListContainer />} />
        <Route exact path="/detalle/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

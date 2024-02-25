import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Error404 from "./components/error404/Error404.jsx"
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import CheckOut from "./components/checkout/CheckOut.jsx"
import NavBar from "./components/navbar/NavBar.jsx"
import { React } from "react";
import ContextProvider from "./Context/DinamicContext.jsx"

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="container-fluid">
          <NavBar className="navBar" />
        </div>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:categotyId" element={<ItemListContainer />} />
          <Route exact path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/producto/:nameProduct" element={<ItemListContainer />} />
          <Route exact path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App

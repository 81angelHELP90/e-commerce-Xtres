import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx"
import CartWidget from "./components/cart/CartWidget.jsx"
import CountWidget from "./components/count/CountWidget.jsx"
import { useState } from "react"

const App = () => {

  return (
    <body className="container-fluid">
      <div className="row">
        <header className="box-NavBar">
          <NavBar className="navBar" />
          <CartWidget />
        </header>
        <main>
          <section className="sec-count">
          {/* 15-01-24 */}
            <CountWidget />
            
          </section>
        </main>
      </div>
    </body>
  )
}

export default App

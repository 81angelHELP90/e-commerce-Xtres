import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx"
import CartWidget from "./components/navbar/CartWidget.jsx"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <body className="container-fluid">
        <header className="box-NavBar">
          <NavBar className="navBar"/>
          <CartWidget/>
        </header>
        <div className="container-fluid">
          <div className="row">
          <main>
            <section className="">
              <button type="button" className="btn btn-primary">Primary</button>
            </section>
          </main>
          </div>
        </div>
      </body>
    </>
  )
}

export default App

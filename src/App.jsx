import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx"
import CartWidget from "./components/cart/CartWidget.jsx"

function App() {
  
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
              
            </section>
          </main>
          </div>
        </div>
      </body>
    </>
  )
}

export default App

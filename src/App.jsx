import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx"
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx"

function App() {
  
  return (
    <>
      <body className="container-fluid">
        <header>
          <NavBar className="navBar"/>
          {/* */}
        </header>
        <div className="container-fluid">
          <div className="row">
            <main>
              <section className="col-md-6 offset-md-3 mt-5">
                <ItemListContainer text="Mensaje de prueba.."/>
              </section>
            </main>
          </div>
        </div>
      </body>
    </>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState } from 'react'
import '../../App.css'

import CartWidget from "../cart/CartWidget.jsx"

const CountWidget = () => {
    const [count, setCount] = useState(0);

    function setCountDown() {
        setCount((count === 0) ? count : count - 1)
    }

    function setCountUp() {
        setCount(count + 1)
    }

    return (
        <div className="box-count">
            <div className="element-count" onClick={setCountDown}>
                <div className="element-count-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                    </svg>
                </div>
            </div>
            <div className="element-count">
                <h2>{count}</h2>
            </div>
            <div className="element-count" onClick={setCountUp}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 16">
                    <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
                </svg>
            </div>
            {/* CON ESTE COMPONENTE EN ESTE LUGAR FUNCIONA EL useEfect PERO
            ESTE NO ES EL LUGAR DONDE DEBE ESTAR ESTE COMPONENTE. 
            Como hago para pasarle el valor al componente que se instancia en otro archivo?  
            <CartWidget valor={count}/> 
            */}

        </div>
    )
}
export default CountWidget 
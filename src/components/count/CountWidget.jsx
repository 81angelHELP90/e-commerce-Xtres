import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useState } from 'react'
import '../../App.css'

const CountWidget = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="box-count">
            <div className="element-count" onClick={() => setCount((count) => count - 1)}>
                <h2>-</h2>
            </div>
            <div className="element-count">
                <h2>{count}</h2>
            </div>
            <div className="element-count" onClick={() => setCount((count) => count + 1)}>
                <h2>+</h2>
            </div>
        </div>
    )
}
export default CountWidget 
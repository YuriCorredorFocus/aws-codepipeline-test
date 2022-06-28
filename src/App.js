import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>COUNT: <span data-testid="counter-value">{count}</span></h1>
      <div>
        <button onClick={() => setCount(c => c - 1)} className="button">-1</button>
        <button onClick={() => setCount(c => c + 1)} className="button">+1</button>
      </div>
      <div>
        <button onClick={() => setCount(c => c - 10)} className="button">-10</button>
        <button onClick={() => setCount(c => c + 10)} className="button">+10</button>
      </div>
    </div>
  )
}

export default App

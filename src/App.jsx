import { useState } from 'react'
import './App.css'
import Rutas from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-fluid p-0">
      <Rutas/>
    
    </div>
  )
}

export default App

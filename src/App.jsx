import Home from "./Home"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {


  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App

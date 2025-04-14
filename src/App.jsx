import { CreateBlog } from "./CreateBlog"
import Home from "./Home"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<CreateBlog />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App

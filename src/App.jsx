
import Login from "./Components/Auth/Login"
import Hearder from "./Components/Header/Hearder"
import Footer from "./Components/Home/Footer"

import Home from "./Components/Home/Home"
import Subscribe from "./Components/Home/Subscribe"
import Navbar from "./Components/Header/Navbar"

import {BrowserRouter as Router, Routes , Route} from'react-router-dom'
import Signup from "./Components/Auth/Signup"
import Cart from "./Components/Cart/Cart"



function App() {
  


  return (
  <>
  <Router>

  <Hearder/>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  
<Subscribe/>
    <Footer/>
  </Router>
  </>
  )
}

export default App

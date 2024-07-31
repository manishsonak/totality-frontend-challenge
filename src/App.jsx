import Hearder from "./Components/Header/Hearder"
import Footer from "./Components/Header/Home/Footer"

import Home from "./Components/Header/Home/Home"
import Subscribe from "./Components/Header/Home/Subscribe"
import Navbar from "./Components/Header/Navbar"

import {BrowserRouter as Router, Routes , Route} from'react-router-dom'


function App() {
  

  return (
  <>
  <Router>

  <Hearder/>
  <Navbar/>
  <Routes>

    <Route path="/" element={<Home/>}/>


    {/* <Route path=".login" element={Login}/> */}
  </Routes>
  
<Subscribe/>
    <Footer/>
  </Router>
  </>
  )
}

export default App

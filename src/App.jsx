import Footer from "./Footer";
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <Navbar/>
     {/* <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </BrowserRouter> */}
    <Footer/>
    </>
  )
}

export default App

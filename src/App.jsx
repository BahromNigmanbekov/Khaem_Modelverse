import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Card from "./pages/card/Card"
import Notfound from "./pages/notfound/Notfound"
import Aos from "aos"
import "aos/dist/aos.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Contact from "./pages/contact/Contact"



function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

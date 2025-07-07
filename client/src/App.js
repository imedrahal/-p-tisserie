import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartProvider } from "./CartContext"; // Ajuste le chemin
import CartPage from "./CartePage/CartePage";
// Pages & composants
import Home from "./Home";
import FollowUs from "./FollowUs/FollowUs";
import OurSkills from "./OurSkills/OurSkills";
import TeamSection from "./TeamSection/TeamSection";
import Carousel from "./Carousel/Carousel";
import Services from "./Services/services";
import Products from "./Productes/Products";
import OurWorks from "./OurWorks/OurWorks";
import Price from "./PriceSection/Price";
import NavBar from "./NavBar/NavBar";
import ProductDetails from "./ProductDetails/ProductDetails";

function FullPage() {
  return (
    < >
   
      <div  id="carousel">
        <Carousel />
      </div>
      <div id="services">
        <Services />
      </div>
      <Products />
      <div id="works">
        <OurWorks />
      </div>
      <div id="OurPrice">
        <Price />
      </div>
      <div id="TeamSection">
        <TeamSection />
      </div>
      <div id="OurSkills">
        <OurSkills />
      </div>
      <FollowUs />
    </>
  );
}

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
       <CartProvider>
         <Router>
         <NavBar />
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
           <Route path="/cart" element={<CartPage />} /> {/* ✅ nouveau composant */}
      </Routes>
    </Router>
       </CartProvider>
   
  );
}

export default App;

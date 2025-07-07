import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalQuantity } = useContext(CartContext);
  const quantity = getTotalQuantity();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">


      {!menuOpen && (
        <button className="burger-btn" onClick={() => setMenuOpen(true)}>
               <img
          className="mobile-logo"
          src="https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/logo-mobile.png"
          alt="Sweet Cake Mobile"
        />
          <FaBars color="#ebb5cf" />
        </button>
      )}

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* Logo mobile dans le menu */}
        <img
          className="mobile-logo"
          src="https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/logo-mobile.png"
          alt="Sweet Cake Mobile"
        />

        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes color="#ebb5cf" />
        </button>

        <li onClick={() => scrollToSection("carousel")} className="nav-title">Home</li>
        <li onClick={() => scrollToSection("services")} className="nav-title">Services</li>
        <li onClick={() => scrollToSection("works")} className="nav-title">Works</li>
        <li onClick={() => scrollToSection("OurPrice")} className="nav-title">Pricing</li>
              <div className="logo">
        <img
          src="https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/logo-1.png"
          alt="Sweet Cake"
        />
      </div>
        <li onClick={() => scrollToSection("TeamSection")} className="nav-title">Team</li>
        <li onClick={() => scrollToSection("OurSkills")} className="nav-title">Skills</li>
        <li onClick={() => scrollToSection("OurPrice")} className="nav-title">Blog</li>
        <Link to="/product-details" style={{ textDecoration: "auto" }}>
          <li className="nav-title">Produit</li>
        </Link>
        <div className="cart-icon-container" onClick={() => navigate("/cart")}>
        <FaShoppingCart size={24} color="#ebb5cf" />
        {quantity > 0 && <span className="cart-badge">{quantity}</span>}
      </div>
      </ul>
     
    </nav>
  );
};

export default Navbar;

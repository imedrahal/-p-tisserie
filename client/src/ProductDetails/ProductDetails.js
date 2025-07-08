import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from "react-icons/fa";
import "./ProductDetails.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Color Biscuits",
    price: 18.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop7.jpg",
    category: "Food Delivery",
    description: "Colorful biscuits with love tag. Perfect for parties.",
  },
  {
    id: 2,
    name: "Fruit Biscuits",
    price: 25.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop4.jpg",
    category: "Bakery",
    description: "Fresh fruit biscuits with rich cream and jam.",
  },
  {
    id: 3,
    name: "Cream Cupcake",
    price: 22.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop5.jpg",
    category: "Dessert",
    description: "Creamy cupcakes with toppings and sprinkles.",
  },
  {
    id: 4,
    name: "Macarons Selection",
    price: 21.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop1.jpg",
    category: "Macarons",
    description: "Selection of multi-color macarons.",
  },
  {
    id: 5,
    name: "Cherry Cupcake",
    price: 19.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop8.jpg",
    category: "Cupcake",
    description: "Cherry-flavored cupcake, light and delicious.",
  },
  {
    id: 6,
    name: "Vanilla Cake",
    price: 30.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop3.jpg",
    category: "Cakes",
    description: "Soft vanilla cake with buttercream.",
  },
  {
    id: 7,
    name: "Chocolate Tart",
    price: 28.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop2.jpg",
    category: "Tarts",
    description: "Rich chocolate tart with crispy base.",
  },
  {
    id: 8,
    name: "Strawberry Donuts",
    price: 20.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop6.jpg",
    category: "Donuts",
    description: "Strawberry glazed donuts, fresh and soft.",
  },
  {
    id: 9,
    name: "Mini Cupcakes",
    price: 16.0,
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop9.jpg",
    category: "Cupcakes",
    description: "Mini cupcakes with vanilla frosting.",
  },
];

const ProductDetails = () => {
  const [product, setProduct] = useState(productsData[1]);
  const { addToCart } = useContext(CartContext);
  const [startIndex, setStartIndex] = useState(0);

  const handleAddToCart = () => {
    const quantity = parseInt(document.querySelector("input[type='number']").value);
    addToCart(product, quantity);
    toast.success(`${product.name} (x${quantity}) ajouté au panier 🛒`, {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const relatedProducts = productsData.filter((p) => p.id !== product.id);
  const visibleProducts = relatedProducts.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < relatedProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
      <>
       <div className="hero-banner">
      <img
        src="http://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/parallax2.jpg"
        alt="Banner"
        className="hero-image"
      />
      <div className="hero-text">Price</div>
    </div>
    <div className="product-container">
      <div className="product-main">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <h3>${product.price.toFixed(2)}</h3>
          <p>{product.description}</p>
          <div className="actions">
            <input type="number" defaultValue={1} min={1} />
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <p className="category">Category: {product.category}</p>
        </div>
      </div>

      <div className="tabs">
        <h4 style={{textAlign: "center"}}>Description</h4>
        <p>{product.description}</p>
      </div>


      <div className="related-section">
        <h3 style={{textAlign: "center"}}>Related products</h3>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev} disabled={startIndex === 0}>
            <FaChevronLeft />
          </button>
          <div className="related-grid">
            {visibleProducts.map((p) => (
              <div className="related-card" key={p.id} onClick={() => setProduct(p)}>
                <img src={p.image} alt={p.name} />
                <h5>{p.name}</h5>
                <p>${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <button className="carousel-btn" onClick={handleNext} disabled={startIndex + 4 >= relatedProducts.length}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default ProductDetails;


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from "react-icons/fa";
import "./ProductDetails.css";
import  React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
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
];

const ProductDetails = () => {
  const [product, setProduct] = useState(productsData[1]);
  const [cart, setCart] = useState([]);
  const { addToCart } = useContext(CartContext);


// const handleAddToCart = () => {
//   setCart([...cart, product]);
//   toast.success(`${product.name} (x1) ajouté au panier 🛒`, {
//     position: "top-center",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//   });
// };
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
  return (
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
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>

      <div className="related-section">
        <h3>Related products</h3>
        <div className="related-grid">
          {productsData
            .filter((p) => p.id !== product.id)
            .map((p) => (
              <div className="related-card" key={p.id} onClick={() => setProduct(p)}>
                <img src={p.image} alt={p.name} />
                <h5>{p.name}</h5>
                <p>${p.price.toFixed(2)}</p>
                {/* <button onClick={(e) => { e.stopPropagation(); setCart([...cart, p]); }}>
                  Add to Cart
                </button> */}
              </div>
            ))}
        </div>
      </div>
      <ToastContainer />
      {/* <div className="floating-cart">
  <FaShoppingCart size={28} color="#fff" />
  <span className="cart-count">{cart.length}</span>
</div> */}

    </div>
    
  );
};

export default ProductDetails;

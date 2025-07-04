import React from "react";
import "./Home.css";

const offers = [
  {
    title: "PARTY CUPCAKES",
    desc: "We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.",
    image: "https://via.placeholder.com/300x200?text=Cupcakes",
  },
  {
    title: "CHOCO CAKES",
    desc: "Nothing tastes better than a chocolate cake with a variety of flavors, which is always available at our bakery.",
    image: "https://via.placeholder.com/300x200?text=Choco+Cake",
  },
  {
    title: "WEDDING CAKES",
    desc: "Want to make your wedding unforgettable? Then you need to order a unique wedding cake at Sweet Bakery!",
    image: "https://via.placeholder.com/300x200?text=Wedding+Cake",
  },
];

const products = [
  {
    title: "Choco Truffles",
    image: "https://via.placeholder.com/300x200?text=Truffles",
    label: "SALE",
  },
  {
    title: "Molten Cake",
    image: "https://via.placeholder.com/300x200?text=Molten+Cake",
  },
  {
    title: "Choco Brownie",
    image: "https://via.placeholder.com/300x200?text=Brownie",
    label: "NEW",
  },
  {
    title: "Granola Bites",
    image: "https://via.placeholder.com/300x200?text=Granola",
  },
];

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <section className="section offers">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <div className="card-grid">
          {offers.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section new-products">
        <h2 className="section-title">NEW PRODUCTS</h2>
        <div className="card-grid">
          {products.map((product, index) => (
            <div className="card product-card" key={index}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
                {product.label && (
                  <span className={`badge ${product.label.toLowerCase()}`}>
                    {product.label}
                  </span>
                )}
              </div>
              <h4>{product.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

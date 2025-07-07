import React from "react";
import "./Price.css";

const prices = [
  {
    label: "Cakes",
    price: 85,
    color: "#d9a8aa",
    color2:"#93bbb6",
    icon: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop7.jpg", // remplace par tes images
  },
  {
    label: "Ice cream",
    price: 12,
    color: "#a4dce4",
    color2:"#93bbb6",
    icon: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop4.jpg",
  },
  {
    label: "Cookies",
    price: 35,
    color: "#dfc68b",
    color2:"#93bbb6",
    icon: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop5.jpg",
  },
  {
    label: "Brioche",
    price: 14,
    color: "#bde5bb",
    color2:"#93bbb6",
    icon: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/shop1.jpg",
  },
];

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Our Prices</h2>
      <div className="pricing-grid">
        {prices.map((item, index) => (
          <div className="price-card" key={index}>
            <div className="medal">
              <img src={item.icon} alt={item.label}  className="medal-img"/>
            </div>
            <div className="price-info" style={{ backgroundColor: item.color2 }}>
              ${item.price} - {item.label}
            </div>
            <ul className="description-list">
              <li>Lorem ipsum dolor sit</li>
           
            </ul>
            <button className="view-btn" style={{ backgroundColor: item.color }}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;

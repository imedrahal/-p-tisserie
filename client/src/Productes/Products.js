import React from "react";
import "./Products.css";
import { FaBirthdayCake, FaIceCream, FaCookie, FaCandyCane, FaAppleAlt, FaCoffee } from "react-icons/fa";
import Services1 from "../assets/service1.png"
import Services2 from "../assets/service2.png"
import Services3 from "../assets/service3.png"
import Services4 from "../assets/service4.png"
import Services5 from "../assets/service5.png"
import Services6 from "../assets/service6.png"
import imgBackground from "../assets/pink-bg.png";

const features = [
  {  text: "Maccarons"  , title:"90" },
  {  text: "Muffins" , title:"3"},
  {  text: "Sweet Cakes" , title:"45"},
  {  text: "Cupcakes" , title:"73"},
];

const FeaturesGrid = () => {
  return (
    <div className="Background-products" style={{ backgroundImage: `url(${imgBackground})` }}>
         
           <div className="features-grid-products">
      {features.map((item, index) => (
        <div className="product-cart" key={index}>                          
          <div style={{display:"block",margin: "25px 0px 25px 0px",}}>
            <h1 className="service-title" style={{textAlign:"center",color:"white"}}>
                {item.title}
            </h1>
                <p className="text-Products">{item.text}</p>
            </div>
      
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default FeaturesGrid;

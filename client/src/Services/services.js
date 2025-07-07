import React from "react";
import "./Services.css";
import { FaBirthdayCake, FaIceCream, FaCookie, FaCandyCane, FaAppleAlt, FaCoffee } from "react-icons/fa";
import Services1 from "../assets/service1.png"
import Services2 from "../assets/service2.png"
import Services3 from "../assets/service3.png"
import Services4 from "../assets/service4.png"
import Services5 from "../assets/service5.png"
import Services6 from "../assets/service6.png"
const features = [
  { icon: Services1, text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis."  , title:"Cake Design" },
  { icon: Services2, text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis." , title:"Best Cupcakes"},
  { icon:Services3, text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis." , title:"Desserts"},
  { icon: Services4, text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis.", title:"Menu Planner" },
  { icon: Services5 , text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis.", title:"Awesome Recipes" },
  { icon: Services6, text: "Lorem ipsum dolor sit amet consect etur adipiscing elit. Curabitur sempo turpis quis." , title:"Home Delivery"},
];

const FeaturesGrid = () => {
  return (
    <div style={{color:""}}>
         <h2 className="team-title">Services we provide</h2>
           <div className="features-grid">
      {features.map((item, index) => (
        <div className="feature-item" key={index}>                 
          <div className="icon"><img src={item.icon} className="Service-img" /></div>
          <div style={{display:"block"}}>
            <h1 className="service-title">
                {item.title}
            </h1>
                <p className="text">{item.text}</p>
            </div>
      
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default FeaturesGrid;

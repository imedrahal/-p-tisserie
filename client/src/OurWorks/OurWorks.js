import React from "react";
import "./OurWorks.css";
import { FaBirthdayCake, FaIceCream, FaCookie, FaCandyCane, FaAppleAlt, FaCoffee } from "react-icons/fa";
import Services1 from "../assets/service1.png"
import Services2 from "../assets/service2.png"
import Services3 from "../assets/service3.png"
import Services4 from "../assets/service4.png"
import Services5 from "../assets/service5.png"
import Services6 from "../assets/service6.png"
const features = [
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks6.jpg", text: "Lorem ipsum dolor "  , title:"Sweet Valentine" },
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks8.jpg", text: "Lorem ipsum dolor " , title:"Sweet Aniseed"},
  {image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks2.jpg", text: "Lorem ipsum dolor " , title:"Desserts"},
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks4.jpg", text: "Lorem ipsum dolor ", title:"Praline Meringue" },
 { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/blog1.jpg", text: "Lorem ipsum dolor "  , title:"Flavour Mix" },
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/blog4.jpg", text: "Lorem ipsum dolor " , title:"Birthday Cakes"},
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks7.jpg", text: "Lorem ipsum dolor " , title:"Assorted Macaroons"},
  { image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/2019/04/imgworks7.jpg", text: "Lorem ipsum dolor ", title:"Roses Macaron" },
 
];

const FeaturesGrid = () => {
  return (
    <div style={{color:""}}>
         <h2 className="team-title">Our Works</h2>
           <div className="Works-grid">
      {features.map((item, index) => (
        <div className="Works-item" key={index}>                 
          <div className=""><img src={item.image} className="Product-img" /></div>
          <div style={{display:"block", textAlign: "center",}}>
            <h1 className="product-title">
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

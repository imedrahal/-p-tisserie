import React from "react";
import "./OurSkills.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaFlickr, FaInstagram, FaVimeoV } from "react-icons/fa";
import { FaCandyCane ,FaBirthdayCake} from "react-icons/fa"; // Icône de bonbon style Noël
import imgBackground from "../assets/pink-bg.png";
import skill1 from"../assets/skill1.png"
import skill2 from"../assets/skill2.png"
import skill3 from"../assets/skill3.png"
const FollowUs = () => {
      const skills = [
    { label: "Sweet Maccarons", value: 65 },
    { label: "Muffins and Cupcakes", value: 75 },
    { label: "Donuts and Pastry", value: 55 },
    { label: "Wedding Cakes", value: 90 },
  ];

  return (
    <div style={{ backgroundImage: `url(${imgBackground})` }} className="Background-FollowUs">

  <div className="title " style={{display:"block",textAlign:"center",color:"white"}}>
    <h1>
        Our Skills  
             <FaCandyCane style={{marginLeft:"20px"}}/>             
    
    </h1>
<div className="skills-content" style={{ display: "flex", width: "70%", margin: "auto", paddingBottom: "80px" }}>
<div className="skills-left" style={{ display: "block", borderRight: "2px solid rgba(255, 255, 255, 0.4)", paddingRight: "20px" }}>

             <div style={{display:"flex",alignItems: "center"}}>
       
                 <img src={skill1}  className="" style={{height:"80px",width:"80px"}}/>
       <div style={{display:"block",textAlign: "left"}}>
         <span style={{color:"black",fontSize: "25px",marginLeft:"25px"}}> Cake design</span>
        <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nul lam ante quam, volutpat eu gravida sit.
        </p>
        </div>
    </div>
    <div style={{display:"flex",alignItems: "center"}}>
           <img src={skill2}  className="" style={{height:"80px",width:"80px"}}/>
      <div style={{display:"block",textAlign: "left"}}>
         <span style={{color:"black",fontSize: "25px",marginLeft:"25px"}}> Cake design</span>
        <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nul lam ante quam, volutpat eu gravida sit.
        </p>
        </div>
    </div>
    <div style={{display:"flex",alignItems: "center"}}>
           <img src={skill3}  className="" style={{height:"80px",width:"80px"}}/>
        <div style={{display:"block",textAlign: "left"}}>
         <span style={{color:"black",fontSize: "25px",marginLeft:"25px"}}> Cake design</span>
        <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nul lam ante quam, volutpat eu gravida sit.
        </p>
        </div>
      
    </div>
        </div>
   <div className="progress-container">
      {skills.map(({ label, value }) => (
        <div key={label} className="progress-group">
          <p>{label}</p>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>

    </div>
  

  );
};

export default FollowUs;

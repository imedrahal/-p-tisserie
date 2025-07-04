import React from "react";
import "./FollowUs.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaFlickr, FaInstagram, FaVimeoV } from "react-icons/fa";
import imgFooter from "../assets/img-footer.jpg";
import Contact from "./Contact"
const FollowUs = () => {
  return (
    <div style={{ backgroundImage: `url(${imgFooter})` }} className="Background-FollowUs">

  <section className="follow-section">
  <h2 className="follow-title">Follow Us</h2>
  <div className="icon-divider"></div>
  <div className="social-icons">
    <a href="#"><FaFacebookF className="icon fb" /></a>
    <a href="#"><FaTwitter className="icon twitter" /></a>
    <a href="#"><FaGooglePlusG className="icon google" /></a>
    <a href="#"><FaFlickr className="icon flickr" /></a>
    <a href="#"><FaInstagram className="icon insta" /></a>
    <a href="#"><FaVimeoV className="icon vimeo" /></a>
  </div>
</section>
<Contact/>
    </div>
  

  );
};

export default FollowUs;

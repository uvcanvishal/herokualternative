import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; VishalSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/vishal_.kr_.singh/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCAj_O-4DqtKij09tMRpqIPQ">Youtube</a>
        <a href="https://www.facebook.com/uvcanvishal/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
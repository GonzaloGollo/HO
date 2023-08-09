import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={"/"} >
    <div className="LogoLema">
        {/* <img className="LogoJpg" src="/images/Logo.jpg"/> */}
        <img className="LogoJpg" src="/images/Logo1.jpg"/>
        {/* <img className="LogoJpg" src="/images/Logo2.jpg"/> */}

        {/* <div className="Logo">Home</div>
        <div className="Lema">Off</div> */}
      
    </div>
    </Link>
  );
};

export default Logo;

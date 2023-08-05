import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={"/"} >
    <div className="LogoLema">
      
        <div className="Logo">Home</div>
        <div className="Lema">Off</div>
      
    </div>
    </Link>
  );
};

export default Logo;
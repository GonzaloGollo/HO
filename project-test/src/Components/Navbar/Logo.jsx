import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="LogoLema">
        <img className="LogoJpg" src="/images/Logo1.jpg" />
        <img className="LogoJpgsinLema" src="/images/Logo1 - sin lema.jpg"/> 
      </div>
    </Link>
  );
};

export default Logo;

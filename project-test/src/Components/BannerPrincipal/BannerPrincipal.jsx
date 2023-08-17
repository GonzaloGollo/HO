import React from "react";
import "./BannerPrincipal.css";

const BannerPrincipal = () => {
  return (
    <div>
      <div>BannerPrincial</div>
      <div className="flexing">
        <div className="section section--yellow">
          <h3 className="title">Co Working</h3>
          <h3 className="precio">$2.500</h3>
        </div>
        <div className="section section--pink">
          <h3 className="title">Office house</h3>
          <h3 className="precio">$3.500</h3>
        </div>
        <div className="section section--green">
          <h3 className="title">Oficina Privada</h3>
          <h3 className="precio">$4.500</h3>
        </div>
      </div>
    </div>
  );
};

export default BannerPrincipal;

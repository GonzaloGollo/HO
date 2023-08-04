import React from "react";
import "./CardRecomendaciones.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ContextGlobal } from "./utils/global.context";

const CardRecomendaciones = ({ title, url, id}) => {
  //   const { state } = useContext(ContextGlobal);

  return (
    <>
       <Link to={"/producto/" + id}>
        <div className="card-body-reco">
       
          <img className="ImgCardReco" src={url} alt="Foto producto" />
          <div className="texto-card-reco">
            <h3 className="nombre-card-producto">{title}</h3>
            <p className="precio">${id}</p>
          </div>
        
        </div>
        </Link>
      
    </>
  );
};

export default CardRecomendaciones;

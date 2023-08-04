import React from "react";
import "./CardProducto.css";
import { Link } from "react-router-dom";

const CardProducto = ({ title, url, id, descripcion, precio }) => {

  return (
    <>
      
        <div className="card-body-producto">
        <Link to={"/producto/" + id}>
          <img className="ImgCard-producto" src={url} alt="Foto producto" />
          <div className="texto-card">
            <h3 className="titulo-card-producto">{title}</h3>
            <p className="descripcion-card">{descripcion}</p>
            <p className="precio">${precio}</p>
          </div>
          </Link>
        </div>
      
    </>
  );
};

export default CardProducto;

// import React from "react";
// import "./CardProducto.css";
// import { Link } from "react-router-dom";

// const CardProducto = ({ title, url, id, descripcion, precio }) => {

//   return (
//     <>
      
//         <div className="card-body-producto">
//         <Link to={"/producto/" + id}>
//           <img className="ImgCard-producto" src={url} alt="Foto producto" />
//           <div className="texto-card">
//             <h3 className="titulo-card-producto">{title}</h3>
//             <p className="descripcion-card">{descripcion}</p>
//             <p className="precio">${precio}</p>
//           </div>
//           </Link>
//         </div>
      
//     </>
//   );
// };

// export default CardProducto;
import React from "react";
import "./CardProducto.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardProducto = ({ title, url, id, descripcion, precio,tipoRecurso,  servicio1, servicio2, servicio3 }) => {
  return (
    <div className="card-body-producto">
      <Link to={"/producto/" + id}>
        <img className="ImgCard-producto" src={url} alt="Foto producto" />
        <div className="texto-card">
          <h3 className="titulo-card-producto">{title}</h3>
          <p className="descripcion-card">{descripcion}</p>
          <p className="tipo-recurso-card">{tipoRecurso}</p>
          <p className="servicio-card">{servicio1}</p>
          <p className="servicio-card">{servicio2}</p>
          <p className="servicio-card">{servicio3}</p>
          <p className="precio">{precio}</p>
        </div>
      </Link>
    </div>
  );
};

CardProducto.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired, // Cambiado a string ya que en el JSON parece ser una cadena
  tipoRecurso: PropTypes.string.isRequired, 
  servicio1: PropTypes.string.isRequired
};

export default CardProducto;

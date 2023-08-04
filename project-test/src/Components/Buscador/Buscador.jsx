import React from "react";
import "./Buscador.css";
import { MdSearch } from "react-icons/md";
const Buscador = () => {
  return (
    <div className="segmento-buscador">
      {/* <div className="encontra"></div> */}
      <div className="boton-buscador">

        <div className="espaciado-centrado">
          <div className="buscar-por">Localidad</div>
          <div className="separador">|</div>
          <div className=" buscar-por">Fecha</div>
          <div className="separador">|</div>
          <div className=" buscar-por">Precio</div>
          <div className="separador">|</div>
        </div>

        <div className="icono-lupa">
          <MdSearch className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Buscador;

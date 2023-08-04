import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../Boton";


const BotonInicio = () => {
  const textoBoton = "Inicio";
  return (
    <Link to={"/"}>
    <Boton texto={textoBoton}>
      
    </Boton>
  </Link>
  )
}

export default BotonInicio
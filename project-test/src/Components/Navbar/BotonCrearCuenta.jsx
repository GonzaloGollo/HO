import React from 'react';
import { Link } from "react-router-dom";
import { Boton } from '../Boton';

const BotonCrearCuenta = () => {
const textoBoton = "Crear Cuenta";

  return (
    <Link to={"/"}>
      <Boton texto={textoBoton}>
        
      </Boton>
    </Link>
  )
}

export default BotonCrearCuenta
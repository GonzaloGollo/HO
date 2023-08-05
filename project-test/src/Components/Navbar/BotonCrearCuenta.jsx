import React from 'react';
import { Link } from "react-router-dom";
import { Boton } from '../Boton';
import { useEffect, useState } from 'react';

const BotonCrearCuenta = () => {
const textoBoton = "Crear Cuenta";
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const ocultarComponente = windowWidth < 650;

if (ocultarComponente) {
  return null;
}

  return (
    <Link to={"/"}>
      <Boton texto={textoBoton}>
        
      </Boton>
    </Link>
  )
}

export default BotonCrearCuenta
import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../Genericos/Boton";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import FormIngreso from "../../Routes/FormIngreso";
import { ContextGlobal } from "../utils/global.context";
import { useModalContext } from "../utils/global.contextModal";
import ModalGlobalX3 from "../Modal/ModalGlobalX3";

const BotonInicio = () => {
  // const { showModal, closeModal, openModal } = useContext(ContextGlobal);
  // const { modals, openModalx3, closeModalX3 } = useModalContext();


  const textoBoton = "Inicio";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ocultarComponente = windowWidth < 770;

  if (ocultarComponente) {
    return null;
  }

  return (

    <div>
 
    <Link to={"/formingreso/"}>
      <Boton texto={textoBoton} />
    </Link>
  </div>


  );
};

export default BotonInicio;

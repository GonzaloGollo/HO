import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../Genericos/Boton";
import { useEffect, useState, useContext } from "react";
import FormAltaUser from "../../Routes/FormAltaUser";
import ModalFormCrearCuenta from "../Modal/ModalFormAgregarProd";
import { ContextGlobal } from "../utils/global.context";


const BotonCrearCuenta = () => {
  const textoBoton = "Crear Cuenta";

  const [modalVisible, setModalVisible] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { showModalCU, closeModalCU, openModalCU } = useContext(ContextGlobal);

  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const ocultarComponente = windowWidth < 770;

  if (ocultarComponente) {
    return null;
  }

  return (
    <div>
      {/* <Boton texto={textoBoton} onClick={openModalCU} />

      {showModalCU && (
        <ModalFormCrearCuenta onClose={closeModalCU}>
          <FormAltaUser />
        </ModalFormCrearCuenta>
      )} */}
      <Link to={"/formaltauser/"}>
        <Boton texto={textoBoton} />
      </Link>
    </div>
  );
};

export default BotonCrearCuenta;

// import ModalGlobalX3 from "../Modal/ModalGlobalX3";
// import Modal from "../Modal/Modal";

// <div className="open-Modal1" onClick={() => openModalx3("modal1")}>
// <Boton texto={textoBoton}></Boton>

// <ModalFormCrearCuenta>
//   <FormAltaUser />
// </ModalFormCrearCuenta>

// </div>

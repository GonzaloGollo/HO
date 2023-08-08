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
  const { modals, openModalx3, closeModalX3 } = useModalContext();


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

  const ocultarComponente = windowWidth < 650;

  if (ocultarComponente) {
    return null;
  }

  return (
    //     <div onClick={openModal}>

    //       <Boton texto={textoBoton}></Boton>

    //       {showModal && (
    //         <Modal onClose={closeModal}>
    //           <FormIngreso />
    //         </Modal>
    //       )}
    //     </div>
    //   );
    // };

    <div className="open-Modal1" onClick={() => openModalx3("modal2")}>
      <Boton texto={textoBoton}></Boton>

      {modals.modal2 && (
        <ModalGlobalX3
          modalName="modal2"
          onClose={() => closeModalX3("modal2")}
        >
          <FormIngreso />
        </ModalGlobalX3>
      )}
    </div>
  );
};

export default BotonInicio;

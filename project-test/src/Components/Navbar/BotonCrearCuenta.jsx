import React from "react";
import { Link } from "react-router-dom";
import { Boton } from "../Genericos/Boton";
import { useEffect, useState } from "react";
import FormAltaUser from "../../Routes/FormAltaUser";
import Modal from "../Modal/Modal";
import { useModalContext } from "../utils/global.contextModal";
import ModalGlobalX3 from "../Modal/ModalGlobalX3";

const BotonCrearCuenta = () => {
  const textoBoton = "Crear Cuenta";

  const { modals, openModalx3, closeModalX3 } = useModalContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const ocultarComponente = windowWidth < 650;
    if (ocultarComponente && modals.modal1) {
      closeModalX3("modal1");
    }
  }, [windowWidth, modals.modal1]);
  

  return (
    //     <div className="open-Modal1" modalName="modal1" onClick={() => openModalx3("modal1")}>

    //       <Boton texto={textoBoton}></Boton>

    //       {modals.modal1 && (
    //         <ModalGlobalX3 modalName="modal1" onClose={closeModalX3}>
    //           <FormAltaUser />
    //         </ModalGlobalX3>
    //       )}
    //     </div>
    //   );
    // };

    <div className="open-Modal1" onClick={() => openModalx3("modal1")}>
      <Boton texto={textoBoton}></Boton>

      {modals.modal1 && (
        <ModalGlobalX3
          modalName="modal1"
          onClose={() => closeModalX3("modal1")}
        >
          <FormAltaUser />
        </ModalGlobalX3>
      )}
    </div>
  );
};

export default BotonCrearCuenta;

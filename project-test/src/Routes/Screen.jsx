import React from "react";
import Error from "../Components/Error";
import "../Components/Screen.css";
import Modal from "../Components/Modal/Modal";
import { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
// import ListadoProductos from "../Components/ListadoDeProductos/ListadoProductos";
import GaleriaModal from "../Components/GaleriaFotos/GaleriaModal";

const Screen = () => {
  const { showModal, selectedImage, closeModal, openModal, productos } =
    useContext(ContextGlobal);

  const [showScreen, setShowScreen] = useState(false);

  // const openScreen = () => {
  //   setShowScreen(true);
  //   openModal(); // Abre el modal al cambiar a la pantalla completa
  // };

  // const closeScreen = () => {
  //   setShowScreen(false);
  //   closeModal(); // Cierra el modal al volver de la pantalla completa
  // };
  const [selectedFullScreenImage, setSelectedFullScreenImage] = useState(null);

  const openScreen = (imageSrc) => {
    setSelectedFullScreenImage(imageSrc);
    setShowScreen(true);
    openModal(); // Abre el modal al cambiar a la pantalla completa
  };

  const closeScreen = () => {
    setSelectedFullScreenImage(null);
    setShowScreen(false);
    closeModal(); // Cierra el modal al volver de la pantalla completa
  };

  return (
    <div>
      {/* <GaleriaModal   onClose={closeModalGaleria}> */}

      {/* <button onClick={openModal}> abrir</button> */}

      {showModal && (
        <div className="screen">
          <div className="encabezado-preview-galeria">
            <div>Titulo con Nombre Producto</div>
            <div className="Cerrar" onClick={closeModal}>
              Cerrar X
            </div>
          </div>
          <div className="contenedor-grid-fotos">
            {productos.length ? (
              productos.map((fotoProducto, id) => (
                <div key={id} className="item-grid">
                  <img
                    src={fotoProducto.src}
                    alt={`Imagen del producto ${id}`}
                    onClick={() => {
                      openModal(fotoProducto.src);
                      openScreen(fotoProducto.src); // Abre la pantalla completa al hacer clic en la imagen
                    }}
                  />
                </div>
              ))
            ) : (
              <Error />
            )}
          </div>
          {showModal && showScreen && (
            <Modal onClose={closeModal}>
              <img
                className="modal-img"
                alt="Imagen de previsualización"
                src={selectedFullScreenImage}
              />
            </Modal>
          )}
          {/* {showModal && <Modal onClose={closeModal} imageSrc={selectedImage} />} */}
        </div>
      )}

      <button onClick={openModal}> abrir</button>
    </div>
  );
};
export default Screen;

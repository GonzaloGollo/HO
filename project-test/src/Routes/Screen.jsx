import React from "react";
import Error from "../Components/Error";
import "../Components/Screen.css";
import Modal from "../Components/Modal/Modal";
import { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
// import ListadoProductos from "../Components/ListadoDeProductos/ListadoProductos";
import GaleriaModal from "../Components/GaleriaFotos/GaleriaModal";

const Screen = () => {

const {showModal, selectedImage, closeModal, openModal, productos} = useContext(ContextGlobal);

const [modalIsOpen, setModalisOpen] = useState(false);
const openModalGaleria = ()=> {
  setModalisOpen(true);
}

const closeModalGaleria =()=> {
  setModalisOpen(false);
}




  return (
    <GaleriaModal isOpen={modalIsOpen} onClose={closeModal}>
    <button onClick={openModal}> abrir</button>
    <div className="screen">
      <div className="encabezado-preview-galeria">
        <div>Titulo con Nombre Producto</div>
        <div>Cerrar X</div>
      </div>
      <div className="contenedor-grid-fotos">
        {productos.length ? (
          productos.map((fotoProducto, id) => (
            <div key={id} className="item-grid">
              <img
                src={fotoProducto.src}
                alt={`Imagen del producto ${id}`}
                onClick={() => openModal(fotoProducto.src)}
              />
            </div>
          ))
        ) : (
          <Error />
        )}
      </div>
      {showModal && (
        <Modal onClose={closeModal} imageSrc={selectedImage} />
      )}
    </div>
    </GaleriaModal> 
  );
};

export default Screen;

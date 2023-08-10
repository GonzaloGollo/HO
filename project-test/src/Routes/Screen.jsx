// import React from "react";
// import Error from "../Components/Error";
// import "../Components/Screen.css";
// import Modal from "../Components/Modal/Modal";
// import { useState, useContext, useEffect } from "react";
// import { ContextGlobal } from "../Components/utils/global.context";
// import ListadoProductos from "../Components/ListadoDeProductos/ListadoProductos";
// import GaleriaModal from "../Components/GaleriaFotos/GaleriaModal";
// import { useParams } from "react-router-dom";

// const Screen = () => {
// const { showModal, selectedImage, closeModal, openModal, productos } =
//   useContext(ContextGlobal);
// const {
//   listaProductosBase,
//   selectedImage,
//   showModal,
//   closeModal,
//   openModal,
//   productos,
// } = useContext(ContextGlobal);

// const { id } = useParams();
// const [productoID, setProductoID] = useState(null);

// useEffect(() => {
//   const foundProduct = listaProductosBase.find(
//     (item) => item.id === parseInt(id, 10)
//   );
//   setProductoID(foundProduct);
// }, [id, listaProductosBase]);

// if (!productoID) {
//   // Handle case when product is not found
//   return <div>Product not found</div>;
// }

// const [showScreen, setShowScreen] = useState(false);

// const [selectedFullScreenImage, setSelectedFullScreenImage] = useState(null);

// const openScreen = (imageSrc) => {
//   setSelectedFullScreenImage(imageSrc);
//   setShowScreen(true);
//   openModal(); // Abre el modal al cambiar a la pantalla completa
// };

// const closeScreen = () => {
//   setSelectedFullScreenImage(null);
//   setShowScreen(false);
//   closeModal(); // Cierra el modal al volver de la pantalla completa
// };

// return (
//   <div>
//     {/* <GaleriaModal   onClose={closeModalGaleria}> */}

//     {/* <button onClick={openModal}> abrir</button> */}

//     {showModal && (
//       <div className="screen">
//         <div className="encabezado-preview-galeria">
//           <div>Titulo con Nombre Producto</div>
//           <div className="Cerrar" onClick={closeModal}>
//             Cerrar X
//           </div>
//         </div>
//         <div className="contenedor-grid-fotos">
//           {productoID.map((fotoProducto, id) => (
//             <div key={id} className="item-grid">
//               <img
//                 src={productoID.fotos[`foto${id + 1}`]} // Usamos ${id + 1} para ajustar el índice ya que los IDs comienzan en 1
//                 alt={`Imagen del producto ${id}`}
//                 onClick={() => {
//                   openModal(fotoProducto.src);
//                   openScreen(fotoProducto.src); // Abre la pantalla completa al hacer clic en la imagen
//                 }}
//               />
//             </div>
//           ))}
//           )) ) : (
//           <Error />
//           )}
//         </div>
//         {showModal && showScreen && (
//           <Modal onClose={closeModal}>
//             <img
//               className="modal-img"
//               alt="Imagen de previsualización"
//               src={selectedFullScreenImage}
//             />
//           </Modal>
//         )}
{
  /* {showModal && <Modal onClose={closeModal} imageSrc={selectedImage} />} */
}
{
  /* </div>
      )}

      <button onClick={openModal}> abrir</button>
    </div>
  );
};
export default Screen; */
}
import React, { useState, useContext, useEffect } from "react";
import Error from "../Components/Error";
import "../Components/Screen.css";
import Modal from "../Components/Modal/Modal";
import { ContextGlobal } from "../Components/utils/global.context";
import GaleriaModal from "../Components/GaleriaFotos/GaleriaModal";
import { useParams } from "react-router-dom";

const Screen = () => {
  const { listaProductosBase, showModal, closeModal, openModal } =
    useContext(ContextGlobal);
    const [showScreen, setShowScreen] = useState(false);
  const { id } = useParams();
  const [productoID, setProductoID] = useState(null);
  const [selectedFullScreenImage, setSelectedFullScreenImage] = useState(null);

  useEffect(() => {
    const foundProduct = listaProductosBase.find(
      (item) => item.id === parseInt(id, 10)
    );
    setProductoID(foundProduct);
  }, [id, listaProductosBase]);

  if (!productoID) {
    // Handle case when product is not found
    return <div>Product not found</div>;
  }

  const openScreen = (imageSrc) => {
    setSelectedFullScreenImage(imageSrc);
    openModal(); // Abre el modal al cambiar a la pantalla completa
  };

  const closeScreen = () => {
    setSelectedFullScreenImage(null);
    closeModal(); // Cierra el modal al volver de la pantalla completa
  };

  return (
    <div>
      {showModal && (
        <div className="screen">
          <div className="encabezado-preview-galeria">
            <div className="titulo-producto-screen">{productoID.nombreProducto}</div>
            {/* <div className="cerrar" onClick={closeModal}>
              Cerrar X
            </div> */}
          </div>
          <div className="contenedor-grid-fotos">
            <div className="item-grid">
              <img
                src={productoID.fotos.foto1}
                alt={`Imagen del producto 1`}
                onClick={() => {
                  openScreen(productoID.fotos.foto1);
                }}
              />
            </div>
            <div className="item-grid">
              <img
                src={productoID.fotos.foto2}
                alt={`Imagen del producto 2`}
                onClick={() => {
                  openScreen(productoID.fotos.foto2);
                }}
              />
            </div>
            <div className="item-grid">
              <img
                src={productoID.fotos.foto3}
                alt={`Imagen del producto 3`}
                onClick={() => {
                  openScreen(productoID.fotos.foto3);
                }}
              />
            </div>
            <div className="item-grid">
              <img
                src={productoID.fotos.foto4}
                alt={`Imagen del producto 4`}
                onClick={() => {
                  openScreen(productoID.fotos.foto4);
                }}
              />
            </div>
            <div className="item-grid">
              <img
                src={productoID.fotos.foto5}
                alt={`Imagen del producto 5`}
                onClick={() => {
                  openScreen(productoID.fotos.foto5);
                }}
              />
            </div>
          </div>
          {showScreen && (
            <Modal onClose={closeScreen}>
              <img
                className="modal-img"
                alt="Imagen de previsualización"
                src={selectedFullScreenImage}
              />
            </Modal>
          )}
        </div>
      )}

      {/* <button onClick={openModal}>abrir</button> */}
    </div>
  );
};

export default Screen;

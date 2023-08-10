import { useState, useEffect, createContext } from "react";
export const ContextGlobal = createContext();
import listadoProductosData from "../ListadoProductos.json";

export const ContextProvider = ({ children }) => {

const[listaProductosBase, setListaProductosBase] = useState({});

const cargarDatos = async () => {

  setTimeout(() => {
    setListaProductosBase(listadoProductosData);
  }, 10);
};

useEffect(() => {
  cargarDatos();
}, []);

// useEffect(() => {
//   const storedData = localStorage.getItem("listaProductos");
//   if (storedData) {
//     setListaProductosBase(JSON.parse(storedData));
//   } else {
//     // If no data is stored in localStorage, use initial data
//     setListaProductosBase(listadoProductosData);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("listaProductos", JSON.stringify(listaProductosBase));
// }, [listaProductosBase]);





  ///////////////////////////////////////////////////////////////////////////
///Modal Fotos ////
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

///////////////////Modal CrearUser ///////////
const [showModalCU, setShowModalCU] = useState(false);
// const [selectedImage, setSelectedImage] = useState(null);

const openModalCU = () => {
  // setSelectedImage(imageSrc);
  setShowModalCU(true);
};

const closeModalCU = () => {
  setShowModalCU(false);
};
///////////


  return (
    <ContextGlobal.Provider
      value={{
        cargarDatos,
        listaProductosBase,
        showModal,
        selectedImage,
        closeModal,
        openModal,
        openModalCU,
        closeModalCU,
        showModalCU,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

  /////////GetDatos //////////////
  // const [producto, setProducto] = useState([]);

  // const getDatos = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  //   const data = await res.json();
  //   setProducto(data);
  // };

  // useEffect(() => {
  //     getDatos();
  // }, []);
  //////////////////////////////////////////////////
  // const getMapeoProductos = (productos, tituloProducto, claseCss) => {
  //   const mapeo = productos.map((producto, index) => (
  //     <div key={producto.id} className={claseCss}>
  //       {tituloProducto? <div className="titulo-producto">{producto.name}</div>:""};
  //       <img
  //         src={producto.src}
  //         alt={`Imagen del producto ${producto.id}`}
  //       />
  //     </div>
  //   ));

  //   return mapeo;
  // };
import React, { createContext, useContext, useState, useEffect } from "react";
import listadoProductosData from "../ListadoProductos.json";
import {useLocalStorageList} from '../utils/useStorageList.js'
export const ContextGlobal = createContext();
export const ContextProvider = ({ children }) => {

  // const [listaProductosBase, setListaProductosBase] = useLocalStorageList("listaProductosBase", listadoProductosData);

  ///////// este funcionaba
  // const [listaProductosBase, setListaProductosBase] = useState([]);
    // useEffect(() => {
    //   const cargarDatos = async () => {
    //     if (listaProductosBase.length === 0) {
    //       setListaProductosBase(listadoProductosData);
    //     }
    //   };
    //   cargarDatos();
    // }, [listaProductosBase]);

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

/////////GetDatosLista //////////////
 const [productosBKLista, setProductosBKLista] = useState([]);

 const getDatosBKLista = async () => {
   const res = await fetch("http://52.32.210.155:8080/api/v1/recursos/list");
  const data = await res.json();

  setProductosBKLista(data);
  console.log(productosBKLista);
};

useEffect(() => {
  getDatosBKLista();
}, []);





  return (
    <ContextGlobal.Provider
      value={{
        productosBKLista, 
        setProductosBKLista,
        getDatosBKLista,
        // listaProductosBase,
        // setListaProductosBase,
        showModal,
        selectedImage,
        closeModal,
        openModal,
        // openModalCU,
        // closeModalCU,
        // showModalCU,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

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

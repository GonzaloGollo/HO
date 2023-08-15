import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect, useContext } from "react";
import "./ListadoProductos.css";
import { ContextGlobal } from "../utils/global.context";

import { useNavigate } from "react-router-dom";
import { useLocalStorageList } from "../utils/useStorageList.js";


const ListadoProductos = ({ CantidadCards }) => {
  const navigate = useNavigate();
  const pasaPaginaSiguiente = ">";
  const irAPaginaAnterior = "<"
  // const { listaProductosBase, setListaProductosBase, productosBKLista, setProductosBKLista, getDatosBKLista } = useContext(ContextGlobal);
  const {  productosBKLista, setProductosBKLista, getDatosBKLista } = useContext(ContextGlobal);

  const [storedFormValue] = useLocalStorageList("formularioProducto", {});

  console.log(" ----------Listado de Productos");

  // console.log(listaProductosBase.length);

  // console.log(listaProductosBase);

  // const listaPrevia = listaProductosBase;

  // const productoAdaptadoObjeto = productoMas;

  // useEffect(() => {
  //   const addToListJson = () => {
  //     const nuevaLista = [...listaProductosBase, productoAdaptadoObjeto];
  //     setListaProductosBase(nuevaLista);
  //   };
  //   addToListJson();
  // }, []);

  // useEffect(() => {
  //   const addToListJson = () => {
  //     const nuevaLista = [...listaProductosBase, productoAdaptadoObjeto];
  //     setListaProductosBase(nuevaLista);
  //   };
  //   if (
  //     listaProductosBase.findIndex(
  //       (item) => item.id === productoAdaptadoObjeto.id
  //     ) === -1
  //   ) {
  //     // Verificamos si el objeto ya existe en la lista antes de agregarlo
  //     addToListJson();
  //   }
  // }, []);

  // console.log(" Aca empieza a mostras el resultado de CARGA");
  // console.log(listaProductosBase.length);



  

  // useEffect(() => {
  //   if (
  //     listaPrevia.findIndex(
  //       (item) => item.id === storedFormValue.id
  //     ) === -1
  //   )
  //   if (storedFormValue) {
  //     setListaProductosBase((prevList) => [...prevList, storedFormValue]);
  //   }
  // }, [storedFormValue]);

  

  // console.log("Tipo de listaProductosBase:", typeof listaProductosBase);
  // console.log("Estructura de listaProductosBase:", listaProductosBase);


  // console.log("Length listaProductosBase:", listaProductosBase);





  const chunk = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const randomProducts = [...productosBKLista].sort(
      () => Math.random() - 0.5
    );

    const paginatedArray = chunk(randomProducts, CantidadCards);
    setPaginatedProducts(paginatedArray);
  }, [CantidadCards, productosBKLista]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (
    <div className="segmento-listado-productos">
      <h3 className="txt-titulo-listado-productos"></h3>

      <div className="grid-container-listado-home">
        {paginatedProducts.length ? (
          paginatedProducts[currentPage].map((producto, index) => (
            <CardProducto
              className='.item-grid'
              key={producto.id}
              title={producto.nombreProducto}
              descripcion={producto.descripcion}
              url={producto.fotos.foto1} // Aquí usamos la URL de la foto
              precio={producto.precio}
              tipoRecurso={producto.tipoRecurso}
              // servicio1={producto.servicios.servicio1}
              // servicio2={producto.servicios.servicio2}
              // servicio3={producto.servicios.servicio3}
              id={producto.id}
            />
          ))
        ) : (
          <>
            <h3> No encontramos productos para recomendar </h3>
            <h3>
              Los datos del carga son {productosBKLista.ListadoProductos}
            </h3>
          </>
        )}
      </div>

      <div className="pagination  pagination is-centered">
{/* 
      {currentPage < paginatedProducts.length - 1 && (
          <>
        
            <button className="pagination-link" onClick={() => navigate(-1)}>Volver</button>
          </> 
        )} 
        */}
      {/* {currentPage < paginatedProducts.length - 1 && (
          <> 
      
            <button className="pagination-previous" onClick={() => navigate(1)}>Principio</button>
          </>
        )} */}
  
      {currentPage > 0 && (
          <button className="pagination-previous" onClick={handlePreviousPage}>{irAPaginaAnterior}</button>
        )}
        {currentPage < paginatedProducts.length - 1 && (
          <>
            <button className="pagination-next" onClick={handleNextPage}>{pasaPaginaSiguiente}</button>
          </>
        )} 

        
{/* ////////////// */}

        {/* {currentPage > 0 && (
          <button onClick={handlePreviousPage}>Anterior</button>
        )} */}
      
       
        {/* {currentPage < paginatedProducts.length - 1 && (
          <>
            <button onClick={handleNextPage}>Siguiente</button>
          </>
        )}  
         */}
      </div>

    </div>
  );
};

export default ListadoProductos;


 {/* <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
            >
              {currentPage +1}
            </a>
          </li>
          <li>
            <a
              class="pagination-link"
              aria-label="Page 46"
              aria-current="page"
            >
              {currentPage +2}
            </a>
          </li>
        </ul>
      </nav> */}
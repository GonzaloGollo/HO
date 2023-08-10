import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect, useContext } from "react";
import "./ListadoProductos.css";
// import { ContextGlobal } from "../utils/global.context";
import listadoProductosData from "../ListadoProductos.json";

const ListadoProductos = ({ CantidadCards }) => {

  const [listaProductosBase, setListaProductosBase] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      setListaProductosBase(listadoProductosData);
    };
    cargarDatos();
  }, []);

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
    const randomProducts = [...listaProductosBase].sort(() => Math.random() - 0.5);

    const paginatedArray = chunk(randomProducts, CantidadCards);
    setPaginatedProducts(paginatedArray);
  }, [CantidadCards, listaProductosBase]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };



  return (
    <div className="segmento-listado-productos">
      <h3 className="txt-titulo-listado-productos"></h3>

      <div className="grid-container-listado">
        {paginatedProducts.length ? (
          paginatedProducts[currentPage].map((producto, index) => (
            <CardProducto
              key={producto.id}
              title={producto.nombreProducto}
              descripcion={producto.descripcion}
              url={producto.fotos.foto1} // Aquí usamos la URL de la foto
              precio={producto.precio}
              tipoRecurso={producto.tipoRecurso}
              servicio1={producto.servicios.servicio1}
              servicio2={producto.servicios.servicio2}
              servicio3={producto.servicios.servicio3}
            />
          ))
        ) : (
          <>
            <h3> No encontramos productos para recomendar </h3>
            <h3>Los datos del carga son  {listaProductosBase.ListadoProductos}</h3>
          </>
        )}
      </div>

      <div className="pagination">
        {currentPage > 0 && (
          <button onClick={handlePreviousPage}>Anterior</button>
        )}
        {currentPage < paginatedProducts.length - 1 && (
          <button onClick={handleNextPage}>Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default ListadoProductos;

//////
// const [producto, setProducto] = useState([]);

//   const getProductos = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
//     const data = await res.json();
//     setProducto(data);
//   };

//   useEffect(() => {
//     getProductos();
//   }, []);

////////

// const getRandomProductsPaginado = () => {
//   const listadoAleatorio = [...productos].sort(() => Math.random() - 0.2);
//   const cantPaginas = listadoAleatorio.length/10;

//   for (let i = 0; i < cantPaginas.length; i++) {

//      listadoPaginado[i].push(listadoAleatorio.slice(0,10)) ;
//     const element = cantPaginas[i];

//   }
//   listadoAleatorio.slice(0,10)

//   while(listadoAleatorio.length !=0 ){

//   }

//   const randomProducts =[...productos]
//     .sort(() => Math.random() - 0.2)
//     .slice(0, CantidadCards);
//   return randomProducts;
// };

// const productosAleatoriosPaginados = getRandomProductsPaginado();

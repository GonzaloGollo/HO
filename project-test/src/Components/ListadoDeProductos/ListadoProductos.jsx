import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect, useContext } from "react";
import "./ListadoProductos.css";
import { ContextGlobal } from "../utils/global.context";
// import listadoProductosData from "../ListadoProductos.json";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListadoProductos = ({ CantidadCards }) => {
  const navigate = useNavigate();
  // const history = useHistory();
  const { listaProductosBase, setListaProductosBase, cargarDatos } =
    useContext(ContextGlobal);
  console.log(" ----------Listado de Productos");

  console.log(listaProductosBase.length);

  console.log(listaProductosBase);

  const productoMas = {
    id: 17,
    tipoRecurso: "Coworking",
    nombreProducto: "Prueba de nuevo producto",
    descripcion: " Otra descripcion otra descripcion",
    capacidadMáxima: 20,
    precio: "$1800",
    sede: "Chile",
    estadoDisponibilidad: false,
    idReservaVigente: 78,
    servicios: {
      servicio1: "WIFI",
      servicio2: "Fotocopiadora",
      servicio3: "Impresora",
      servicio4: "",
      servicio5: "",
    },
    fotos: {
      foto1:
        "https://c2-team4-images-test-bucket.s3.amazonaws.com/Imagenes09Ago2023/Coworking/coworking2.jpg",
      foto2:
        "https://c2-team4-images-test-bucket.s3.amazonaws.com/Imagenes09Ago2023/Coworking/coworking3.jpg",
      foto3:
        "https://c2-team4-images-test-bucket.s3.amazonaws.com/Imagenes09Ago2023/Coworking/coworking4.jpg",
      foto4:
        "https://c2-team4-images-test-bucket.s3.amazonaws.com/Imagenes09Ago2023/Coworking/coworking5.jpg",
      foto5:
        "https://c2-team4-images-test-bucket.s3.amazonaws.com/Imagenes09Ago2023/Coworking/coworking7.jpg",
    },
  };

  console.log(productoMas);

  const listaPrevia = listaProductosBase;

  const productoAdaptadoObjeto = productoMas;

  useEffect(() => {
    const addToListJson = () => {
      const nuevaLista = [...listaProductosBase, productoAdaptadoObjeto];
      setListaProductosBase(nuevaLista);
    };
    addToListJson();
  }, []);

  useEffect(() => {
    const addToListJson = () => {
      const nuevaLista = [...listaProductosBase, productoAdaptadoObjeto];
      setListaProductosBase(nuevaLista);
    };
    if (
      listaProductosBase.findIndex(
        (item) => item.id === productoAdaptadoObjeto.id
      ) === -1
    ) {
      // Verificamos si el objeto ya existe en la lista antes de agregarlo
      addToListJson();
    }
  }, []);

  console.log(" Aca empieza a mostras el resultado de CARGA");
  console.log(listaProductosBase.length);

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
    const randomProducts = [...listaProductosBase].sort(
      () => Math.random() - 0.5
    );

    const paginatedArray = chunk(randomProducts, CantidadCards);
    setPaginatedProducts(paginatedArray);
  }, [CantidadCards, listaProductosBase]);

 
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  console.log("Tipo de listaProductosBase:", typeof listaProductosBase);
  console.log("Estructura de listaProductosBase:", listaProductosBase);

  console.log("Tipo de productoAdaptadoObjeto:", typeof productoAdaptadoObjeto);
  console.log("Estructura de productoAdaptadoObjeto:", productoAdaptadoObjeto);
  console.log("Estructura de productoMas:", productoMas);



  console.log("Length listaProductosBase:", listaProductosBase);

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
              id={producto.id}
            />
          ))
        ) : (
          <>
            <h3> No encontramos productos para recomendar </h3>
            <h3>
              Los datos del carga son {listaProductosBase.ListadoProductos}
            </h3>
          </>
        )}
      </div>

      <div className="pagination">
      {currentPage > 0 && (
          <button onClick={handlePreviousPage}>Anterior</button>
        )}
        {currentPage < paginatedProducts.length - 1 && (
          <>
            <button onClick={handleNextPage}>Siguiente</button>
         
          </>
        )}


        {currentPage > 0 && (
          <button onClick={handlePreviousPage}>Anterior</button>
        )}
        {currentPage < paginatedProducts.length - 1 && (
          <>
            {/* <button onClick={handleNextPage}>Siguiente</button> */}
            <button onClick={() => navigate(-1)}>Go back</button>
          </>
        )}
        {currentPage < paginatedProducts.length - 1 && (
          <>
            {/* <button onClick={handleNextPage}>Siguiente</button> */}
            <button onClick={() => navigate(1)}>Go forward</button>
          </>
        )}
         {currentPage < paginatedProducts.length - 1 && (
          <>
            <button onClick={handleNextPage}>Siguiente</button>
           
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoProductos;

// const [listaProductosBase, setListaProductosBase] = useState([]);

// useEffect(() => {
//   const cargarDatos = async () => {
//     setListaProductosBase(listadoProductosData);
//   };
//   cargarDatos();
// }, []);

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

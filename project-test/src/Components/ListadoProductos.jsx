import React from "react";
import CardProducto from "./CardProducto";
import { useState, useEffect } from "react";
import "./ListadoProductos.css";

const ListadoProductos = ({ CantidadCards }) => {


  const productos = [
    {
      id: "1",
      name: "Open Space",
      descripcion:
        "Habilitación privada con escitorio ",
      src: "/images/oficinaprivada.jpg",
    },
    {
      id: "2",
      name: "Oficina privada",
      descripcion:
        "Oficina privada para 20 a 30 personas con escritorios, punto de internet, impresora,estación de cafe, terraza y sala de reuniones. ",
      src: "/images/oficinaprivada.jpg",
    },
    {
      id: "3",
      name: "Salas de reunión ",
      descripcion:
        "Oficina privada para dos personas con escritorio, punto de internet. ",
      src: "/images/Sala de reunion2.jpg",
    },
    {
      id: "4",
      name: "Mobiliario",
      descripcion:
        "Oficina privada para 10 a 15 personas con escritorios, punto de internet, impresora,estación de cafe ",
      src: "/images/mobiliario.jpg",
    },
    {
      id: "5",
      name: "Lockers",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Lockers.jpg",
    },
    {
      id: "6",
      name: "Domicilio Fiscal y Jurídic",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Domicilio Fiscal y Jurídic.jpg",
    },
    {
      id: "7",
      name: "Terraza ",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/terraza2.jpg",
    },
    {
      id: "8",
      name: "Escritorio dedicado",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Terraza.jpg",
    },
    {
      id: "9",
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Oficina de planta completa.jpg",
    },
    {
      id: "10",
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/Oficina de planta completa.jpg",
    },
    {
      id: "11",
      name: "Lockers",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/240_F_238254938_MJOrtumj1TTBtDcdbJtjcMbMzDWo83tL.jpg",
    },
    {
      id: "12",
      name: "Domicilio Fiscal y Jurídic",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/240_F_294689806_wM7TOHTVmQsuk5dqX3CEzQwvVHlivPMh.jpg",
    },
    {
      id: "13",
      name: "Terraza ",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/240_F_610971454_DBLcfDXBVOeIJQMGBNbE0r5Szfx3e9OL.jpg",
    },
    {
      id: "14",
      name: "Escritorio dedicado",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/s.jpg",
    },
    {
      id: "15",
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/240_F_339066729_zCf9icIjEsSEIWwCxr2ytFlCO17H74cx.jpg",
    },
    {
      id: "16",
      name: "Oficina de planta completa",
      descripcion:
        "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
      src: "/images/F.jpg",
    },
  ];
//////////////////////////////////////
  // const getRandomProducts = () => {
  //   const randomProducts = [...productos]
  //     .sort(() => Math.random() - 0.2)
  //     .slice(0, CantidadCards);
  //   return randomProducts;
  // };

  // const productosAleatorios = getRandomProducts();
  /////////////////////////////

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
    const paginatedArray = chunk(productos, CantidadCards);
    setPaginatedProducts(paginatedArray);
  }, [productos, CantidadCards]);

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
              className="item-grid"
              title={producto.name}
              descripcion={producto.descripcion}
              url={producto.src}
              precio={producto.id}
            />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
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
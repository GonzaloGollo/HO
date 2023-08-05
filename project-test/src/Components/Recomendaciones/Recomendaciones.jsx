import React from "react";
// import CardProducto from "../CardProducto";
// import { useState, useEffect } from "react";
import "./Recomendaciones.css";
import CardRecomendaciones from "./CardRecomendaciones";
import "./CardRecomendaciones.css";

const Recomendaciones = ({ CantidadCards }) => {
  const productos = [
    // {
    //   id: "1",
    //   name: "Open Space",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/oficinaprivada.jpg",
    // },
    // {
    //   id: "2",
    //   name: "Oficina privada",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/oficinaprivada.jpg",
    // },
    // {
    //   id: "3",
    //   name: "Salas de reunión ",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/Sala de reunion2.jpg",
    // },
    // {
    //   id: "4",
    //   name: "Mobiliario",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/mobiliario.jpg",
    // },
    // {
    //   id: "5",
    //   name: "Lockers",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/Lockers.jpg",
    // },
    // {
    //   id: "6",
    //   name: "Domicilio Fiscal y Jurídic",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/Domicilio Fiscal y Jurídic.jpg",
    // },
    // {
    //   id: "7",
    //   name: "Terraza ",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/terraza2.jpg",
    // },
    // {
    //   id: "8",
    //   name: "Escritorio dedicado",
    //   descripcion:
    //     "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
    //   src: "/images/Terraza.jpg",
    // },
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

  const getRandomProducts = () => {
    const randomProducts = [...productos]
      .sort(() => Math.random() - 0.35)
      .slice(0, CantidadCards);
    return randomProducts;
  };

  const productosAleatorios = getRandomProducts();

  return (
    <div className="segmento-recomendaciones-productos">
      <div className="listado-productos-reco">
        {productosAleatorios.length ? (
          productosAleatorios.map((producto, index) => (
            <CardRecomendaciones
              key={producto.id}
              title={producto.name}
              descripcion={producto.descripcion}
              url={producto.src}
              id={producto.id}
            />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
        )}
      </div>
    </div>
  );
};

export default Recomendaciones;

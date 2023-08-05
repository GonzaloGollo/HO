import React from "react";
import ListadoProductos from "../Components/ListadoDeProductos/ListadoProductos";
import Recomendaciones from "../Components/Recomendaciones/Recomendaciones";

const Home = () => {
  return (
    <>
      <Recomendaciones CantidadCards={3} />
      <ListadoProductos CantidadCards={10} />
    </>
  );
};

export default Home;
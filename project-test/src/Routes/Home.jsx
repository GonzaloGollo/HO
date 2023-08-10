import React from "react";
import ListadoProductos from "../Components/ListadoDeProductos/ListadoProductos";
import Recomendaciones from "../Components/Recomendaciones/Recomendaciones";
import ProductList from "../Components/ListadoDeProductos/ProductList";

const Home = () => {
  return (
    <>
      <Recomendaciones CantidadCards={3} />
      <ListadoProductos CantidadCards={10} />
   
    </>
  );
};

export default Home;
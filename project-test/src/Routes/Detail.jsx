import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [productoID, setProductoID] = useState([]);

  const getProductoID = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setProductoID(data);
    return productoID;
  };
  getProductoID(id);

  return (
    <>
      <div>
        {/* 1er linea con Encabezado con nombre producto   + flecha */}
        <h2>{productoID.name}</h2>
        <div>La flecha para volver atrás debe estar alineada a la derecha.</div>
      </div>
      
      <div>  {/* 2da linea con  Encabezado con nombre producto   + flecha */}
        {/* Body con el texto descriptivo del producto */}
        <h5>Localidad {productoID.username}</h5>
        <div>Pagina Detalle</div>
      </div>
      <div>Galeria de Fotos</div> {/* 3era linea con  Encabezado con nombre producto   + flecha */}
      <div>
         {/* 4ta linea dividida a la mitad con   logos de lo que incluye el producto y la otra mitad con el call to action  a la reserva */}
      </div>


    </>
  );
};

export default Detail;

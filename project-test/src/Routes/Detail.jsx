import React from "react";
import { useState} from "react";
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
        <h2>{productoID.name}</h2>
        <h5>Localidad {productoID.username}</h5>
        <div>Pagina Detalle</div>
         </div>
    </>
  );
};

export default Detail;

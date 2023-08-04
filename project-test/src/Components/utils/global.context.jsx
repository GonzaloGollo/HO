import { useState, useEffect, createContext} from "react";
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
/////////GetDatos //////////////
const [producto, setProducto] = useState([]);

const getDatos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const data = await res.json();
  setProducto(data);
};

useEffect(() => {
    getDatos();
}, []);

// /////////GetDatosxProductoID //////////////
// const [datosID, setDatosID] = useState([]);

// const GetDatosxProductoID = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
//   const data = await res.json();
//   setDatosID(data);
//   return producto;
// };


return (
    <ContextGlobal.Provider
      value={{
        producto,
        GetDatosxProductoID,
        datosID
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
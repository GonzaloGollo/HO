import React from "react";
import "./Categorias.css";
import "./CardCategoria.css";
import CardCategoria from "./CardCategoria";
import { useState, useEffect } from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBuildingStorefront,
  HiOutlineHome,
  HiOutlinePrinter,
  HiOutlineFolder,
  HiOutlineInboxStack,
  HiOutlineTv,
  HiMiniComputerDesktop,
} from "react-icons/hi2";
import { GiOfficeChair } from "react-icons/gi";

const Categorias = ({NombreCategoria}) => {
  return (
    <div className="segmento-categorias">

      <div className="card-categoria">
        {/* <div className="fondo-icono caja-blanca-sombreada"> */}
        <div className="fondo-icono">
          <HiOutlineBuildingOffice2 className="icono" />
        </div>
        <div className="nombre-icono-categoria">Oficina privada</div>
      </div>

      <div className="card-categoria">
        {/* <div className="fondo-icono caja-blanca-sombreada"> */}
        <div className="fondo-icono">
          <HiOutlineBuildingOffice2 className="icono" />
        </div>
        <div className="nombre-icono-categoria">Coworking</div>
      </div>

      <div className="card-categoria  sala-reu">
        {/* <div className="fondo-icono caja-blanca-sombreada"> */}
        <div className="fondo-icono">
          <HiOutlineBuildingOffice2 className="icono" />
        </div>
        <div className="nombre-icono-categoria">Sala de reuniones</div>
      </div>


      <div className="card-categoria  ofi-house">
        {/* <div className="fondo-icono caja-blanca-sombreada"> */}
        <div className="fondo-icono">
          <HiOutlineHome className="icono" />
        </div>
        <div className="nombre-icono-categoria">Office house</div>
      </div>

      <div className="card-categoria  ofi-abierta">
        {/* <div className="fondo-icono caja-blanca-sombreada"> */}
        <div className="fondo-icono">
          <HiMiniComputerDesktop className="icono" />
        </div>
        <div className="nombre-icono-categoria">Oficina abierta</div>
      </div>

     
    </div>
  );
};
export default Categorias;

/////////////////////////////////////////
// const [producto, setProducto] = useState([]);

// const getProductos = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
//   const data = await res.json();
//   setProducto(data);
// };
// useEffect(() => {
//   getProductos();
// }, []);

// const categorias = [
//   {
//     nombre: "Oficina abierta",
//     icono: (
//       <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "50px" }} />
//     ),
//     link: "",
//   },
//   {
//     nombre: "Oficina privada",
//     icono: (
//       <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "50px" }} />
//     ),
//     link: "",
//   },
//   {
//     nombre: "Office house",
//     icono: "<HiOutlineHome style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
//   {
//     nombre: "Puesto de Trabajo",
//     icono: "<GiOfficeChair style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
//   {
//     nombre: "Store Point",
//     icono:
//       "<HiOutlineBuildingStorefront style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
//   {
//     nombre: "Soporte Tecnico",
//     icono: "<HiOutlineTv style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
//   {
//     nombre: "Material tecnico",
//     icono:
//       "<HiMiniComputerDesktop style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
//   {
//     nombre: "Impresiones",
//     icono: "<HiOutlinePrinter style={{ color: 'grey', fontSize: '50px' }}/>",
//     link: "",
//   },
// ];

////////////////////////////////
{
  /* {categorias.length ? (
          categorias.map((categoria) => (
            <CardCategoria key={categoria.nombre} title={categoria.nombre} url={categoria.icono} />
          ))
        ) : (
          <h3> No encontramos productos para recomendar </h3>
        )} */
}

/////////////////////////////////////
// {/*
// <div className="categorias">
//   {producto.length ? (
//     producto.slice(0, 6).map((productos) => (
//       <CardCategoria key={productos.id} title={productos.title} url={productos.url} />
//     ))
//   ) : (
//     <h3> No encontramos productos para recomendar </h3>
//   )}
// </div> */}

//      </div>

//);
/////////////////////////////////
//  {/* <HiOutlineBuildingOffice2 style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineBuildingStorefront style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineHome style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineTv style={{ color: "grey", fontSize: "80px" }}/>

//       <HiMiniComputerDesktop style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlinePrinter style={{ color: "grey", fontSize: "80px" }}/>

//       <HiOutlineFolder style={{ color: "grey", fontSize: "80px" }}/>
//       <HiOutlineInboxStack style={{ color: "grey", fontSize: "80px" }}/>
//       <GiOfficeChair style={{ color: "grey", fontSize: "80px" }}/> */}

////////////////////////////////////////////////////////

// /   const getRandomProducts = () => {
//     //     const randomProducts = [...producto]
//     //       .sort(() => Math.random() - 0.5)
//     //       .slice(0, 6);
//     //     return randomProducts;
//     //   };

//     //   const productosAleatorios = getRandomProducts();

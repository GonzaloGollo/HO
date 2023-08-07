import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Components/Detail.css";
import {
  MdKeyboardArrowLeft,
  MdArrowBackIosNew,
  MdPerson,
  MdWifi,
  MdApartment,
  MdAcUnit,
  MdLocationOn,
  MdSignalWifi2Bar,
} from "react-icons/md";

const Detail = () => {
  // const { id } = useParams();

  // const [productoID, setProductoID] = useState([]);

  // const getProductoID = async (id) => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   const data = await res.json();
  //   setProductoID(data);
  //   return productoID;
  // };
  // getProductoID(id);

  // const [datosProducto, setDatosProducto] = useState({
  //   id: "1",
  //   nombreProducto: "Habilitación privada con escitorio",
  //   descripcion: "Oficina privada para 20 a 30 personas con escritorios, punto de internet, impresora,estación de cafe, terraza y sala de reuniones. ",
  //   fotos: {
  //     foto1: "/images/240_F_339066729_zCf9icIjEsSEIWwCxr2ytFlCO17H74cx.jpg",
  //     foto2: "240_F_339067218_vOkmzJSC56JrOsrDej28FZP8eUYjlMJX.jpg",
  //     foto3: "240_F_339068434_cKk0JCfni4o6f2H9fl5svDmb8wuMr6rJ.jpg",
  //     foto4: "240_F_610971454_DBLcfDXBVOeIJQMGBNbE0r5Szfx3e9OL.jpg",
  //     foto5: "240_F_329295566_V0MgwRwWoO34UKfqAllv89lZ2AJldNwz.jpg",
  //   },
  // });

  const datosProducto = {
    id: "1",
    nombreProducto: "Habilitación privada con escitorio",
    descripcion:
      "Oficina privada para 20 a 30 personas con escritorios, punto de internet, impresora,estación de cafe, terraza y sala de reuniones. ",
    descripcion2:
      " Ubicado en el límite entre Capital Federal y Vicente López, en el corredor norte de la ciudad, HIT Libertador es un edificio corporativo con certificación LEED Gold con increíbles vistas panorámicas al Río de la Plata. En línea con la modalidad de oficinas flexibles y con las nuevas tendencias laborales, HIT Libertador cuenta con pisos de oficinas exclusivas.",
    fotos: {
      foto1: "/images/240_F_339066729_zCf9icIjEsSEIWwCxr2ytFlCO17H74cx.jpg",
      foto2: "/images/240_F_339067218_vOkmzJSC56JrOsrDej28FZP8eUYjlMJX.jpg",
      foto3: "/images/240_F_339068434_cKk0JCfni4o6f2H9fl5svDmb8wuMr6rJ.jpg",
      foto4: "/images/240_F_610971454_DBLcfDXBVOeIJQMGBNbE0r5Szfx3e9OL.jpg",
      foto5: "/images/240_F_329295566_V0MgwRwWoO34UKfqAllv89lZ2AJldNwz.jpg",
    },
  };

  // const getProductoID = async(id) => {
  //     const res = await fetch(`datosProducto(${id})`);
  //     const data = await.res.json();
  //     setDatosProducto(data);
  //     return datosProducto;
  // };

  // const productos = [
  //   {
  //     id: "1",
  //     name: "Open Space",
  //     descripcion: "Habilitación privada con escitorio ",
  //     src: "/images/oficinaprivada.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "Oficina privada",
  //     descripcion:
  //       "Oficina privada para 20 a 30 personas con escritorios, punto de internet, impresora,estación de cafe, terraza y sala de reuniones. ",
  //     src: "/images/oficinaprivada.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "Salas de reunión ",
  //     descripcion:
  //       "Oficina privada para dos personas con escritorio, punto de internet. ",
  //     src: "/images/Sala de reunion2.jpg",
  //   },
  //   {
  //     id: "4",
  //     name: "Mobiliario",
  //     descripcion:
  //       "Oficina privada para 10 a 15 personas con escritorios, punto de internet, impresora,estación de cafe ",
  //     src: "/images/mobiliario.jpg",
  //   },
  //   {
  //     id: "5",
  //     name: "Lockers",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/Lockers.jpg",
  //   },
  //   {
  //     id: "6",
  //     name: "Domicilio Fiscal y Jurídic",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/Domicilio Fiscal y Jurídic.jpg",
  //   },
  //   {
  //     id: "7",
  //     name: "Terraza ",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/terraza2.jpg",
  //   },
  //   {
  //     id: "8",
  //     name: "Escritorio dedicado",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/Terraza.jpg",
  //   },
  //   {
  //     id: "9",
  //     name: "Oficina de planta completa",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/Oficina de planta completa.jpg",
  //   },
  //   {
  //     id: "10",
  //     name: "Oficina de planta completa",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/Oficina de planta completa.jpg",
  //   },
  //   {
  //     id: "11",
  //     name: "Lockers",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/240_F_238254938_MJOrtumj1TTBtDcdbJtjcMbMzDWo83tL.jpg",
  //   },
  //   {
  //     id: "12",
  //     name: "Domicilio Fiscal y Jurídic",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/240_F_294689806_wM7TOHTVmQsuk5dqX3CEzQwvVHlivPMh.jpg",
  //   },
  //   {
  //     id: "13",
  //     name: "Terraza ",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/240_F_610971454_DBLcfDXBVOeIJQMGBNbE0r5Szfx3e9OL.jpg",
  //   },
  //   {
  //     id: "14",
  //     name: "Escritorio dedicado",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/s.jpg",
  //   },
  //   {
  //     id: "15",
  //     name: "Oficina de planta completa",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/240_F_339066729_zCf9icIjEsSEIWwCxr2ytFlCO17H74cx.jpg",
  //   },
  //   {
  //     id: "16",
  //     name: "Oficina de planta completa",
  //     descripcion:
  //       "El lugar ideal para que trabajes solo con tu equipo. Comodidad y Espacio Asegurados, Mobiliario de Última generación. ",
  //     src: "/images/F.jpg",
  //   },
  // ];

  // const { id } = useParams();

  // getProductoID(id);

  return (
    <>
      <div className="segmento-producto">
        <div className="encabezado-descripcion">
          <div className="contenido-encabezado">
            <div className="encabezado">
              <h1>{datosProducto.nombreProducto}</h1>
              <MdArrowBackIosNew className="flecha" />
            </div>
            <h3 className="descripcion">Localidad {datosProducto.descripcion}</h3>
          </div>
        </div>

        <div className="galeria-detalleservicios-compra">
          <div className="grid-container-galeria">
            <img
              className="item-grid-fotos1 foto-producto block"
              src={datosProducto.fotos.foto1}
            />
            <img
              className="item-grid-fotos2 foto-producto block"
              src={datosProducto.fotos.foto2}
            />
            <img
              className="item-grid-fotos3 foto-producto block"
              src={datosProducto.fotos.foto3}
            />
            <img
              className="item-grid-fotos4 foto-producto block"
              src={datosProducto.fotos.foto4}
            />
            <img
              className="item-grid-fotos5 foto-producto block"
              src={datosProducto.fotos.foto5}
            />
          </div>
          <div className="ver-mas">
            + Ver más
            {/* 4ta linea dividida a la mitad con logos de lo que incluye el producto y la otra mitad con el call to action  a la reserva */}
          </div>
          {/* <div>Pagina Detalle</div> */}
          <div className="contenedor-detalle-producto">
            <p className="descripcion-producto">{datosProducto.descripcion2}</p>
            <div className="segmento-icon-detalle">
              <div className="items-icon-detalle">
                <MdPerson className="icono-detalle-producto" />
                <p>para 3 personas</p>
              </div>

              <div className="items-icon-detalle">
                <MdWifi className="icono-detalle-producto" />
                <p>internet</p>
              </div>
              <div className="items-icon-detalle">
                <MdApartment className="icono-detalle-producto" />
                <p>Piso exclusivo hecho a tu medida.</p>
              </div>
              <div className="items-icon-detalle">
                <MdAcUnit className="icono-detalle-producto" />
                <p>aire acondicionado </p>
              </div>
              <div className="items-icon-detalle">
                <MdLocationOn className="icono-detalle-producto" />
                <p>En la ubicación que tu elijas</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3era linea con  Encabezado con nombre producto   + flecha */}
      </div>
    </>
  );
};

export default Detail;

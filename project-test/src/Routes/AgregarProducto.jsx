import React, { useState, useContext, useEffect } from "react";

import "../Components/AgregarProducto.css";
import Error from "../Components/Error";
import { Boton } from "../Components/Genericos/Boton";
import PreviewProduct from "../Components/PreviewProduct.jsx";
import { ContextGlobal } from "../Components/utils/global.context";

const AgregarProducto = () => {
  const { listaProductosBase, setListaProductosBase } =
    useContext(ContextGlobal);

  const [showPreview, setShowPreview] = useState(false);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const MAX_SELECTED_SERVICES = 5;

  // const [sede, setSede] = useState({
  //     id:"",
  //     sede:"",
  //     ciudad: "",
  //     pais: "",
  //     });

  const sedesArray = [
    {
      id: 1,
      nombre: "Argentina",
      direccion: "Libertador 2100, Capital Federal.",
    },
    {
      id: 2,
      nombre: "Colombia",
      direccion: "CR 2 #5-27, Bogota.",
    },
    {
      id: 3,
      nombre: "Chile",
      direccion: "Avenida Presidente Kennedy 4420. Santiago de Chile.",
    },
  ];

  const tipoRecursoArray = [
    {
      id: 1,
      tipo: "Oficina Privada",
    },
    {
      id: 2,
      tipo: "Coworking",
    },
    {
      id: 3,
      tipo: "Sala de Reuniones",
    },
    {
      id: 4,
      tipo: "Sala Flexible",
    },
    {
      id: 5,
      tipo: "Sala Auditorio",
    },
  ];

  const capacidadArray = [
    {
      id: 1,
      cantidad: 1,
    },
    {
      id: 2,
      cantidad: "2",
    },
    {
      id: 3,
      cantidad: "3",
    },
    {
      id: 4,
      cantidad: "4",
    },
    {
      id: 5,
      cantidad: "5",
    },
    {
      id: 10,
      cantidad: "10",
    },
    {
      id: 20,
      cantidad: "20",
    },
  ];

  const serviciosArray = [
    {
      id: 1,
      tipo: "Wifi",
    },
    {
      id: 2,
      tipo: "Internet de alta velocidad",
    },
    {
      id: 3,
      tipo: "Impresora y escáner",
    },
    {
      id: 4,
      tipo: "Terraza",
    },
    {
      id: 5,
      tipo: "Sala de juegos",
    },
    {
      id: 6,
      tipo: "Estacionamiento",
    },
    {
      id: 7,
      tipo: "Locker",
    },
    {
      id: 8,
      tipo: "Seguridad privada",
    },
  ];

  const [producto, setProducto] = useState({
    id: "",
    tipoRecurso: "",
    nombreProducto: "",
    descripcion: "",
    capacidadMáxima: 0,
    precio: "",
    sede: "",
    estadoDisponibilidad: false,
    idReservaVigente: "",
    servicios: {
      servicio1: "",
      servicio2: "",
      servicio3: "",
      servicio4: "",
      servicio5: "",
    },
    fotos: {
      foto1: "",
      foto2: "",
      foto3: "",
      foto4: "",
      foto5: "",
    },
  });

  const [form, setForm] = useState(false);

  const [VerError, setVerError] = useState("");

  //////////////////OnChanges///////////////

  const onChangeNombreProducto = (e) => {
    setProducto({ ...producto, nombreProducto: e.target.value });
    setVerError("");
  };

  const onChangeDescripcion = (e) => {
    setProducto({ ...producto, descripcion: e.target.value });
    setVerError("");
  };
  const onChangeTipoRecurso = (e) => {
    setProducto({ ...producto, tipoRecurso: e.target.value });
    setVerError("");
  };

  const onChangeCapacidadMáxima = (e) => {
    setProducto({ ...producto, capacidadMáxima: e.target.value });
    setVerError("");
  };

  const onChangePrecioProducto = (e) => {
    setProducto({ ...producto, precio: e.target.value });
    setVerError("");
  };

  const onChangeSede = (e) => {
    setProducto({ ...producto, sede: e.target.value });
    setVerError("");
  };

  const onChangeDisponibilidad = (e) => {
    setProducto({ ...producto, estadoDisponibilidad: e.target.value });
    setVerError("");
  };

  const onChangeServicios = (e) => {
    const selectedServiceId = e.target.value;

    if (selectedServiceIds.includes(selectedServiceId)) {
      setSelectedServiceIds(selectedServiceIds.filter(id => id !== selectedServiceId));
    } else {
      if (selectedServiceIds.length < MAX_SELECTED_SERVICES) {
        setSelectedServiceIds([...selectedServiceIds, selectedServiceId]);
      }
    }

    setVerError("");
  };
  

  const onChangeFoto = (e) => {
    const fotos = e.target.files; // Obtener los archivos seleccionados
    const fotosArray = Array.from(fotos); // Convertir FileList en un array

    // Crear un objeto con las URLs temporales de las fotos seleccionadas
    const fotosTempUrls = fotosArray.map((foto) => URL.createObjectURL(foto));

    setProducto({
      ...producto,
      fotos: {
        foto1: fotosTempUrls[0] || "",
        foto2: fotosTempUrls[1] || "",
        foto3: fotosTempUrls[2] || "",
        foto4: fotosTempUrls[3] || "",
        foto5: fotosTempUrls[4] || "",
      },
    });

    setVerError("");
  };

  ///////////////Validaciones ///////////////////
  const validarNombreProducto = (n) => {
    const regex = /^[A-Za-z\s]{6,40}$/;
    if (regex.test(n)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmitCrearProducto = (e) => {
    e.preventDefault();
    const isUsernameValid = validarNombreProducto(producto.nombreProducto);

    if (isUsernameValid) {
      setForm(true);
      // setShowPreview(true);
      console.log(form);

      const nuevoProducto = {
        id: listaProductosBase.length + 1, // Aquí podrías usar un ID único, dependiendo de tu lógica
        tipoRecurso: producto.tipoRecurso,
        nombreProducto: producto.nombreProducto,
        descripcion: producto.descripcion,
        capacidadMaxima: producto.capacidadMáxima,
        precio: producto.precio,
        sede: producto.sede,
        estadoDisponibilidad: producto.estadoDisponibilidad,
        fotos: producto.fotos,
      };
      console.log(listaProductosBase);

      // useEffect(() => {
      const addToProdALista = () => {
        const nuevoArrayProductos = [...listaProductosBase, nuevoProducto];
        setListaProductosBase(nuevoArrayProductos);
      };
      addToProdALista();
      // }, []);
      console.log(listaProductosBase.length);
      console.log(listaProductosBase);
      setVerError("");
    } else {
      <Error />;
      setForm(false);
      setProducto({
        id: "",
        tipoRecurso: "",
        nombreProducto: "",
        descripcion: "",
        capacidadMáxima: "",
        precio: "",
        sede: "",
        estadoDisponibilidad: "",
        idReservaVigente: "",
        servicios: {
          servicio1: "",
          servicio2: "",
          servicio3: "",
          servicio4: "",
          servicio5: "",
        },
        fotos: {
          foto1: "",
          foto2: "",
          foto3: "",
          foto4: "",
          foto5: "",
        },
      });
      setVerError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div className="pagina-formulario-alta-producto">
      <div className="encabezado-formulario">
        <div className="titulo-form-inicio-sesion">Agrega productos</div>
      </div>

      <form onSubmit={handleSubmitCrearProducto}>
        <div className="formularioAgregarProducto">
          <div className="campo-anotacion">
            <label className="anotacion" for="nombreProducto">
              Nombre del producto *
            </label>
            <input
              id="nombreProducto"
              className="campo-formulario"
              type="text"
              placeholder="Ingresa el nombre del producto "
              value={producto.nombreProducto}
              onChange={onChangeNombreProducto}
            />
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="descripcion">
              Descripcion *
            </label>
            <textarea
              id="descripcion"
              className="campo-formulario"
              type="text"
              placeholder="Ingrese una descripcion"
              value={producto.descripcion}
              onChange={onChangeDescripcion}
            />
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="tipoRecurso">
              Tipo de Recurso *
            </label>
            <select
              id="tipoRecurso"
              className="campo-formulario"
              type="text"
              placeholder="Elija un tipo de recurso"
              value={producto.tipoRecurso}
              onChange={onChangeTipoRecurso}
            >
              {tipoRecursoArray.map((tipoRecurso) => (
                <option
                  key={tipoRecurso.id}
                  className="item-grid"
                  value={tipoRecurso.id}
                >
                  {tipoRecurso.tipo}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-anotacion">
            <div className="anotacion">Capacidad máxima *</div>
            <select
              className="campo-formulario"
              type="text"
              placeholder="Elija una capacidad máxima"
              value={producto.capacidadMáxima}
              onChange={onChangeCapacidadMáxima}
            >
              {capacidadArray.map((cant) => (
                <option
                  key={cant.id}
                  className="item-grid"
                  value={cant.cantidad}
                >
                  {cant.cantidad}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-anotacion">
            <label className="anotacion">Selecciona hasta 5 servicios *</label>
            {serviciosArray.map((servicio) => (
              <div key={servicio.id}>
                <input
                  type="checkbox"
                  id={`servicio-${servicio.id}`}
                  name={`servicio-${servicio.id}`}
                  value={servicio.id}
                  checked={selectedServiceIds.includes(servicio.id)}
                  onChange={onChangeServicios}
                  disabled={selectedServiceIds.length >= MAX_SELECTED_SERVICES && !selectedServiceIds.includes(servicio.id)}
                />
                <label htmlFor={`servicio-${servicio.id}`}>
                  {servicio.tipo}
                </label>
              </div>
            ))}
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="precioProducto">
              Precio del producto *
            </label>
            <input
              id="precioProducto"
              className="campo-formulario"
              type="number"
              placeholder="Ingresa el precio del producto "
              value={producto.precio}
              onChange={onChangePrecioProducto}
            />
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="sede">
              Elija una Sede *
            </label>
            <select
              id="sede"
              className="campo-formulario"
              type="text"
              placeholder="Elija una Sede"
              value={producto.sede}
              onChange={onChangeSede}
            >
              {sedesArray.map((sede) => (
                <option key={sede.id} className="item-grid" value={sede.id}>
                  {sede.nombre}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="disponible">
              Esta Disponible? *
            </label>
            <select
              id="disponible"
              className="campo-formulario"
              type="text"
              placeholder="Elija un tipo de recurso"
              value={producto.estadoDisponibilidad}
              onChange={onChangeDisponibilidad}
            >
              <option className="item-grid" value={true}>
                Si
              </option>
              <option className="item-grid" value={false}>
                No
              </option>
            </select>
          </div>

          <div className="campo-anotacion">
            <label className="anotacion" for="fotos">
              Ingresa las fotos del producto *
            </label>
            <input
              type="file"
              id="fotos"
              name="fotos"
              accept=".jpg, .jpeg, .png"
              onChange={onChangeFoto}
              multiple
            />
          </div>

          {/* 
          idReservaVigente: "",
    servicios: {
      servicio1: "",
      servicio2: "",
      servicio3: "",
      servicio4: "",
      servicio5: "",
    }, */}

          {/* //////////////-----------------------------////////////// */}
          <div className="boton-acceso-agregar-producto">
            <button className="boton" type="submit" value="Guardar">
              Guardar
            </button>
            <button className="boton" type="reset">
              Cancelar
            </button>
          </div>
        </div>
        {form && (
          <h5>
            Gracias usuario.nombre!! Te contactaremos cuanto antes vía mail
          </h5>
        )}

        {VerError !== "" && <Error />}
      </form>
      <div className="acceso-cuenta-o-usuarionuevo"></div>

      {showPreview && <PreviewProduct producto={producto} />}
    </div>
  );
};

export default AgregarProducto;

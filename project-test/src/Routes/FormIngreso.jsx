import React, { useState } from "react";

import "../Components/FormIngreso.css";
import Error from "../Components/Error";

const FormIngreso = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    // direccion: "",
    // email: "",
  });

  // const [producto, setProducto] = useState({
  //     nombreProducto: "",
  //         direccion: "",
  //         descripcion: "",
  //         servicios: "",
  //         fotos: "",
  //         costoPorDia: 0,
  //         disponible:false,
  //         contactoEmail:"",

  // })

  const [form, setForm] = useState(false);

  const [VerError, setVerError] = useState("");

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
    setVerError("");
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
    setVerError("");
  };

  const validarNombre = (n) => {
    const regex = /^[A-Za-z\s]{5,30}$/;
    if (regex.test(n)) {
      return true;
    } else {
      return false;
    }
  };

  const validarEmail = (em) => {
    const emSinEspacio = em.trim();

    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (emailRegexp.test(emSinEspacio)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = validarNombre(usuario.nombre);
    const isEmailValid = validarEmail(usuario.email);

    if (isUsernameValid && isEmailValid) {
      setForm(true);
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("");
    } else {
      <Error />;
      setForm(false);
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div className="pagina-formulario">
      <div className="encabezado-formulario">
        <div className="titulo-form-inicio-sesion">Inicia sesión ahora</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formulario">
          <div  className="campo-anotacion">
            <div className="anotacion">Username *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Enter your Username or Email"
              value={usuario.nombre}
              onChange={onChangeNombre}
            />
          </div>
          <div  className="campo-anotacion">
            <div className="anotacion">Password *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Email"
              value={usuario.email}
              onChange={onChangeEmail}
            />
          </div>
          <div  className="boton-acceso">
          <div type="submit" value="Acceso" /> Acceso </div>
          
        </div>
        {form && (
          <h5>
            Gracias usuario.nombre!! Te contactaremos cuanto antes vía mail
          </h5>
        )}

        {VerError !== "" && <Error />}
      </form>
      <div className="acceso-cuenta-o-usuarionuevo">
        <div>No tenés cuenta?</div>
        <div>Se te olvidó tu contraseña?</div>
      </div>
    </div>
  );
};

export default FormIngreso;

import React, { useState } from "react";
import "../Components/FormIngreso.css";
import Error from "../Components/Error";

const FormIngreso = () => {
  // const textoBotonIniciar = "Iniciar";
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [form, setForm] = useState(false);

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
  };

  const onChangePass = (e) => {
    setUsuario({ ...usuario, password: e.target.value });
  };

  const validarNombre = (n) => {
    const regex = /^[A-Za-z\s]{3,30}$/;
    if (regex.test(n)) {
      setNombreValido(true);
      return true;
    } else {
      setNombreValido(false);
      return false;
    }
  };

  const validarEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{3}$/;
    if (regex.test(e)) {
      setEmailValido(true);
      return true;
    } else {
      setEmailValido(false);
      return false;
    }
  };

  const validarPassword = (p) => {
    // const regex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(.{8,})$/;
    const emSinEspacio = p.trim();

    const passRegexp = new RegExp( /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(.{8,})$/);
    if (passRegexp.test(emSinEspacio)) {
      setPasswordValido(true);
      return true;
    } else {
      setPasswordValido(false);
      return false;
    }
 
    // if (regex.test(p)) {
    //   setPasswordValido(true);
    //   return true;
    // } else {
    //   setPasswordValido(false);
    //   return false;
    // }
  };

  const validarFormulario = () => {
    return (
      validarNombre(usuario.nombre) &&
      validarEmail(usuario.email) &&
      validarPassword(usuario.password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setForm(true);
      console.log("Datos Enviados");
      console.log(usuario);
      // dfsf ENVIAR DATOS
      setUsuario({
        nombre: "",
        email: "",
        password: "",
      });
    } else {
      setForm(false);
      console.log("Datos No Enviados");
      console.log(usuario);
      setUsuario({
        nombre: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="pagina-formulario-Ingreso">
        <div className="encabezado-formulario">
          <div className="titulo-form-inicio-sesion">Inicia sesión ahora</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formulario-inicio">
            <div className="campo-anotacion">
              <div className="anotacion">Username *</div>
              <input
                className="campo-formulario"
                type="text"
                placeholder="Enter your Username or Email"
                value={usuario.nombre}
                onChange={onChangeNombre}
              />
            </div>
            {!nombreValido && (
              <Error mensajeError="El nombre debe tener entre 3 y 30 caracteres y solo contener letras." />
            )}

            <div className="campo-anotacion">
              <div className="anotacion">Email *</div>
              <input
                className="campo-formulario"
                type="text"
                placeholder="Email"
                value={usuario.email}
                onChange={onChangeEmail}
              />
            </div>
            {!emailValido && (
              <Error mensajeError="El email debe tener al menos 3 caracteres antes del arroba y tener un formato válido." />
            )}

            <div className="campo-anotacion">
              <div className="anotacion">Password *</div>
              <input
                className="campo-formulario"
                type="password"
                placeholder="Password"
                value={usuario.password}
                onChange={onChangePass}
              />
            </div>
            {!passwordValido && (
              <Error mensajeError="La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un carácter no alfanumérico." />
            )}

            <button className="boton" type="submit" value="Acceso">
              Acceso
            </button>
          </div>

          {form && (
            <h5 className="msj-form-guardado">
              Gracias!! Has ingresado como usuario a HomeOFF !
            </h5>
          )}
        </form>
        <div className="acceso-cuenta-o-usuarionuevo">
          <div>No tenés cuenta?</div>
          <div>Se te olvidó tu contraseña?</div>
        </div>
      </div>
    </>
  );
};

export default FormIngreso;

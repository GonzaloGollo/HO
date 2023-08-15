import React, { useState } from "react";
import { Boton } from "../Components/Genericos/Boton";
import "../Components/FormAltaUser.css";
import Error from "../Components/Error";

const FormAltaUser = () => {
  const textoBotonGuardarForm = "Crear Cuenta";

  //Repo de validaciones
  const [nombreValido, setNombreValido] = useState(true);
  const [apellidoValido, setApellidoValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);
  const [confirmacionEmailValido, setConfirmacionEmailValido] = useState(true);
  // const [direccionValida, setDireccionValida] = useState(true);
  // const [paisValido, setPaisValido] = useState(true);
  // const [telefono, setTelefonoValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);
  const [confirmacionPasswordValido, setConfirmacionPasswordValido] =
    useState(true);

  /// Definicion de User/Objeto
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmacionEmail: "",
    // direccion: "",
    // pais: "",
    telefono: "",
    password: "",
    confirmarPassword: "",
  });

  /// Definicion de Form

  const [form, setForm] = useState(false);

  //////////////////OnChanges///////////////

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  const onChangeApellido = (e) => {
    setUsuario({ ...usuario, apellido: e.target.value });
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
  };

  const onChangeConfirmacionEmail = (e) => {
    setUsuario({ ...usuario, confirmacionEmail: e.target.value });
  };

  // const onChangeDireccion = (e) => {
  //   setUsuario({ ...usuario, direccion: e.target.value });
  //   setVerError("");
  // };

  // const onChangePais = (e) => {
  //   setUsuario({ ...usuario, pais: e.target.value });
  //   setVerError("");
  // };

  // const onChangeTelefono = (e) => {
  //   setUsuario({ ...usuario, telefono: e.target.value });
  //   setVerError("");
  // };

  const onChangePassword = (e) => {
    setUsuario({ ...usuario, password: e.target.value });
  };

  const onChangeConfirmacionPassword = (e) => {
    setUsuario({ ...usuario, confirmarPassword: e.target.value });
  };

  ///////////////Validaciones ///////////////////

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

  const validarApellido = (n) => {
    const regex = /^[A-Za-z\s]{2,30}$/;
    if (regex.test(n)) {
      setApellidoValido(true);
      return true;
    } else {
      setApellidoValido(false);
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

  const validarConfirmacionEmail = (e) => {
    if (usuario.confirmacionEmail === usuario.email) {
      setConfirmacionEmailValido(true);
      return true;
    } else {
      setConfirmacionEmailValido(false);
      return false;
    }
  };

  const validarPassword = (p) => {
    const emSinEspacio = p.trim();
    const passRegexp = new RegExp(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(.{8,})$/);
    if (passRegexp.test(emSinEspacio)) {
      setPasswordValido(true);
      return true;
    } else {
      setPasswordValido(false);
      return false;
    }
  };

  const validarConfirmacionPassword = (e) => {
    if (usuario.confirmarPassword === usuario.password) {
      setConfirmacionPasswordValido(true);
      return true;
    } else {
      setConfirmacionPasswordValido(false);
      return false;
    }
  };

  ////// Validacion Form /////
  const validarFormulario = () => {
    return (
      validarNombre(usuario.nombre) &&
      validarApellido(usuario.apellido) &&
      validarEmail(usuario.email) &&
      validarConfirmacionEmail(usuario.confirmacionEmail) &&
      validarPassword(usuario.password) &&
      validarConfirmacionPassword(usuario.confirmacionPasswordValido)
    );
  };

  /////////handleSubmit //////
  const handleSubmitCrearCuenta = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setForm(true);
      console.log("Datos Enviados");
      console.log(usuario);
      // dfsf ENVIAR DATOS

      setUsuario({
        nombre: "",
        apellido: "",
        email: "",
        confirmacionEmail: "",
        // direccion: "",
        // pais: "",
        telefono: "",
        password: "",
        confirmarPassword: "",
      });
    } else {
      console.log("Datos NO Enviados");
      console.log(usuario);
      setForm(false);
      setUsuario({
        nombre: "",
        apellido: "",
        email: "",
        confirmacionEmail: "",
        // direccion: "",
        // pais: "",
        telefono: "",
        password: "",
        confirmarPassword: "",
      });
    }
  };

  return (
    <div className="pagina-formulario-alta">
      <div className="encabezado-formulario">
        <div className="titulo-form-inicio-sesion">Crea tu cuenta</div>
      </div>

      <form onSubmit={handleSubmitCrearCuenta}>
        <div className="formularioAltaUser">
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
            <div className="anotacion">Apellido *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Ingresa tu apellido"
              value={usuario.apellido}
              onChange={onChangeApellido}
            />
          </div>
          {!apellidoValido && (
            <Error mensajeError="El apellido debe tener entre 2 y 30 caracteres y solo contener letras." />
          )}

          <div className="campo-anotacion">
            <div className="anotacion">Email *</div>
            <input
              className="campo-formulario"
              type="email"
              placeholder="Email"
              value={usuario.email}
              onChange={onChangeEmail}
              style={{ borderColor: emailValido ? "" : "red" }}
            />
          </div>
          {!emailValido && (
            <Error mensajeError="El email debe tener al menos 3 caracteres antes del arroba y tener un formato válido." />
          )}

          <div className="campo-anotacion">
            <div className="anotacion">Confirmar Email *</div>
            <input
              className="campo-formulario"
              type="email"
              placeholder="Confirmar Email"
              value={usuario.confirmacionEmail}
              onChange={onChangeConfirmacionEmail}
              style={{ borderColor: confirmacionEmailValido ? "" : "red" }}
            />
          </div>
          {!confirmacionEmailValido && (
            <Error mensajeError="Los emails no coinciden" />
          )}

          <div className="campo-anotacion">
            <div className="anotacion">Password *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Password"
              value={usuario.password}
              onChange={onChangePassword}
            />
          </div>
          {!passwordValido && (
            <Error mensajeError="La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un carácter no alfanumérico." />
          )}

          <div className="campo-anotacion">
            <div className="anotacion">Confirmacion Password *</div>
            <input
              className="campo-formulario"
              type="password"
              placeholder="Confirmar password"
              value={usuario.confirmarPassword}
              onChange={onChangeConfirmacionPassword}
            />
          </div>
          {!confirmacionPasswordValido && (
            <Error mensajeError="Los passwords no coinciden" />
          )}

          {/* //////////////-----------------------------////////////// */}
          <button className="boton" type="submit" value="Acceso">
            Crear Cuenta
          </button>
        </div>
        {form && (
          <h5 className="msj-form-guardado">
            Gracias !! Te has registrado como usuario de HomeOFF!!
          </h5>
        )}
      </form>
      <div className="acceso-cuenta-o-usuarionuevo">
        <div>No tenés cuenta?</div>
        <div>Se te olvidó tu contraseña?</div>
      </div>
    </div>
  );
};

export default FormAltaUser;

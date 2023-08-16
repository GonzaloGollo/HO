import React, { useState } from "react";
import "../Components/FormIngreso.css";
import Error from "../Components/Error";
import { MdCheckCircleOutline, MdHighlightOff } from "react-icons/md";

const FormIngreso = () => {
  /////////////////////////

  // Repo de validaciones

  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);

  // / Definicion de User/Objeto
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  // / Definicion de Form
  const [form, setForm] = useState(false);

  ////////////////OnChanges///////////////

  // const onChangeNombre = (e) => {

  //   setUsuario({ ...usuario, nombre: e.target.value });

  //   setNombreValido(true);
  // };

  // const onChangeEmail = (e) => {
  //   setUsuario({ ...usuario, email: e.target.value });
  //   setEmailValido(true);
  // };

  // const onChangePass = (e) => {
  //   setUsuario({ ...usuario, password: e.target.value });
  //   setPasswordValido(true);
  // };

  const onChangeNombre = (e) => {
    const newValue = e.target.value;
    setUsuario({ ...usuario, nombre: newValue });
    validarNombre(newValue);
  };

  const onChangeEmail = (e) => {
    const newValue = e.target.value;
    setUsuario({ ...usuario, email: newValue });
    validarEmail(newValue);
  };

  const onChangePass = (e) => {
    const newValue = e.target.value;
    setUsuario({ ...usuario, password: newValue });
    validarPassword(newValue);
  };

  //////////Validaciones ///////////////////

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
    const emSinEspacio = p.trim();

    const passRegexp = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])[\s\S]{8,}$/;
    if (passRegexp.test(emSinEspacio)) {
      setPasswordValido(true);
      return true;
    } else {
      setPasswordValido(false);
      return false;
    }
  };

  const validarFormulario = () => {
    return (
      validarNombre(usuario.nombre) &&
      validarEmail(usuario.email) &&
      validarPassword(usuario.password)
    );
  };

  ///////handleSubmit //////
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
            <div className="form-control">
              <label for="nombre">Username *</label>
              <input
                className={` ${nombreValido ? "border-valid" : "border-error"}`}
                type="text"
                placeholder="Ingresa tu nombre"
                value={usuario.nombre}
                onChange={onChangeNombre}
                id="nombre"
              />
              {!nombreValido ? (
                <Error
                  className="error-form"
                  mensajeError="Ingrese entre 3 y 30 caracteres y solo contener letras."
                />
              ) : (
                ""
              )}
            </div>

            <div className="form-control">
              <label for="email">Email *</label>
              <input
                className={` ${emailValido ? "border-valid" : "border-error"}`}
                type="text"
                placeholder="ejemplo@gmail.com"
                value={usuario.email}
                onChange={onChangeEmail}
                id="email"
              />
              {!emailValido ? (
                <Error
                  className="error-form"
                  mensajeError="El email debe tener al menos 3 caracteres antes del arroba y tener un formato válido."
                />
              ) : (
                ""
              )}
            </div>

            <div className="form-control">
              <label for="pass">Password *</label>
              <input
                className={` ${passwordValido ? "border-valid" : "border-error"}`}
                type="password"
                placeholder="Password"
                value={usuario.password}
                onChange={onChangePass}
                id="pass"
              />

              {!passwordValido ? (
                <Error
                  className="error-form"
                  mensajeError="La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un carácter no alfanumérico."
                />
              ) : (
                ""
              )}
            </div>

            <button className="boton-form-inicio" type="submit" value="Acceso">
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

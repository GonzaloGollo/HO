import React, { useState } from "react";
import "../Components/FormIngreso.css";
import Error from "../Components/Error";

const FormIngreso = () => {
  const [errores, setErrores] = useState({
    mensajeErrorPass: "",
    mensajeErrorMail: "",
    mensajeErrorNombre: "",
  });

  const textoBotonIniciar = "Iniciar";

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    pass: "",
  });
  const [form, setForm] = useState(false);

  // const [VerError, setVerError] = useState("");

  const onChangeNombre = (e) => {
    setErrores({
      ...errores,
      mensajeErrorNombre: "", // Limpias el mensaje de error correspondiente
    });
    setUsuario({ ...usuario, nombre: e.target.value });
    setVerError("");
  };

  const onChangeEmail = (e) => {
    setErrores({
      ...errores,
      mensajeErrorMail: "", // Limpias el mensaje de error correspondiente
    });
    setUsuario({ ...usuario, email: e.target.value });
    setVerError("");
  };

  const onChangePass = (e) => {
    setErrores({
      ...errores,
      mensajeErrorPass: "", // Limpias el mensaje de error correspondiente
    });
    setUsuario({ ...usuario, pass: e.target.value });
    setVerError("");
  };
  const validarNombre = (n) => {
    const regex = /^[A-Za-z\s]{3,30}$/;
    if (regex.test(n)) {
      setErrores({
        ...errores,
        mensajeErrorNombre: "", // Limpias el mensaje de error correspondiente
      });
      return true;
    } else {
      setErrores({
        ...errores,
        mensajeErrorNombre: "Debe ingresar un nombre con mas de 3 y menos de 30 caracteres.",
      });
      return false;
    }
  };
  
  const validarEmail = (em) => {
    const emSinEspacio = em.trim();
  
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (emailRegexp.test(emSinEspacio)) {
      setErrores({
        ...errores,
        mensajeErrorMail: "", // Limpias el mensaje de error correspondiente
      });
      return true;
    } else {
      setErrores({
        ...errores,
        mensajeErrorMail: "Por favor ingrese un email válido.",
      });
      return false;
    }
  };
  
  const validarPass = (em) => {
    const emSinEspacio = em.trim();
    const passRegexp = new RegExp(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(.{8,})$/);
    if (passRegexp.test(emSinEspacio)) {
      setErrores({
        ...errores,
        mensajeErrorPass: "", // Limpias el mensaje de error correspondiente
      });
      return true;
    } else {
      setErrores({
        ...errores,
        mensajeErrorPass: "La contraseña debe tener al menos 1 letra mayúscula, 1 carácter no alfanumérico y tener al menos 8 caracteres.",
      });
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.reset();
    const isUsernameValid = validarNombre(usuario.nombre);
    const isEmailValid = validarEmail(usuario.email);
    const isPassValid = validarPass(usuario.pass);
    if (isUsernameValid && isEmailValid && isPassValid) {
      setForm(true);
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("");
      setMensajeErrorPass("");
      setMensajeErrorMail("");
      setMensajeErrorNombre("");
    } else {
      // No necesitas <Error /> aquí
      setForm(false);
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("Por favor chequea que la información sea correcta");
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
            {!validarNombre(usuario.nombre) && (
              <div>
                {/* <p style={{ color: "red", textAlign: "center" }}>
                Debe ingresar un nombre con mas de 3 y menos de 30 caracteres.
              </p> */}

                <Error mensajeError={errores.mensajeErrorNombre} />
              </div>
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
            {!validarEmail(usuario.email) && (
              // <p style={{ color: "red", textAlign: "center" }}>
              //   Por favor ingrese un email válido.
              // </p>
              <div>
                {/* <Error mensajeError={errores.mensajeErrorMail} /> */}
              </div>
            )}

            <div className="campo-anotacion">
              <div className="anotacion">Password *</div>
              <input
                className="campo-formulario"
                type="text"
                placeholder="Password"
                value={usuario.pass}
                onChange={onChangePass}
              />
            </div>
            {/* {!validarPass(usuario.pass) && ( */}
              // <p style={{ color: "red", textAlign: "center" }}>
              //   La contraseña debe tener al menos 1 letra mayúscula, 1 carácter
              //   no alfanumérico y tener al menos 8 caracteres.
              // </p>
              // <Error mensajeError={errores.mensajeErrorPass} />
            {/* // )} */}

            <button
              className="boton"
              texto={textoBotonIniciar}
              type="submit"
              value="Acceso"
            >
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

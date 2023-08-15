import React, { useState } from "react";
import { Boton } from "../Components/Genericos/Boton";
import "../Components/FormIngreso.css";
import Error from "../Components/Error";
import Recomendaciones from "../Components/Recomendaciones/Recomendaciones";

const FormIngreso = () => {
  const textoBotonIniciar = "Iniciar";

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    pass:"",
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

  const onChangePass = (e) => {
    setUsuario({ ...usuario, pass: e.target.value });
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


  const validarPass = (em) => {
    const emSinEspacio = em.trim();

    const passRegexp = new RegExp( /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(.{8,})$/);
    if (passRegexp.test(emSinEspacio)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = validarNombre(usuario.nombre);
    const isEmailValid = validarEmail(usuario.email);
    const isPassValid = validarPass(usuario.pass);
    if (isUsernameValid && isEmailValid  && isPassValid) {
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
    <> 
    <div className="pagina-formulario-Ingreso">
      <div className="encabezado-formulario">
        <div className="titulo-form-inicio-sesion">Inicia sesión ahora</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formulario-inicio">
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
        <p style={{ color: 'red' }}>
          Eladfssdfsdfsdfsdfayúscula, 1 carácter no alfanumérico y tener al menos 8 caracteres.
        </p>
      )}

          <div  className="campo-anotacion">
            <div className="anotacion">Password *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Password"
              value={usuario.pass}
              onChange={onChangePass}
            />
          </div>
          {!validarPass(usuario.pass) && (
        <p style={{ color: 'red' }}>
          La contraseña debe contener al menos 1 letra mayúscula, 1 carácter no alfanumérico y tener al menos 8 caracteres.
        </p>
      )}
         
          <button className="boton" texto={textoBotonIniciar} type="submit" value="Acceso">Acceso</button>
          </div>
     
        {form && (
          <h5 className="msj-form-guardado">
            Gracias!! Has ingresado como usuario a HomeOFF !
          </h5>
        )}

        {VerError !== "" && <Error />}
      </form>
      <div className="acceso-cuenta-o-usuarionuevo">
        <div>No tenés cuenta?</div>
        <div>Se te olvidó tu contraseña?</div>
      </div>
    </div>
    {/* <Recomendaciones CantidadCards={3} /> */}
    </>
  );
 
};

export default FormIngreso;

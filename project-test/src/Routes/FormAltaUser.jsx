import React, { useState } from "react";
import { Boton } from "../Components/Genericos/Boton";
import "../Components/FormAltaUser.css";
import Error from "../Components/Error";

const FormAltaUser = () => {
  const textoBotonGuardarForm = "Crear Cuenta";
  
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    confirmacionEmail: "",
    direccion: "",
    pais: "",
    telefono: "",
    password: "",
    confirmarPassword: "",
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

  //////////////////OnChanges///////////////

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
    setVerError("");
  };

  const onChangeApellido = (e) => {
    setUsuario({ ...usuario, apellido: e.target.value });
    setVerError("");
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
    setVerError("");
  };

  
  const onChangeConfirmacionEmail = (e) => {
    setUsuario({ ...usuario, confirmacionEmail: e.target.value });
    setVerError("");
  };

  const onChangeDireccion = (e) => {
    setUsuario({ ...usuario, direccion: e.target.value });
    setVerError("");
  };


 const onChangeTelefono = (e) => {
  setUsuario({ ...usuario, telefono: e.target.value });
  setVerError("");
};

  
const onChangePassword = (e) => {
  setUsuario({ ...usuario, password: e.target.value });
  setVerError("");
};

const onChangeConfirmacionPassword = (e) => {
  setUsuario({ ...usuario, confirmarPassword: e.target.value });
  setVerError("");
};
  // confirmacionEmail: "",
  // confirmarPassword: "",



///////////////Validaciones ///////////////////
  const validarNombre = (n) => {
    const regex = /^[A-Za-z\s]{5,30}$/;
    if (regex.test(n)) {
      return true;
    } else {
      return false;
    }
  };

  const validarApellido = (n) => {
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

  const handleSubmitCrearCuenta = (e) => {
    e.preventDefault();
    const isUsernameValid = validarNombre(usuario.nombre);
    const isApellidoValid = validarApellido(usuario.apellido);

    const isEmailValid = validarEmail(usuario.email);

    if (isUsernameValid && isApellidoValid && isEmailValid) {
      setForm(true);
      setUsuario({
        nombre: "",
        email: "",
        apellido: "",
      });
      setVerError("");
    } else {
      <Error />;
      setForm(false);
      setUsuario({
        nombre: "",
        email: "",
        apellido: "",
      });
      setVerError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div className="pagina-formulario-alta">
      <div className="encabezado-formulario">
        <div className="titulo-form-inicio-sesion">Crea tu cuenta</div>
      </div>

      <form onSubmit={handleSubmitCrearCuenta}>
        <div className="formularioAltaUser">
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
            <div className="anotacion">Apellido *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Ingresa tu apellido"
              value={usuario.apellido}
              onChange={onChangeApellido}
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

          <div  className="campo-anotacion">
            <div className="anotacion">Confirmar Email *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Confirmar Email"
              value={usuario.confirmacionEmail}
              onChange={onChangeConfirmacionEmail}
            />
          </div>
          
          <div  className="campo-anotacion">
            <div className="anotacion">Password *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Password"
              value={usuario.password}
              onChange={onChangePassword}
            />
          </div>

          <div  className="campo-anotacion">
            <div className="anotacion">Confirmacion Password *</div>
            <input
              className="campo-formulario"
              type="text"
              placeholder="Password"
              value={usuario.confirmacionPassword}
              onChange={onChangeConfirmacionPassword}
            />
          </div>


{/* //////////////-----------------------------////////////// */}
            {/* <Boton className="botonCrearUser" texto={textoBotonGuardarForm} type="submit" value="Acceso"/> */}
            <button className="boton" type="submit" value="Acceso">Crear Cuenta</button>

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

export default FormAltaUser;

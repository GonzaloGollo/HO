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

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
    setNombreValido(true);
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
    setEmailValido(true);
  };

  const onChangePass = (e) => {
    setUsuario({ ...usuario, password: e.target.value });
    setPasswordValido(true);
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
      {/* <div className="container-form">
        <div className="header">
          <h2>Iniciá Sesión</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="coding-dev"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError ? (
              <MdHighlightOff className="circulo-error" />
            ) : (
              <MdCheckCircleOutline className="circulo-check" />
            )}
            <small className="mensaje-error">{usernameError}</small>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError ? (
              <MdHighlightOff className="circulo-error" />
            ) : (
              <MdCheckCircleOutline className="circulo-check" />
            )}
            <small className="mensaje-error">{emailError}</small>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError ? (
              <MdHighlightOff className="circulo-error" />
            ) : (
              <MdCheckCircleOutline className="circulo-check" />
            )}
            <small className="mensaje-error">{passwordError}</small>
          </div>

          <div className="form-control">
            <label htmlFor="password2">Confirmación password</label>
            <input
              type="password"
              placeholder="Confirmar password"
              id="password2"
              value={password2}
              onChange={handlePassword2Change}
            />
            {password2Error ? (
              <MdHighlightOff className="circulo-error" />
            ) : (
              <MdCheckCircleOutline className="circulo-check" />
            )}
            <small className="mensaje-error">{password2Error}</small>
          </div>

          <button type="submit">Inicio</button>
        </form>
      </div> */}

      <div className="pagina-formulario-Ingreso">
        <div className="encabezado-formulario">
          <div className="titulo-form-inicio-sesion">Inicia sesión ahora</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formulario-inicio">
            <div className="form-control">
              <label for="nombre">Username *</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={usuario.nombre}
                onChange={onChangeNombre}
                id="nombre"
              />
              {!nombreValido ? (
                <div>
                  <Error
                    className="error-form"
                    mensajeError="El nombre debe tener entre 3 y 30 caracteres y solo contener letras."
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-control">
              <label for="email">Email *</label>
              <input
                type="text"
                placeholder="ejemplo@gmail.com"
                value={usuario.email}
                onChange={onChangeEmail}
                id="email"
              />
  
              {/* {!emailValido && (
                <Error mensajeError="El email debe tener al menos 3 caracteres antes del arroba y tener un formato válido." />
              )} */}
              {!emailValido ? (
                <div>
                  {/* <MdHighlightOff className="circulo-error" /> */}
                  <Error className="error-form" mensajeError="El email debe tener al menos 3 caracteres antes del arroba y tener un formato válido." />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="form-control">
              <label for="pass">Password *</label>
              <input
                type="password"
                placeholder="Password"
                value={usuario.password}
                onChange={onChangePass}
                id="pass"
              />
  
              {!passwordValido && (
                <Error mensajeError="La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un carácter no alfanumérico." />
              )}
            </div>

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

      {/* <div className="container-form">
        <div className="header">
          <h2>Iniciá Sesión</h2>
        </div> */}
      {/* <form id="form" className="form">
          <div className="form-control">
            <label for="username">Username</label>
            <input type="text" placeholder="coding-dev" id="username" />
            <MdCheckCircleOutline className="fas circulo-check" />
            <MdHighlightOff className="fas circulo-error" />
            <small className="mensaje-error">Error message</small>
          </div> */}

      {/* <div className="form-control">
            <label for="username">Email</label>
            <input type="email" placeholder="ejemplo@gmail.com" id="email" />
            <MdCheckCircleOutline className="fas circulo-check" />
            <MdHighlightOff className="fas circulo-error" />
            <small className="mensaje-error">Error message</small>
          </div> */}
      {/* 
          <div className="form-control">
            <label for="username">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <MdCheckCircleOutline className="fas circulo-check" />
            <MdHighlightOff className="fas circulo-error" />
            <small className="mensaje-error">Error message</small>
          </div> */}

      {/* <div className="form-control">
            <label for="username">Confirmación password </label>
            <input
              type="password"
              placeholder="Confirmar password"
              id="password2"
            />
            <MdCheckCircleOutline className="circulo-check" />
            <MdHighlightOff className="circulo-error" />
            <small className="mensaje-error">Error message</small>
          </div>

          <button>Inicio</button> */}
      {/* </form> */}
      {/* </div> */}
    </>
  );
};

export default FormIngreso;

// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const password2 = document.getElementById('password2')

// form.addEventListener('submit', e=>{
//   e.preventDefault();
//   checkInputs();
// })

// function checkInputs() {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const password2Value = password2.value.trim();

//   if (usernameValue === "") {
//     setErrorFor(username, "Username no puede estar en blanco");
//   } else {
//     setSuccessFor(username);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "Email no puede estar en blanco");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "No es un email válido");
//   } else {
//     setSuccessFor(email);
//   }

//   if (passwordValue === "") {
//     setErrorFor(password, "Password no puede estar en blanco");
//   } else {
//     setErrorFor(password);
//   }

//   if (password2Value === "") {
//     setErrorFor(password2Value, "Confirmar password no puede quedar en blanco");
//   } else if (passwordValue !== password2Value) {
//     setErrorFor(password2Value, "No coinciden los passwords");
//   } else {
//     setSuccessFor(password2Value);
//   }
// }

// function setErrorFor(input, txtMensajeError) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = txtMensajeError;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function isEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]{3}$/.test(email);
// }

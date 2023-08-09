import React from "react";
import BotonCrearCuenta from "./BotonCrearCuenta";
import BotonInicio from "./BotonInicio";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Categorias from "../Categorias/Categorias";
import Buscador from "../Buscador/Buscador";
import { BsPersonCircle } from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import FormIngreso from "../../Routes/FormIngreso";
import { ContextGlobal } from "../utils/global.context";
import { useModalContext } from "../utils/global.contextModal";

const Navbar = () => {
    const { showModal, closeModal, openModal, productos } =
    useContext(ContextGlobal);



  return (
    <>
      <div className="header">
        <nav>
          <ul> 
            <li>
              
              <Logo />
            </li>
            <div className="botones-header">
              <li>
                <BotonCrearCuenta className="boton-persona" onClick={() => openModal("modal1")}/>
              </li>
              <li>
                <BotonInicio className="boton-inicio" />
              </li>
              <li>
              <BsPersonCircle className="icono-persona"/>
              </li>
            </div>
          </ul>
        </nav>
       
        <div className="buscador-cat">
          <Buscador />
          <Categorias />
        </div>
     
       


      </div>
    </>
  );
};

export default Navbar;

{
  /* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div style={{ marginLeft: "0.5rem" }}>

          <Link to={"/"}>
            <Logo />
          </Link>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            marginRight: "0.5rem",
          }}
        >
          <BotonCrearCuenta />
          <BotonInicio />
        </div>
      </div> */
}

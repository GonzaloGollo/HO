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
                <BotonCrearCuenta
                  className="boton-persona"
                  onClick={() => openModal()}
                />
              </li>
              <li>
                <BotonInicio className="boton-inicio" />
              </li>
              <li>
                <BsPersonCircle className="icono-persona" />
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

import React from 'react'
import LogoFooter from './LogoFooter'
import Contacto from './Contacto'
import "./Footer.css"
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (

    <div className='footer-HO'>

    <LogoFooter/>
    
    
    <BsInstagram />
    <BsFacebook />
    <BsWhatsapp />

    </div>
    
  )
}

export default Footer
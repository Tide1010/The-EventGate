import React from 'react'
import './Footer.css'
import NavLogo from '../Navbar/navlogo.png'; 
//React Icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
   let date = new Date().getFullYear();
  return (
    <>
    <section className="footer">
        <div className="footer-content">
            <img src={NavLogo} alt="" />
            <p> © {date} EventGate</p>
            <div className="footer-social">
                <a href=""> <FaInstagram /> </a>
                <a href=""> <FaLinkedin /> </a>
                <a href=""><FaXTwitter /></a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
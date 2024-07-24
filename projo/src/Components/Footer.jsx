import React from 'react'
import '../Styles/Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <FaXTwitter />
        <FaSquareInstagram />
        <FaSquareFacebook />
        <FaLinkedin />


        </div>
        <p>&copy; 2024 PizzaHut</p>
    </div>
  )
}

export default Footer
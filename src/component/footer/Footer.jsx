/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai";
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>about</a></li>
        <li> <a href='experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portfoilo'>Portfolio</a></li>
        <li> <a href='#testimoial'>Testimonial</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
    <div className='footer__socials'>
     <a href='https://www.facebook.com/profile.php?id=100005543657239' target="_blank" rel="noreferrer"><BsFacebook/></a>
     <a href='https://www.instagram.com/abdelrhman_ragab77/' target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
     <a href='https://twitter.com/Abdelrh63623558' target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
    </footer>
  )
}

export default Footer
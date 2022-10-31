import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser}from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {TbMessageDots} from "react-icons/tb"
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActivNav] = useState("#")
  return (
    <nav>
    <a href="portfolio" className={activeNav=== "#" ? "active" : ""}><AiOutlineHome/></a>
    <a href='#about' onClick={()=> setActivNav("#about")} className={activeNav=== "#about" ? "active" : ""}><AiOutlineUser/>
    </a>
    <a href='#experience' onClick={()=> setActivNav("#experience")} className={activeNav=== "#experience" ? "active" : ""}><BiBook/></a>
    <a href='#services' onClick={()=> setActivNav("#services")} className={activeNav=== "#services" ? "active" : ""}><RiServiceLine/></a>
    <a href='#contact' onClick={()=> setActivNav("#contact")} className={activeNav=== "#contact" ? "active" : ""}><TbMessageDots/></a>
    </nav>
  )
}

export default Nav
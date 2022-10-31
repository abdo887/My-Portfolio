import React from 'react'
import "./services.css"
import {BsCheck} from "react-icons/bs"
const Services = () => {
  return (
    <section id='service'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
      <article className='services'>
     <div className='service__head'>
   <h3>UI/UX Desgin</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
     </ul>
      </article>
      <article className='services'>
     <div className='service__head'>
   <h3>Web Devpolment</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
     </ul>
      </article>
      <article className='services'>
     <div className='service__head'>
   <h3>Content Creation</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
      <li>
        <BsCheck className='service__list-icon'/>
        <p>Lorem ipsum dolor sit amet, consectetur  elit</p>
      </li>
     </ul>
      </article>
    </div>
    </section>
  )
}

export default Services
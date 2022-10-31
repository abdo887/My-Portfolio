import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
    <div className='expreience__frontend'>
    <h3>Frontend Development</h3>
    <div className='expreience__contnet'>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
      </article>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>Tailwind</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>
      <article className='expreience__details'>
        <BsPatchCheckFill className='expreience__details-icon'/>
        <div>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </div>
      </article>

    </div>
    </div>

    </div>
    </section>
  )
}

export default Experience
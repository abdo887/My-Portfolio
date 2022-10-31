import React from 'react';
import {MdOutlineMail} from "react-icons/md"
import {SiMessenger} from "react-icons/si"
import {FaWhatsapp} from "react-icons/fa"
import "./contact.css"
const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact mariem</h2>
    <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact__option'>
    <MdOutlineMail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>abdoraga52@gmail.com</h5>
    <a href='mailto:abdoraga52@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
    </article>
    <article className='contact__option'>
    <SiMessenger className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>abdoraga52@gmail.com</h5>
    <a href='https://m.me/https://www.facebook.com/profile.php?id=100005543657239' target="_blank" rel="noreferrer">Send a message</a>
    </article>
    <article className='contact__option'>
    <FaWhatsapp  className='contact__option-icon' />
    <h4>Whatsapp</h4>
    <h5>+20 114081022</h5>
    <a href='https://api.whatsapp.com/send?phone=+201140810222' target="_blank" rel="noreferrer">Send a message</a>
    </article>
    </div>
    <form action=''>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='emal' placeholder='Your Email' required/>
      <textarea type="message" name='/' placeholder='Your Message' required></textarea>
      <button type='sumbit' className='btn btn__primary'>Send Message</button>

    </form>
    </div>
    </section>
  )
}

export default Contact
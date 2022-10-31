import React from 'react'
import "./testimonial.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

import {  Pagination  } from 'swiper';

import {SwiperSlide,Swiper} from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'


const data=[
  {
    image:AVTR1,
    name:"Tina",
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image:AVTR2,
    name:"shatta wale",
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image:AVTR3,
    name:"kamme",
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image:AVTR4,
    name:"mariem",
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
  ]
const Testimonial = () => {
  return (
    <section id='testmonial'>
    <h5>Review from clients</h5>
    <h2>Testimonial</h2>
    <Swiper className='container testimonial__container'
    modules={[Pagination]}
    spaceBetween={40}
    slidePerView={1}
    Pagination={{clickable:true}}>
    {
      data.map(({image,name,review},index)=>{
        return(
          <SwiperSlide className='testimonial' key={index}>
    <div className='client__avatar'>
    <img src={image} alt="avtart one"/>
    </div>
    <h5 className='client__name'>{name}</h5>
    <small className='client__review'>{review}
    </small>
    </SwiperSlide>
        )
      })
    }
    </Swiper>
    </section>
  )
}

export default Testimonial
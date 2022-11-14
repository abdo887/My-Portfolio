import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
const HeaderScohials = () => {
  return (
    <div className='header__socials'>
  <a href='https://www.linkedin.com/in/abdelrhman-rgab-623462252/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
  <a href='https://github.com/abdo887' target="_blank" rel="noreferrer"><FaGithub/></a>
  <a href='https://www.FaceBook.com' target="_blank" rel="noreferrer"><SiGmail/></a>
    </div>
  )
}

export default HeaderScohials
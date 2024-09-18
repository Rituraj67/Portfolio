import React from 'react'
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaHome,FaRegCopyright } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaTimeline } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div id='footer'>

      <div className="top">
        <div className="socialLinks">
          <h3>Social Links:</h3>
          <a target='blank' href="https://www.linkedin.com/in/rituraj67/"><SiLinkedin /></a>
          <a target='blank' href="https://github.com/Rituraj67"><SiGithub /></a>
          <a target='blank' href="https://x.com/Rituraj_67"><SiTwitter /></a>
          <a target='blank' href="https://www.instagram.com/riturajsingh.67/"><BsInstagram /></a>
        </div>

        <div className='footnav'>
          <a href="#home"><FaHome/></a>
          <a href="#work"><MdOutlineWorkOutline/></a>
          <a href="#timeline"><FaTimeline/></a>
          <a href="#skills"><GiSkills/></a>
          <a href="#aboutme"><CgProfile/></a>
          <a href="#contact"><BiSolidContact/></a>
        </div>

      </div>

      <p><FaRegCopyright/> 2024 Rituraj Singh. All rights reserved. | Designed and developed with <CiHeart/> by Rituraj Singh</p>

    </div>
  )
}

export default Footer

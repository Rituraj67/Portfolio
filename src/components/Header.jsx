import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = ({menu,setmenu}) => {

  return (
    <nav>
        <NavContent/>
        <button onClick={()=>setmenu(!menu)}><GiHamburgerMenu/></button>
    </nav>
  )
}

export const NavContent=({menu,setmenu})=>(
    <>
    <h2>ArtistryArc</h2>
    <div>
        <a onClick={()=>setmenu(!menu)} href="#home">Home</a>
        <a onClick={()=>setmenu(!menu)} href="#work">Work</a>
        <a onClick={()=>setmenu(!menu)} href="#timeline">Timeline</a>
        <a onClick={()=>setmenu(!menu)} href="#skills">Skills</a>
        <a onClick={()=>setmenu(!menu)} href="#aboutme">AboutMe</a>
        <a onClick={()=>setmenu(!menu)} href="#contact">Contact</a>
    </div>
    <a onClick={()=>setmenu(!menu)} target='_blank' href="https://github.com/Rituraj67">
    <GitHubIcon/>
    </a>
    </>
)

export const Menu=({menu,setmenu})=>(
  <div className={`menubar ${menu?'menuopen':''}`}>
    <button onClick={()=>setmenu(!menu)} ><RxCross1/></button>
    <NavContent menu={menu} setmenu={setmenu}/>
  </div>
)
export default Header

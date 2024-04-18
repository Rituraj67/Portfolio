import React from 'react'
import data from '../assets/data.json'
import { motion } from 'framer-motion'
import { FaJava, FaReact,FaNode,FaSass, FaGithub,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress,SiMongodb, SiChakraui, SiTailwindcss,SiNextdotjs , SiRedux } from "react-icons/si";


const Skills = () => {
   
    return (
        <div id='skills'>
            <h1>SKILLS</h1>
            <div className="icons">

            </div>
            <div className="skillContainer">
                {
                    data.skills.map((item, index) => (
                        <SkillItem key={index} title={item.title} desc={item.description} index={index} />
                    ))};
            </div>

        </div>
    )
}



const SkillItem = ({ title, desc, index }) =>{
return index%2==0? <motion.div initial={{
        opacity:0,
        visibility:"hidden",
        x:"-100%"
    }}
    whileInView={{
        position:'relative',
        visibility:"visible",
        opacity:1,
        x:"0%"
    }}
    transition={{ duration:0.6}}
     className="skills">
        <h2>{title}{icon[index].map(i=>i)}</h2>
        <p>{desc}</p>
    </motion.div>: <motion.div initial={{
        opacity:0,
        visibility:"hidden",

        x:"100%"
    }}
    whileInView={{
        opacity:1,
        visibility:"visible",
        x:"0%"
    }}
    transition={{ duration:0.7}}
     className="skills">
        <h2>{title} {icon[index].map(i=>i)}</h2>
        <p>{desc}</p>
    </motion.div>
}
 const icon= [[<FaJava />],[<IoLogoJavascript />],[<FaSass/>,<SiChakraui/>, <SiTailwindcss/>], [<SiMongodb/>,<SiExpress/>,<FaReact/>,<FaNode/>],[<FaReact/>,<SiRedux/>, <SiNextdotjs/>], [<FaGitAlt/>,<FaGithub/>] ]




export default Skills

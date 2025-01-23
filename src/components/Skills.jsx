import React from 'react'
import data from '../assets/data.json'
import { motion } from 'framer-motion'
import { GiBrain } from "react-icons/gi";
import { FaJava, FaReact,FaNode,FaSass, FaGithub,FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress,SiMongodb, SiChakraui, SiTailwindcss,SiNextdotjs , SiRedux } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaJenkins,FaDocker,FaAws  } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";


const Skills = () => {
   
    return (
        <div id='skills'>
            <h1>SKILLS</h1>
            <div className="skillContainer">
                {
                    data.skills.map((item, index) => (
                        <SkillItem key={index} title={item.title} desc={item.description} index={index} />
                    ))}
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
        <div><h2>{title}</h2> <span>{icon[index].map(i=>i)}</span></div>
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
        <div><h2>{title}</h2> <span>{icon[index].map(i=>i)}</span></div>
        <p>{desc}</p>
    </motion.div>
}

const icon= [[<FaReact/>, <SiRedux/>,<SiExpress/>,<FaNode/>,<SiNextdotjs/> ,<SiTailwindcss/>],[<GiBrain />],[<FaJenkins/>, <FaDocker/> , <DiNginx/>, <SiGithubactions/>], [<FaJava/>, <IoLogoJavascript/>, <AiOutlineConsoleSql/>],[<SiMongodb/>, <BiLogoPostgresql/>, <TbBrandMysql/>  ], [<FaGitAlt/>,<FaGithub/>] ]


export default Skills
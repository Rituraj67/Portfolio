import React from 'react'
import data from '../assets/data.json'
import { motion } from 'framer-motion'


const Aboutme = () => {
    return (
        <div id='aboutme'>

            <div className='aboutBox'>
                
                    <motion.h1 initial={{
                        opacity: 0,
                        x: "100%"
                    }}
                        whileInView={{
                            opacity: 1,
                            x: "0%"
                        }}
                        transition={{ duration: 0.6 }}  >About Me</motion.h1>
                    <div className="aboutContainer">
                        {data.aboutme.map((desc, index) => (
                            <Aboutpara key={index} desc={desc} index={index} />
                        ))}
                    </div>
            </div>


        </div>
    )
}

const Aboutpara = ({ desc, index }) => (
    <motion.p initial={{
        opacity: 0,
        x: "-100%"
    }}
        whileInView={{
            opacity: 1,
            x: "0%"
        }}

        transition={{ duration: 0.1 * index }}>{desc}</motion.p>
)

export default Aboutme

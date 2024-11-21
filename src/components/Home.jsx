import { animate, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import myDp from '../assets/mydp.png'


const Home = () => {
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: "0",
                opacity: 1
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1
            },
        },
    }

    const projectCount = useRef(null);

    const animationProjectCnt=()=>{
        animate(0,5,{       // By passing a to and from value, animate will output the latest values to the provided onUpdate callback.
            duration:0.7,
            onUpdate:(value)=> (projectCount.current.textContent= Math.floor(value)),  //value.toFixed()
        });
    };


    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1} >
                        Hi, I Am <br /> Rituraj Singh
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Programmer", "A Learner"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "typewriterpara",
                        cursor: "",
                    }} />
                    <div >
                        <a href="https://drive.google.com/drive/folders/1VgbL9aIqCOFY8knQ4a6r9X8V28hASQE1?usp=sharing" target='blank' >Resume</a>
                        <a href="#work">My Projects<BsArrowUpRight /></a>
                    </div>
                    <aside>
                        <article>
                            <p>+<motion.span ref={projectCount}whileInView={animationProjectCnt}></motion.span></p>
                            <span>Projects Done</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>Riturajs.1742@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>


            <section>
                <img src={myDp} alt="Rituraj" />
            </section>

            <a href="#aboutme"><BsChevronDown /></a>

        </div>
    )
}

export default Home

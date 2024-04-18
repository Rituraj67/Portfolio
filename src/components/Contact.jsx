import React from 'react'
import { useState } from 'react';
import img from '../assets/bg4.jpg'
import { BiLogoGmail } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoMdSend } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';



const Contact = () => {

  const [data, setData] = useState([]);
  const [form, setform] = useState({name:"", email:"" , message:""});
  const [disableBtn, setdisableBtn] = useState(false)
  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
    
  }

  const handleSubmit= async (e)=>{
    setdisableBtn(true);
    e.preventDefault();
    try {
      await addDoc(collection(db,"contacts"),form);
      setdisableBtn(false)
      setData([...data,form]);
      setform({name:"", email:"" , message:""});
      toast.success("Message Sent Successfully");
    } catch (error) {
      toast.error("Message can't be sent");
      setdisableBtn(false);
      console.log(error);
    }
    
  }

  return (
    <div id='contact'>

      <h1>Contact Me</h1>

      <motion.div className="container" {...animation.form}  transition={{delay:0.3}} >
        <img src={img} alt="" />
        <div className="form">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <span>
            <motion.input {...animation.input} transition={{delay:0.4}} type="text" value={form.name} onChange={(e)=>handleChange(e)} name="name" id="name" placeholder='Your Name' />
            <VscAccount/>
            </span>
            
            <span>
            <motion.input transition={{delay:0.45}} {...animation.input} type="email" value={form.email} onChange={(e)=>handleChange(e)} name="email" id="email" placeholder='Enter Your Email' />
            <BiLogoGmail/>
            </span>
            <span>
            <motion.textarea transition={{delay:0.5}} {...animation.input} name="message" id="message" value={form.message} onChange={(e)=>handleChange(e)}  cols="30" rows="8" placeholder='Type Your Message'></motion.textarea>
            <MdOutlineMessage/>
            </span>
            <motion.button disabled={disableBtn} className={disableBtn?'disableBtn':"sendBtn"} {...animation.button} transition={{delay:0.5}} type="submit"><span>Send</span><IoMdSend/></motion.button>
          </form>
        </div>
      </motion.div>
      
    </div>
  )
}

const animation={
  form:{
    initial:{
      opacity:0,
      x:"100%"
    },
    whileInView:{
      opacity:1,
      x:"0%"
    }
  },
  button:{
    initial:{
      opacity:0,
    },
    whileInView:{
      opacity:1,
    }
  },
  input:{
    initial:{
      opacity:0,
      y:"100%"
    },
    whileInView:{
      opacity:1,
      y:"0%"
    }
  }
}



export default Contact

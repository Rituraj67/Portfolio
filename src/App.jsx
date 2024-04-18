import './style/App.scss'
import Header, { Menu } from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from 'react'


function App() {
  
  const [menu, setmenu] = useState(false);

  return (
    <>
      <Menu menu={menu} setmenu={setmenu} />
      <UpwardArrow/>
      <Header menu={menu} setmenu={setmenu}/>
      <Home/>
      <Work/>
      <Timeline/>
      <Skills/>
      <Aboutme/>
      <Contact/>
      <Toaster toastOptions={{
    className: '',
    style: {
      width:'100vw',
      border: '1px solid #713200',
      padding: '16px',
      backgroundColor: '#750995',
      color: '#ffff'
    },
  }}/>
  
  <Footer/>

    </>
  )
}
const UpwardArrow=()=>(
  <a href="#"><FaArrowCircleUp style={{
    position:'fixed',
    bottom:'4%',
    cursor:'pointer',
    right:'2%',
    color:'#3f0550',
    fontSize: '2.5rem',
    borderRadius:'50%',
    backgroundColor:'white'
  }}/></a>
)

export default App

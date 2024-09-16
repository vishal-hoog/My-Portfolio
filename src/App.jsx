import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Components/About'
import Exeperience from './Components/Exeperience'
import Skills from './Components/Skills'
import  Projects  from './Components/Projects'
import Contact from './Components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"


function App() {

  useEffect(() => {
   Aos.init();
  }, [])
  
  return (
    <>
    <Navbar/>
    <Header />
    <About />
    <Exeperience />
    <Skills />
    <Projects />
    <Contact />
    
    </>
  )
}

export default App
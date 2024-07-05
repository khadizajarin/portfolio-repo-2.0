
import { useRef } from 'react'
import './App.css'
import About from './Componants/About/About'
import Contact from './Componants/Contact/Contact'
import Experience from './Componants/Experience/Experience'
import Footer from './Componants/Footer/Footer'
// import Home from './Componants/Home/Home'
import Looking from './Componants/Looking/Looking'
import Skills from './Componants/Skills/Skills'
import Workflow from './Componants/Workflow/Workflow'
import Navbar from './Componants/Home/Navbar'
import Banner from './Componants/Home/Banner'
// import Navbar from './Componants/Home/Navbar'

function App() {

  const skillsRef = useRef(null);
  const workflowRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    < >
    {/* <Home ></Home> */}
    <Navbar skillsRef={skillsRef} 
        workflowRef={workflowRef} 
        experiencesRef={experiencesRef} 
        contactRef={contactRef} ></Navbar>
    <Banner contactRef={contactRef}></Banner>
    <About></About>
    <Skills ref={skillsRef}></Skills>
    {/* <Workflow ref={workflowRef}></Workflow> */}
    {/* <Experience contactRef={contactRef} ref={experiencesRef}></Experience> */}
    {/* <Looking></Looking> */}
    {/* <Contact ref={contactRef} ></Contact> */}
    {/* <Footer></Footer> */}
    </>
  )
}

export default App

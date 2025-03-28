
import { useEffect, useRef } from 'react'
import './App.css'
import About from './Componants/About/About'
import Contact from './Componants/Contact/Contact'
import Experience from './Componants/Experience/Experience'
import Footer from './Componants/Footer/Footer'
import Looking from './Componants/Looking/Looking'
import Skills from './Componants/Skills/Skills'
import Workflow from './Componants/Workflow/Workflow'
import Navbar from './Componants/Home/Navbar'
import Banner from './Componants/Home/Banner'
import ClientsLove from './Componants/ClientsLove/ClientsLove'
import Others from './Componants/Others/Others'
//import scroll from "./assets/icon-01 (2).png";

function App() {

  const skillsRef = useRef(null);
  const workflowRef = useRef(null);
  const experiencesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SY8E9607XM";
    script1.async = true;
    document.body.appendChild(script1);




    // jjjjjjjjjjjjjjjjjjjjjjjjjjk
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SY8E9607XM');
    `;
    document.body.appendChild(script2);
  }, []);

  return (
    < div className='relative'>

      {/* <div className="fixed lg:top-[48rem] top-[1.99rem] lg:left-[12.8rem] transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-center items-center">
        <p className="absolute top-[0.00001rem] text-gray-400 lg:text-xs text-[6px] font-semibold opacity-60">
          Scroll down
        </p>
        <img src={scroll} className="text-[#1E3660] z-10 lg:w-24 w-16" />
      </div> */}
    <Navbar skillsRef={skillsRef} 
        workflowRef={workflowRef} 
        experiencesRef={experiencesRef} 
        contactRef={contactRef} ></Navbar>
    <Banner contactRef={contactRef}></Banner>
    <About></About>
    <Skills ref={skillsRef}></Skills>
    <Workflow ref={workflowRef}></Workflow>
    <Experience contactRef={contactRef} ref={experiencesRef}></Experience>
    <ClientsLove></ClientsLove>
    <Others></Others>
    <Looking></Looking>
    <Contact ref={contactRef} ></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App

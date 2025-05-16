/* eslint-disable react/prop-types */


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Navbar = ({ skillsRef, workflowRef, experiencesRef, contactRef }) => {


  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, []);

  return (
    <div className="lg:bg-[#1E3660]">
      <div className="flex bg-white lg:flex-row md:flex-row flex-col lg:justify-evenly items-center lg:h-20 ">
        <div className="bg-[#1E3660] md:w-[150%] w-full lg:h-28 h-20">
          {/* left border */}
            <div className="flex flex-row items-center z-10">
              <div className="ml-[2.6875rem] lg:ml-24 border-l-[3px] border-white opacity-50 lg:opacity-70 lg:h-44 h-20 absolute"></div>
              <div className="ml-[2.6875rem] md:ml-24 mt-24 md:mt-64 border-l-[3px] border-white opacity-50 lg:opacity-70 lg:h-2 h-3 absolute"></div>
              <div className="ml-[2.6875rem] md:ml-24 mt-[9.375rem] lg:mt-80 border-l-[3px] border-white opacity-50 lg:opacity-70 lg:h-10 h-5 absolute"></div>
              <div className="ml-[2.6875rem] md:ml-24 mt-[9.375rem] lg:mt-[31rem] border-l-[3px] border-white opacity-50 lg:opacity-70 lg:h-20 h-5 absolute"></div>
            </div>
          
          
          <div className="lg:text-[1.625rem] md:text-[1.5rem] text-[1rem] font-bold lg:ml-32 ml-[3.6875rem] lg:mt-9 mt-5 text-[#D2D7DF]">Hello,</div>   
        </div>

        {/* <div className="flex flex-row justify-center lg:items-center md:w-full lg:h-[7rem] bg-white">
          <ul className="z-10 menu menu-horizontal w-full flex flex-row justify-start lg:pl-7 bg-white lg:text-xl text-[0.875rem] lg:px-0 text-[#1E3660] lg:font-bold font-bold">
            <li onClick={() => scrollToSection(skillsRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]">Skills</li>
            <li onClick={() => scrollToSection(workflowRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]">Workflow</li>
            <li onClick={() => scrollToSection(experiencesRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]">Experiences</li>
            <li onClick={() => scrollToSection(contactRef)} className="lg:px-6 px-2">Contact</li>
          </ul>
        </div>
         */}
        <div className="flex flex-row justify-center lg:items-center md:w-full lg:h-[7rem] bg-white">
          <ul className="z-10 menu menu-horizontal w-full flex flex-row justify-start lg:pl-3 bg-white lg:text-xl text-[0.875rem] lg:px-0 text-[#1E3660] lg:font-bold font-bold">
            <li onClick={() => scrollToSection(skillsRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]">What I Do</li>
            <li onClick={() => scrollToSection(workflowRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]">My Approach</li>
            <li onClick={() => scrollToSection(experiencesRef)} className="lg:px-6 px-2 border-r-[3px] border-[#768B9C]"> My Journey</li>
            <li onClick={() => scrollToSection(contactRef)} className="lg:px-6 px-2">Get in Touch</li>
          </ul>
        </div>
      </div>

      {/* bottom border */}
        <div className="absolute lg:top-20 top-[3.75rem]">
        <div className="flex items-center ">
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-10 lg:w-20 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-2 ml-2 lg:ml-8 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-10 lg:w-10 ml-1 lg:ml-2 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-28 ml-5 lg:ml-10 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-6 lg:w-4 ml-1 lg:ml-10 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-10 lg:ml-2 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-10 lg:w-20 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-2 ml-5 lg:ml-8 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-10  lg:ml-2 "></div>
          <div className=" border-t-[3px] border-white opacity-50 lg:opacity-70 w-12 lg:w-28 lg:ml-10 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-4 ml-2 lg:ml-10 "></div>
          <div className="border-t-[3px] border-white opacity-50 lg:opacity-70 w-2 lg:w-10 ml-2 lg:ml-2 "></div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Navbar;

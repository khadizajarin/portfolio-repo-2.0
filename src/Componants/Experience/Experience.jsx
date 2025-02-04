/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// import { useEffect, useState } from 'react';
import { LiaArrowRightSolid } from "react-icons/lia";
import TitleBar from '../CommonComps/TitleBar/TitleBar';
import project1 from "../../assets/project-01.png";
import project2 from "../../assets/project-02.png";
import project3 from "../../assets/project-03.png";
import project4 from "../../assets/project-04.png";
import SlidingImageText from "../CommonComps/SlidingImageText/SlidingImageText";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Experience = forwardRef((props, ref) => {

    const scrollToSection = (elementRef) => {
        if (elementRef.current) {
          window.scrollTo({
            top: elementRef.current?.offsetTop,
            behavior: "smooth",
          });
        }
      };


    return (
        <div ref={ref} className='relative z-10 bg-[#1E3660] text-center lg:h-[68rem] md:h-[56.25rem] pt-20 pb-10'>
            <TitleBar title="Some of My Experiences" style={{ backgroundColor: "rgba(0, 255, 0, 0)" }}>  </TitleBar>
            <div className='lg:px-72 px-6 lg:py-16 py-6 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3 lg:h-[90vh] h-[120vh] '>
                {/* box 1 */}
                    <SlidingImageText images={project4} intervalDuration={4000} liveLink={'https://storied-donut-b1299b.netlify.app/'} github={'https://github.com/khadizajarin/job-seeker-client'} />
                {/* box 2 */}
                    <SlidingImageText images={project3} intervalDuration={5000} liveLink={'https://open-table-design.netlify.app/'} github={'https://github.com/khadizajarin/open-table-design'} />
                {/* box 3 */}
                    <SlidingImageText className='lg:row-span-2' images={project1} intervalDuration={6000} liveLink={'https://tranquil-nougat-6ba383.netlify.app/'} github={'https://github.com/khadizajarin/thePortfolyo'} />
                {/* box 4 */}
                    <SlidingImageText className='lg:col-span-2' images={project2} intervalDuration={7000} liveLink={'https://silly-madeleine-e13392.netlify.app/'} github={'https://github.com/khadizajarin/task-homepage'} />
            </div>

            <div className='flex flex-row gap-6 justify-center mt-4'>
            <Link to="https://github.com/khadizajarin">
                <button className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)]  text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
                    Visit Github
                    <LiaArrowRightSolid className= "lg:ml-1 lg:w-6 lg:h-5 stroke-1"/>
                </button>
            </Link>
            <div onClick={() => scrollToSection(props.contactRef)}>
                <button className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)]  text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
                Hire Me
                <LiaArrowRightSolid className= "lg:ml-1 lg:w-6 lg:h-5 stroke-1"/>
            </button>
            </div>
            
            </div>
        </div>
    );
});

export default Experience;

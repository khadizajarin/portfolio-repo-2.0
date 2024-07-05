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
        <div ref={ref} className='bg-[#1E3660] text-center mb-7 h-[900px]'>
            <TitleBar title="Some of My Experience" style={{ backgroundColor: "rgba(0, 255, 0, 0)" }}>  </TitleBar>
            <div className='px-72 py-16 grid grid-cols-3 gap-8 h-[90vh] '>
                {/* box 1 */}
                    <SlidingImageText images={project4} intervalDuration={8000} liveLink={'https://storied-donut-b1299b.netlify.app/'} github={'https://github.com/khadizajarin/job-seeker-client'} />
                {/* box 2 */}
                    <SlidingImageText images={project3} intervalDuration={11000} liveLink={'https://portfolio-khadizajarinroza.netlify.app/?fbclid=IwZXh0bgNhZW0CMTAAAR35bfNFV4UA-FIFZW43r2dX9S6v6Cj8dRa7Y5V-qojZAeZEsP5Q74FYgLE_aem_41FV1azXsZ6cAVH_rvXJkw'} github={'https://github.com/khadizajarin/portfolio-repo'} />
                {/* box 3 */}
                    <SlidingImageText className='row-span-2' images={project1} intervalDuration={9000} liveLink={'https://tranquil-nougat-6ba383.netlify.app/'} github={'https://github.com/khadizajarin/thePortfolyo'} />
                {/* box 4 */}
                    <SlidingImageText className='col-span-2' images={project2} intervalDuration={10000} liveLink={'https://silly-madeleine-e13392.netlify.app/'} github={'https://github.com/khadizajarin/task-homepage'} />
            </div>

            <div className='flex flex-row gap-6 justify-center mt-4'>
            <Link to="https://github.com/khadizajarin">
                <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                    Visit Github
                    <LiaArrowRightSolid className= "w-6 h-5 stroke-1"/>
                </button>
            </Link>
            <div onClick={() => scrollToSection(props.contactRef)}>
                <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                Hire Me
                <LiaArrowRightSolid className= "w-6 h-5 stroke-1"/>
            </button>
            </div>
            
            </div>
        </div>
    );
});

export default Experience;

/* eslint-disable react/display-name */
import { forwardRef } from "react";
import TitleBar from "../CommonComps/TitleBar/TitleBar";


const Workflow = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="relative flex flex-col justify-center items-center lg:pt-[6.125rem] pt-10 bg-white">

        <div className="hidden lg:inline-block absolute z-5 border-4 border-[#768B9C] opacity-10 rounded-full lg:w-[12.5rem] w-[6.25rem] lg:h-[12.5rem] h-[6.25rem] "></div>
        <div className="hidden lg:inline-block absolute z-5 border-4 border-[#768B9C] opacity-10 rounded-full lg:w-[500px] w-[200px] lg:h-[500px] h-[200px]"></div>
        <div className="hidden lg:inline-block absolute z-5 border-4 border-[#768B9C] opacity-10 rounded-full lg:w-[800px] w-[300px] lg:h-[800px] h-[300px]"></div>
        <div className="hidden lg:inline-block absolute z-5 border-4 border-[#768B9C] opacity-10 rounded-full lg:w-[1200px] w-[400px] lg:h-[1200px] h-[400px]"></div>

        {/* <!-- First vertical line --> */}
            <div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  left-16 -mt-[3.125rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  left-16 mt-[3rem]"></div>
                <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  left-16 mt-[7.6875rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  left-16 mt-[19.375rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  left-16 mt-[28.125rem]"></div>
                {/* <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:left-[30.1875rem] left-16 mt-[33.4375rem]"></div> */}
                {/* <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:left-[30.1875rem] left-16 mt-[37.5rem]"></div> */}
                {/* <div className="lg:hidden absolute h-20 lg:h-10 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:left-[30.1875rem] left-16 mt-[47.5rem]"></div>
                <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:left-[30.1875rem] left-16 mt-[52.8125rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:left-[30.1875rem] left-16 mt-[56.25rem]"></div> */}
            </div>

        {/* <!-- Second vertical line --> */}
            <div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 -mt-[3.125rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[3rem]"></div>
                <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[7.6875rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[19.375rem]"></div>
                <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[28.125rem]"></div>
                {/* <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[33.4375rem]"></div> */}
                {/* <div className="lg:hidden absolute h-20 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[37.5rem]"></div>
                <div className="lg:hidden absolute h-20 lg:h-10 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[47.5rem]"></div>
                <div className="lg:hidden absolute h-2 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  right-16 mt-[51.875rem]"></div>
                <div className="lg:hidden absolute h-10 w-1 bg-[#768B9C] opacity-[0.09] lg:opacity-15  lg:right-[30.1875rem] right-16 mt-[56.25rem]"></div> */}
            </div>


            {/* button and text */}
            <TitleBar title={"From Brief to Build: Project Workflow"}></TitleBar>
            <p className="text-[#768B9C] lg:text-lg text-[0.75rem] font-medium lg:mt-10 mt-7 lg:leading-loose lg:tracking-wider lg:text-center text-justify lg:mb-[3.5rem] mb-9 px-6"> There will be an initial meeting with the client to understand his requirements and the final <span className="hidden lg:inline"><br /></span> goal of the site. Afterward, I conduct research on similar projects and created a wireframe <span className="hidden lg:inline"><br /></span> to outline the structure and determine the layout of the portfolio. In the final stage,<span className="hidden lg:inline"><br /></span> I design the UI,  developed a comprehensive UI kit, and created a prototype <span className="hidden lg:inline"><br /></span> for the development phase to be carried out by the client.</p>

        

            {/* Workflow */}
            <div className="flex lg:flex-row flex-col lg:gap-14 gap-6 justify-center items-center lg:mb-28 mb-10">
            {["Briefing", "MoodBoard", "Research", "Design & Coding"].map((label) => (
                <button
                key={label}
                className="btn lg:h-[3rem] min-h-[1.5rem] h-[2rem] lg:text-[0.875rem] text-[0.75rem] bg-[#1E3660] hover:bg-[#1E3660] border-[5px] border-[#768B9C] rounded-full text-white"
                >
                <span className="border-white rounded-full border-4 mr-4"></span>
                {label}
                <span className="border-white rounded-full border-4 ml-4"></span>
                </button>
            ))}
            </div>


        </div>
    );
});

export default Workflow;
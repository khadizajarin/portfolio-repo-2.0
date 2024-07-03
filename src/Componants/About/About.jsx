/* eslint-disable react/no-unescaped-entities */

import TitleBar from "../CommonComps/TitleBar/TitleBar";


const About = () => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            {/* <!-- First vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 left-[483px]"></div>
            {/* <!-- Second vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 right-[483px]"></div>


            
            <TitleBar title="About me"></TitleBar>
            <p className="text-[#768B9C] text-lg font-medium  mt-10 leading-loose tracking-wider text-center"> Hey there, I'm Khadiza Jarin Roza, a Frontend React Developer. I've <br /> 
                mastered  React and  front-end skills through a dedicated 6-month <br /> 
                course, passionate about crafting sleek and user-friendly interfaces.</p>

           
            <TitleBar title="My Skills"></TitleBar>
            <p className="text-[#768B9C] text-lg font-medium  mt-10 leading-loose tracking-wider text-center mb-[72px]"> I'm passionately investigating web development and driven to <br />
                continuously learn new abilities. Every day presents an opportunity <br />
                to take on new challenges and embrace how the world of design and <br />
                coding is constantly changing. Utilize my skill set that includes:</p>
        </div>
    );
};

export default About;
/* eslint-disable react/no-unescaped-entities */

import TitleBar from "../CommonComps/TitleBar/TitleBar";


const About = () => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            {/* <!-- First vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 lg:left-[483px] left-16"></div>
            {/* <!-- Second vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 lg:right-[483px] right-16"></div>


            
            <TitleBar title="About me"></TitleBar>
            <p className="text-[#768B9C] text-lg font-medium mt-10 leading-loose tracking-wider text-center">
            Hey there, I'm Khadiza Jarin Roza, a Frontend React Developer with a strong passion for creating sleek,
            <span className="hidden lg:inline"><br /></span> user-friendly interfaces. Through an intensive 6-month course, I've mastered
            <span className="hidden lg:inline"><br /></span> React and a comprehensive suite of front-end technologies. I thrive on transforming
            <span className="hidden lg:inline"><br /></span> complex ideas into engaging, seamless user experiences and
            <span className="hidden lg:inline"><br /></span> am committed to staying ahead of the curve in the ever-evolving world of web development.
            </p>
           
            <TitleBar title="My Skills"></TitleBar>
            <p className="text-[#768B9C] text-lg font-medium mt-10 leading-loose tracking-wider text-center mb-[72px]">
            I'm passionately delving into the world of web development, driven by an insatiable desire
            <span className="hidden lg:inline"><br /></span> to continuously learn and acquire new skills. Each day offers a fresh opportunity to tackle
            <span className="hidden lg:inline"><br /></span> innovative challenges and fully embrace the dynamic and ever-changing landscape of design and coding.
            <span className="hidden lg:inline"><br /></span> This relentless pursuit of knowledge and growth fuels my creativity and determination, allowing
            <span className="hidden lg:inline"><br /></span> me to stay ahead in the fast-paced world of web development. By constantly evolving my skill
            <span className="hidden lg:inline"><br /></span> set, I am committed to creating impactful, user-centric experiences that push the boundaries of
            <span className="hidden lg:inline"><br /></span> what's possible in the digital realm. Utilize my skill set that includes:
            </p>

        </div>
    );
};

export default About;
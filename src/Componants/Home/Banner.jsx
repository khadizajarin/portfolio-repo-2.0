/* eslint-disable react/prop-types */
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { LiaArrowRightSolid } from "react-icons/lia";
import image from '../../assets/3-01.png';
// import border from "../../assets/border-01.png";
import scroll from "../../assets/icon-01 (2).png";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const Banner = ({contactRef}) => { 

    const scrollToSection = (elementRef) => {
        if (elementRef.current) {
          window.scrollTo({
            top: elementRef.current?.offsetTop,
            behavior: "smooth",
          });
        }
      };

      
    return (
        <div className="flex justify-center items-center lg:flex-row-reverse md:flex-row-reverse flex-col-reverse bg-[#1E3660] lg:h-[35.625rem] md:h-[20rem] ">

                {/* image */}
                <div className="lg:w-full bg-white ">
                
                    {/* top border */}
                    <div className="relative">
                        <div className="flex justify-center items-center absolute z-10 lg:ml-0 ml-[1.8rem] lg:top-0 top-[1rem] ">
                            <div className="border-t-[3px] border-white md:opacity-70 w-4"></div>
                            <div className="border-t-[3px] border-white md:opacity-70 w-2 ml-8"></div>
                            <div className="border-t-[3px] border-white md:opacity-70 w-10 ml-2"></div>
                            <div className="border-t-[3px] border-white md:opacity-70 w-28 ml-10"></div>
                            <div className="border-t-[3px] border-white md:opacity-70 w-4 ml-10"></div>
                            <div className="hidden lg:inline-block border-t-[3px] border-white md:opacity-70 lg:w-10 w-[14px] ml-2"></div>
                            <div className="hidden lg:inline-block border-t-[3px] border-white md:opacity-70 w-36 ml-4"></div>
                        </div>
                    </div>

                    {/* right border */}
                    <div className="relative">
                        <div className="absolute lg:right-[4.6875rem] right-[2rem] z-10   "> 
                                <div className="hidden lg:inline-block mt-[0.4375rem] border-r-[3px] border-white md:opacity-70 h-3 absolute"></div>
                                <div className=" mt-[1.5rem] border-r-[3px] border-white md:opacity-70 h-14 absolute"></div>
                                <div className=" mt-[7.5rem] border-r-[3px] border-white md:opacity-70 h-28 absolute"></div>
                                <div className="lg:mt-[18.4375rem] mt-[14.8125rem] border-r-[3px] border-white md:opacity-70 lg:h-3 h-10 absolute"></div>
                                <div className="mt-[19.375rem] border-r-[3px] border-white md:opacity-70  lg:h-14 h-12 absolute"></div>
                                <div className="hidden lg:inline-block mt-[25.9375rem] border-r-[3px] border-wite md:opacity-70 h-40 absolute"></div>
                        </div>
                    </div>

                    {/* left border */}
                    <div className="relative">
                        <div className="absolute lg:-left-[2.8125rem] left-[2rem] z-10  " > 
                                <div className="lg:mt-[0px] mt-[1.25rem] border-l-[3px] border-white md:opacity-70 h-40 absolute"></div>
                                <div className="lg:mt-[13.125rem] mt-[13.4375rem] border-l-[3px] border-white md:opacity-70 lg:h-14 h-12 absolute"></div>
                                <div className="mt-[16.875rem] border-l-[3px] border-white md:opacity-70 lg:h-3 h-1 absolute"></div>
                                <div className="mt-[20.625rem] border-l-[3px] border-white md:opacity-70 lg:h-28 h-7 absolute"></div>
                                <div className="hidden lg:inline-block mt-[30rem] border-l-[3px] border-white md:opacity-70 h-14 absolute"></div>
                                <div className="hidden lg:inline-block mt-[33.75rem] border-l-[3px] border-white md:opacity-70 h-3 absolute"></div>
                        </div>
                    </div>


                    {/* the image */}
                    <img src={image} className="lg:w-[35.75rem] w-full md:h-full lg:mb-[0.19rem] lg:mr-[0.19rem]"  />


                    {/* bottom border */}
                    <div className="relative">
                        <div className="flex z-10 justify-center items-center absolute lg:ml-0 ml-[2rem] lg:bottom-[0.19rem] bottom-[1rem]" >
                            <div className="border-b-[3px] border-white md:opacity-70 w-20 "></div>
                            <div className="border-b-[3px] border-white md:opacity-70 w-2 ml-8"></div>
                            <div className="border-b-[3px] border-white md:opacity-70 w-10 ml-2"></div>
                            <div className="border-b-[3px] border-white md:opacity-70 lg:w-28 w-24 ml-10"></div>
                            <div className="hidden lg:inline border-b-[3px] border-white md:opacity-70 w-4 ml-10"></div>
                            <div className="hidden lg:inline border-b-[3px] border-white md:opacity-70 w-10 ml-2"></div>
                            <div className="hidden lg:inline border-b-[3px] border-white md:opacity-70 w-[5.625rem] ml-4"></div>
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="lg:w-[118.3%] lg:ml-48  flex flex-col justify-center items-start mb-16 mt-10 lg:mt-0">
                    <div className=" ">
                        <h2 className="text-[#768B9C] font-bold lg:text-xl text-[14px] pb-[2px] ">My name is</h2>
                        <h1 className="text-white lg:text-6xl text-4xl font-bold lg:pb-2 tracking-wide">Khadiza </h1>
                        <h1 className="text-white font-bold lg:text-5xl text-3xl lg:pb-4 pb-2 tracking-wide">Jarin Roza.</h1>
                        <hr className="pb-4 lg:w-96 w-[260px] border-[#768B9C] border-t-[3px]" />
                        <p className="lg:pb-10 pb-5 text-white lg:text-sm text-[10px] font-bold">I like to craft solid and scalable front-end products <span className=""><br /></span> with great user experiences.</p>
                        <div className="flex flex-row lg:gap-6 gap-3 ">
                        <a href="Khadiza_Jarin_Roza_resume.pdf" download>
                            <button className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)] text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
                                Download Resume 
                                <HiMiniArrowDownTray className=" lg:w-6 lg:h-5 stroke-1"/> 
                            </button></a>
                            <div onClick={() => scrollToSection(contactRef)}>
                                <button className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)] text-white font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
                                    Hire Me
                                    <LiaArrowRightSolid className= " lg:w-6 lg:h-5 stroke-1"/>
                                </button>
                            </div>
                            
                        </div>
                        <div className="relative">
                            <div className="absolute lg:top-[7rem] top-[1.99rem] lg:left-[15.3125rem] flex flex-col justify-center items-center">
                                <p className="absolute top-[0.00001rem] text-white lg:text-xs text-[6px] font-semibold opacity-60">Scroll down</p>
                                <img src={scroll} className="text-[#1E3660] z-10 lg:w-24 w-16 " />
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Banner;
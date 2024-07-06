/* eslint-disable react/prop-types */
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { LiaArrowRightSolid } from "react-icons/lia";
import image from '../../assets/3-01.png';
// import border from "../../assets/border-01.png";
import scroll from "../../assets/icon-01.png";

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
        <div className="flex justify-center items-center lg:flex-row-reverse flex-col bg-[#1E3660] lg:h-[570px]">

                {/* image */}
                <div className=" w-full bg-white ">
                    {/* <img src={border} alt="" className="absolute w-[572px] right-[87px] top-[102px] mb-[3px]" /> */}
                    {/* top border */}
                    <div className="flex justify-center items-center absolute z-10  ">
                        <div className="border-t-[3px] border-white w-4"></div>
                        <div className="border-t-[3px] border-white w-2 ml-8"></div>
                        <div className="border-t-[3px] border-white w-10 ml-2"></div>
                        <div className="border-t-[3px] border-white w-28 ml-10"></div>
                        <div className="border-t-[3px] border-white w-4 ml-10"></div>
                        <div className="border-t-[3px] border-white w-10 ml-2"></div>
                        <div className="border-t-[3px] border-white w-36 ml-4"></div>
                    </div>

                    {/* right border */}
                    <div className="absolute lg:right-20 right-5 z-10 lg:top-[103px]  " > 
                            <div className="mt-[7px] border-r-[3px] border-white h-3 absolute"></div>
                            <div className="mt-[24px] border-r-[3px] border-white h-14 absolute"></div>
                            <div className="mt-[120px] border-r-[3px] border-white h-28 absolute"></div>
                            <div className="mt-[295px] border-r-[3px] border-white h-3 absolute"></div>
                            <div className="mt-[310px] border-r-[3px] border-white h-14 absolute"></div>
                            <div className="mt-[415px] border-r-[3px] border-white h-40 absolute"></div>
                    </div>
                    <img src={image} className="lg:w-[572px] w-full lg:h-full h-[400px] relative lg:mb-[3px] lg:mr-[3px]"  />
                    {/* left border */}
                    <div className="absolute lg:w-[572px] lg:right-20 lg:top-[103px] top-0 " > 
                            <div className=" border-l-[3px] border-white h-40 absolute"></div>
                            <div className="mt-[210px] border-l-[3px] border-white h-14 absolute"></div>
                            <div className="mt-[270px] border-l-[3px] border-white h-3 absolute"></div>
                            <div className="mt-[330px] border-l-[3px] border-white h-28 absolute"></div>
                            <div className="mt-[480px] border-l-[3px] border-white h-14 absolute"></div>
                            <div className="mt-[540px] border-l-[3px] border-white h-3 absolute"></div>
                    </div>
                    {/* bottom border */}
                    <div className="flex lg:w-[572px] z-10 justify-center items-center absolute lg:bottom-[10px] lg:top-[572px]">
                        <div className="border-b-[3px] border-white w-10 lg:w-20"></div>
                        <div className="border-b-[3px] border-white w-1 lg:w-2 ml-8"></div>
                        <div className="border-b-[3px] border-white w-5 lg:w-10 ml-2"></div>
                        <div className="border-b-[3px] border-white w-14 lg:w-28 ml-10"></div>
                        <div className="border-b-[3px] border-white w-2 lg:w-4 ml-10"></div>
                        <div className="border-b-[3px] border-white w-5 lg:w-10 ml-2"></div>
                        <div className="border-b-[3px] border-white w-[45px] lg:w-[90px] ml-4"></div>
                    </div>
                </div>

                {/* text */}
                <div className="lg:w-[118.3%] lg:ml-48 ml-6 flex flex-col justify-center items-start mb-14 mt-9 lg:mt-0">
                    <div >
                        <h2 className="text-[#768B9C] font-bold text-xl pb-2 ">Hi, my name is</h2>
                        <h1 className="text-white text-6xl font-bold pb-2 tracking-wider">Khadiza </h1>
                        <h1 className="text-white font-bold text-5xl pb-7 tracking-wider">Jarin Roza.</h1>
                        <hr className="pb-3 lg:w-96 w-full border-[#768B9C] border-t-4" />
                        <p className="pb-10 text-white text-sm font-bold">I like to craft solid and scalable front-end products <br /> with great user experiences.</p>
                        <div className=" flex flex-row  lg:gap-6 gap-4">
                        <a href="khadiza_jarin_roza(resume).pdf" download>
                            <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)]  text-white font-semibold ">
                                Download Resume 
                                <HiMiniArrowDownTray className= "lg:w-6 lg:h-5  stroke-1"/> 
                            </button></a>
                            <div onClick={() => scrollToSection(contactRef)}>
                                <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                                    Hire Me
                                    <LiaArrowRightSolid className= "lg:w-6 lg:h-5  stroke-1"/>
                                </button>
                            </div>
                            
                        </div>
                        <div className="absolute lg:-bottom-6 lg:left-[445px] flex flex-col justify-center items-center gap-2">
                            <p className="text-white text-xs">Scroll down</p>
                            <img src={scroll} className="text-[#1E3660] z-10 w-20 h-20  rounded-full " />
                        </div>  
                    </div>
                </div>
            
        </div>
    );
};

export default Banner;
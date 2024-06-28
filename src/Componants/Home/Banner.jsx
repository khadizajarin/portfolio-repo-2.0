import { HiMiniArrowDownTray } from "react-icons/hi2";
import { LiaArrowRightSolid } from "react-icons/lia";
import { PiMouseSimpleBold } from "react-icons/pi";
import image from '../../assets/3-01.png';
import border from "../../assets/border-01.png";

const Banner = () => { 
    return (
        <div className="flex justify-center items-center lg:flex-row-reverse flex-col bg-[#1E3660]" style={{height:"570px"}}>

                {/* image */}
                <div className="w-full bg-white ">
                    <img src={border} alt="" className="absolute w-[572px] right-20 top-[102px]" style={{ marginBottom:"3px"}}/>
                    <img src={image} className="w-[572px] " style={{ marginBottom:"3px", marginRight:"3px"}} />
                </div>

                {/* text */}
                <div className="lg:w-[118.3%] ml-48 flex flex-col justify-center items-start mb-14">
                    <div >
                        <h2 className="text-[#768B9C] font-bold text-xl pb-2 ">Hi, my name is</h2>
                        <h1 className="text-white text-6xl font-bold pb-2 tracking-widest">Khadiza </h1>
                        <h1 className="text-white font-bold text-5xl pb-7 tracking-wider">Jarin Roza.</h1>
                        <hr className="pb-3 w-96 border-[#768B9C] border-t-4" />
                        <p className="pb-10 text-white text-sm font-bold">I like to craft solid and scalable front-end products <br /> with great user experiences.</p>
                        <div className=" flex gap-6">
                            <button className="btn bg-[#768B9C] border-0 shadow-slate-900 shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)]  text-white font-semibold ">
                                Download Resume 
                                <HiMiniArrowDownTray className= "w-6 h-5  stroke-1"/> 
                            </button>
                            <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                                Hire Me
                                <LiaArrowRightSolid className= "w-6 h-5  stroke-1"/>
                            </button>
                        </div>
                        <div className="absolute -bottom-6 left-[450px] flex flex-col justify-center items-center gap-2">
                            <p className="text-white text-xs">Scroll down</p>
                            <PiMouseSimpleBold className="text-[#1E3660] bg-white w-14 h-16 p-2 rounded-full " />
                        </div>  
                    </div>
                </div>
            
        </div>
    );
};

export default Banner;
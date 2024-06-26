import { HiMiniArrowDownTray } from "react-icons/hi2";
import { LiaArrowRightSolid } from "react-icons/lia";

import { PiMouseSimpleBold } from "react-icons/pi";

const Banner = () => {
    return (
        <div className="flex justify-center items-center lg:flex-row-reverse bg-[#1E3660]" style={{height:"552px"}}>
           
                <div className="w-1/2 bg-white">
                    <img src="../src/assets/WhatsApp Image 2024-06-14 at 21.28.11_53b6c487.jpg" className=" bg-white " style={{marginLeft:"-80px", marginBottom:"2px", width:"563px"}} />
                </div>
                <div className="ml-40 w-1/2 ">
                    <h2 className="text-[#768B9C] font-bold text-xl pb-2">Hi, my name is</h2>
                    <h1 className="text-white text-6xl font-bold pb-2 tracking-wider hover:tracking-widest">Khadiza </h1>
                    <h1 className="text-white font-bold text-5xl pb-7 tracking-wider hover:tracking-widest">Jarin Roza.</h1>
                    <hr className="pb-3 w-96 border-[#768B9C] border-t-4" />
                    <p className="pb-10 text-white text-sm font-bold">I like to craft solid and scalable front-end products <br /> with great user experiences.</p>
                    <div className=" flex gap-6">
                        <button className="btn bg-[#768B9C] border-0 shadow-black shadow-lg text-white font-semibold ">
                            Download Resume 
                            <HiMiniArrowDownTray className= "w-6 h-5  stroke-1"/> 
                        </button>
                        <button className="btn bg-[#768B9C] border-0 shadow-black shadow-lg text-white font-semibold ">
                            Hire Me
                            <LiaArrowRightSolid className= "w-6 h-5  stroke-1"/>
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-96 flex flex-col justify-center items-center gap-2">
                        <p className="text-white text-xs">Scroll down</p>
                        <PiMouseSimpleBold className="text-[#1E3660] bg-white w-14 h-16 p-2 rounded-full " />
                    </div>
                    
                </div>
            
        </div>
    );
};

export default Banner;
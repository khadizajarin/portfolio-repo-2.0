/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Box from "../CommonComps/Box/Box";


const Skills = forwardRef((props, ref) => {


    return (
        <div  ref={ref} className=" lg:h-[700px] h-[350px] bg-[#E4E8EB] lg:px-52 px-[40px] lg:py-16 py-9 grid grid-cols-2  justify-center items-center">

            {/* box 1 */}
            <div className="relative h-full grid grid-rows-3 gap-4 items-start pr-7">
                <div className="row-span-3 flex justify-end ">
                    <Box  text="75%" subtext="React (Intermediate)"/>
                </div>
                {/* connecting line 1 */}
                <div className="absolute lg:left-[350px] left-[59px] lg:top-[170px] top-[85px] lg:border-l-[10px] border-l-[5px] lg:border-b-[10px] border-b-[5px] lg:rounded-bl-[18px] rounded-bl-lg  border-[#1E3660]  lg:h-14 h-7 lg:w-60 w-36">
                </div>
            </div>

            
            {/* box 2 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="50%" subtext="Node.js (Intermediate)"/>
                </div>
                {/* connecting line 2 */}
                <div className="absolute lg:right-[349px] lg:top-[300px] right-[60px] top-[150px]  lg:border-r-[10px] border-r-[5px] lg:border-b-[10px] border-b-[5px] lg:rounded-br-[18px] rounded-br-lg border-[#1E3660] lg:h-14 h-7 lg:w-60 w-40">
</div>

            </div>

            {/* box 3 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-start pr-7">
                <div className=" -mt-10  row-span-2 flex justify-end">
                    <Box  text="25%" subtext="Express.js (Basic) "/>
                </div>
                {/* connecting line 3 */}
                <div className="absolute lg:left-[350px] lg:top-[130px] left-[59px] top-[45px] lg:border-l-[10px] border-l-[5px] lg:border-b-[10px] border-b-[5px] lg:rounded-bl-[18px] rounded-bl-lg border-[#1E3660] lg:h-14 h-7 lg:w-60 w-36">
</div>

                
            </div>

            {/* box 4 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="100%" subtext="MongoDB (Basic)"/>
                </div>
            </div>
            
        </div>
    );
});

export default Skills;
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Box from "../CommonComps/Box/Box";
// import { motion } from "framer-motion";

const Skills = forwardRef((props, ref) => {


    return (
        <div  ref={ref} className="relative lg:h-[45.75rem] h-[21.875rem] bg-[#E4E8EB] lg:px-52 md:px-60 px-[2.5rem] lg:py-16 py-9 grid grid-cols-2 justify-center items-center z-10">

            {/* box 1 */}
            <div className="relative h-full grid grid-rows-3 gap-4 items-start pr-7">
                <div className="row-span-3 flex justify-end ">
                    <Box  text="70%" title="React.JS" subtext="(Intermediate)" delay={0} duration={2} />
                </div>

                {/* connecting line 1 */}
                <div className="absolute lg:left-[30.1875rem] left-[3.6875rem] lg:top-[10.625rem] top-[5.3125rem] lg:border-l-[0.625rem] border-l-[0.3125rem] lg:border-b-[0.625rem] border-b-[0.3125rem] lg:rounded-bl-[1.125rem] rounded-bl-lg  border-[#1E3660]  lg:h-14 h-7 lg:w-64 w-36">
                </div>
            </div>

            
            {/* box 2 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="50%" title="Node.JS" subtext="(Intermediate)" delay={2} duration={2}/>
                </div>
                {/* connecting line 2 */}
                <div className="absolute lg:right-[31.8125rem] lg:top-[19.125rem] right-[3.75rem] top-[9.375rem]  lg:border-r-[0.625rem] border-r-[0.3125rem] lg:border-b-[0.625rem] border-b-[0.3125rem] lg:rounded-br-[1.125rem] rounded-br-lg border-[#1E3660] lg:h-[3.5rem] h-7 lg:w-60 w-40 ">
</div>

            </div>

            {/* box 3 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-start pr-7">
                <div className="-mt-10  row-span-2 flex justify-end">
                    <Box text="30%" title="Express.JS" subtext="(Basic) " delay={4} duration={2}/>
                </div>
                {/* connecting line 3 */}
                <div className="absolute lg:left-[31.875rem] lg:top-[8.125rem] left-[3.6875rem] top-[2.8125rem] lg:border-l-[0.625rem] border-l-[0.3125rem] lg:border-b-[0.625rem] border-b-[0.3125rem] lg:rounded-bl-[1.125rem] rounded-bl-lg border-[#1E3660] lg:h-14 h-7 lg:w-60 w-36">
</div>

                
            </div>

            {/* box 4 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="30%" title="MongoDB" subtext="(Basic)" delay={6} duration={2}/>
                </div>
            </div>
            
        </div>
    );
});

export default Skills;
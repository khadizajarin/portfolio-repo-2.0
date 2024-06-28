import Box from "../CommonComps/Box";


const Skills = () => {

    return (
        <div className=" h-[700px] bg-[#E4E8EB] px-52 py-16 grid grid-cols-2  justify-center items-center">

            {/* box 1 */}
            <div className="relative h-full grid grid-rows-3 gap-4 items-start pr-7">
                <div className="row-span-3 flex justify-end ">
                    <Box  text="75%" subtext="React(Intermediate)"/>
                </div>
                {/* connecting line 1 */}
                <div className="absolute left-[350px] top-[170px] border-l-[10px] border-b-[10px] rounded-bl-[18px]  border-[#1E3660]  h-14 w-80">
                </div>
            </div>

            
            {/* box 2 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="50%" subtext="React(Intermediate)"/>
                </div>
                {/* connecting line 2 */}
                <div className="absolute right-[350px] top-[300px] border-r-[10px] border-b-[10px] rounded-br-[18px]  border-[#1E3660]  h-14 w-80">
                </div>
            </div>

            {/* box 3 */}
            <div className="relative h-full grid grid-rows-2 gap-4 items-start pr-7">
                <div className=" -mt-10  row-span-2 flex justify-end">
                    <Box  text="25%" subtext="React(Intermediate) "/>
                </div>
                {/* connecting line 3 */}
                <div className="absolute left-[350px] top-[130px] border-l-[10px] border-b-[10px] rounded-bl-[18px] border-[#1E3660]  h-14 w-80">
                </div>
                
            </div>

            {/* box 4 */}
            <div className="relative h-full grid grid-rows-2  gap-4 items-end pl-7">
                <div className="-mt-10 row-span-2 flex justify-start ">
                    <Box  text="100%" subtext="React(Intermediate)"/>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;
import TitleBar from "../CommonComps/TitleBar/TitleBar";


const Workflow = () => {
    return (
        <div className="relative flex flex-col justify-center items-center ">

            {/* background design */}
            <div className="absolute -z-10 border-4 border-[#768B9C] opacity-10 rounded-full w-[200px] h-[200px]"></div>
            <div className="absolute -z-10 border-4 border-[#768B9C] opacity-10 rounded-full w-[500px] h-[500px]"></div>
            <div className="absolute -z-10 border-4 border-[#768B9C] opacity-10 rounded-full w-[800px] h-[800px]"></div>
            <div className="absolute -z-10 border-4 border-[#768B9C] opacity-10 rounded-full w-[1200px] h-[1200px]"></div>

            {/* button and text */}
            <TitleBar title={"Project Overflow"}></TitleBar>
            <p className="text-[#768B9C] text-lg font-medium  mt-10 mb-14 leading-loose tracking-wider        text-center"> We had initial meeting with client to understand his requirements and the <br />
                final goal of portfolio. After i conducted the research on similar <br />
                a wireframe to show the structure and determine the layout of <br />
                the portfolio. Final stage was to create Ul design and <br />
                Ul kit and prototype for the development stage performad by client.</p>

            {/* Workflow */}
            <div className="flex flex-row gap-14 justify-center items-center mb-28">
                {/* button 1 */}
                <button className="   btn bg-[#1E3660] border-[5px] border-[#768B9C] rounded-full text-white h-6">
                    <span className="border-white rounded-full border-4 mr-4"></span>
                    Briefing
                    <span className="border-white rounded-full border-4 ml-4"></span>
                </button>

                {/* button 2*/}
                <button className="   btn bg-[#1E3660] border-[5px] border-[#768B9C] rounded-full text-white h-6">
                    <span className="border-white rounded-full border-4 mr-4"></span>
                    MoodBoard
                    <span className="border-white rounded-full border-4 ml-4"></span>
                </button>

                {/* button 3 */}
                <button className="   btn bg-[#1E3660] border-[5px] border-[#768B9C] rounded-full text-white h-6">
                    <span className="border-white rounded-full border-4 mr-4"></span>
                    Research
                    <span className="border-white rounded-full border-4 ml-4"></span>
                </button>

                {/* button 4 */}
                <button className="   btn bg-[#1E3660] border-[5px] border-[#768B9C] rounded-full text-white h-6">
                    <span className="border-white rounded-full border-4 mr-4"></span>
                    Design&Coding
                    <span className="border-white rounded-full border-4 ml-4"></span>
                </button>


            </div>
        </div>
    );
};

export default Workflow;
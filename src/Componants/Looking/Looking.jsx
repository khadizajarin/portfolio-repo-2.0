

const Looking = () => {
    return (
        <div className=" relative flex flex-col items-center lg:h-[25rem] h-[17rem] bg-white">
            {/* <!-- First vertical line --> */}
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:left-[30.1875rem] left-16"></div>
            <div className="absolute h-2 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:left-[30.1875rem] left-16 mt-[5.3125rem]"></div>
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:left-[30.1875rem] left-16 mt-[8.75rem]"></div>
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:left-[30.1875rem] left-16 mt-[17.1875rem]"></div>
            <div className="absolute h-2 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:left-[30.1875rem] left-16 mt-[22.5rem]"></div>
            
            {/* <!-- Second vertical line --> */}
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:right-[30.1875rem] right-16"></div>
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:right-[30.1875rem] right-16 mt-[8.75rem]"></div>
            <div className="absolute h-2 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:right-[30.1875rem] right-16 mt-[14.0625rem]"></div>
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:right-[30.1875rem] right-16 mt-[18.125rem]"></div>
            <div className="absolute h-20 w-1 bg-[#768B9C] lg:opacity-20 opacity-10  lg:right-[30.1875rem] right-16 mt-[24.375rem]"></div>
           

            <div className="lg:h-[25rem] h-[17rem] flex flex-col justify-center items-center ">
                <h4 className="relative z-10 text-[#768B9C] lg:text-[3.125rem] text-[1.8rem] leading-none font-bold">Looking for a</h4>
                <h2 className="relative z-10 text-[#1E3660] lg:text-[5.625rem] text-[3.3rem] leading-none font-bold">React.JS</h2>
                <h1 className="relative z-10 text-[#1E3660] lg:text-[5.625rem] text-[3.2rem] leading-none font-bold">Developer?</h1>
            </div>
        </div>
    );
};

export default Looking; 
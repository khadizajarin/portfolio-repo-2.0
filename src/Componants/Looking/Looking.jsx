

const Looking = () => {
    return (
        <div className=" m-8 relative  flex flex-col justify-center items-center h-[300px]   ">
            {/* <!-- First vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 left-[483px]"></div>
            {/* <!-- Second vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 right-[483px]"></div>

            <h4 className="relative z-10 text-[#768B9C] text-[50px] leading-none font-bold">Looking for a</h4>
            <h2 className="relative z-10 text-[#1E3660] text-[90px] leading-none font-bold">React.JS</h2>
            <h1 className="relative z-10 text-[#1E3660] text-[90px] leading-none font-bold">Developer?</h1>
        </div>
    );
};

export default Looking; 
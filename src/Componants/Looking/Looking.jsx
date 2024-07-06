

const Looking = () => {
    return (
        <div className=" lg:m-8 mb-4 relative  flex flex-col justify-center items-center lg:h-[400px] h-[300px]  ">
            {/* <!-- First vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 lg:left-[483px] left-16"></div>
            {/* <!-- Second vertical line --> */}
            <div className="absolute h-full w-1 bg-[#768B9C] opacity-10 lg:right-[483px] right-16"></div>

            <h4 className="relative z-10 text-[#768B9C] lg:text-[50px] text-[40px] leading-none font-bold">Looking for a</h4>
            <h2 className="relative z-10 text-[#1E3660] lg:text-[90px] text-[60px] leading-none font-bold">React.JS</h2>
            <h1 className="relative z-10 text-[#1E3660] lg:text-[90px] text-[60px] leading-none font-bold">Developer?</h1>
        </div>
    );
};

export default Looking; 


const Navbar = () => {
    return (
      <div className="bg-[#1E3660]">
        <div className="flex  justify-evenly items-center  h-28 ">
            <div className=" bg-[#1E3660] lg:w-[150%] h-28 ">
              <div className="flex flex-row items-center">
                <div className=" ml-24 border-l-2 border-[#D2D7DF] h-52 absolute"></div>
                <div className=" ml-24 mt-64 border-l-2 border-[#D2D7DF] h-2 absolute"></div>
                <div className=" ml-24 mt-80 border-l-2 border-[#D2D7DF] h-10 absolute"></div>
              </div>
              <div className="text-4xl font-bold ml-32 mt-12 text-[#D2D7DF]">Hello,</div>   
            </div>

            <div className=" flex flex-row justify-center items-center w-full h-28 bg-white">
              <ul className="menu lg:menu-horizontal menu-vertical text-xl text-[#1E3660]  font-bold ">
                <li className="px-8 border-r-2 border-[#768B9C]">About</li>
                <li className="px-8 border-r-2 border-[#768B9C]">Resume</li>
                <li className="px-8 border-r-2 border-[#768B9C]">Portfolio</li>
                <li className="px-8">Contact</li>
              </ul>
            </div>
        </div>

        <div className="flex items-center ">
          <div className="border-t-2 border-[#D2D7DF] w-36"></div>
          <div className="border-t-2 border-[#D2D7DF] w-2 ml-8"></div>
          <div className="border-t-2 border-[#D2D7DF] w-10 ml-2"></div>
          <div className="border-t-2 border-[#D2D7DF] w-16 ml-10"></div>
        </div>
      </div>
    );
};

export default Navbar;
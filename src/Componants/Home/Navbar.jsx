

const Navbar = () => {
    return (
      <div>
        <div className="flex p-0 m-0 justify-evenly items-center bg-white h-28 ">

            <div className=" bg-[#1E3660] w-1/2 h-28 ">
              <div className="flex flex-row items-center">
                <div className=" ml-40  border-l-2 border-[#D2D7DF] h-52 absolute"></div>
                <div className=" ml-40  mt-64 border-l-2 border-[#D2D7DF] h-2 absolute"></div>
                <div className=" ml-40  mt-80 border-l-2 border-[#D2D7DF] h-10 absolute"></div>
              </div>
              <div className="text-4xl font-bold ml-48 mt-16 text-[#D2D7DF]">Hello,</div>   
            </div>

            <div className=" flex justify-center w-1/2 ">
              <ul className="menu menu-horizontal bg-white text-xl text-[#1E3660]  font-bold ">
                <li className="px-8">About</li>
                <li className="px-8">Resume</li>
                <li className="px-8">Portfolio</li>
                <li className="px-8">Contact</li>
              </ul>
            </div>
        </div>

        <div className="flex items-center  bg-[#1E3660]">
          <div className="border-t-2  border-[#D2D7DF] w-36"></div>
          <div className="border-t-2  border-[#D2D7DF] w-2 ml-8"></div>
          <div className="border-t-2  border-[#D2D7DF] w-10 ml-2"></div>
          <div className="border-t-2  border-[#D2D7DF] w-16 ml-10"></div>
        </div>
      </div>
    );
};

export default Navbar;
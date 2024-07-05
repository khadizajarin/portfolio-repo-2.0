/* eslint-disable react/prop-types */


const Navbar = ({ skillsRef, workflowRef, experiencesRef, contactRef }) => {


  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current?.offsetTop,
        behavior: "smooth",
      });
    }
  };
    return (
      <div className="lg:bg-[#1E3660]">
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center h-20 ">
            <div className=" bg-[#1E3660] lg:w-[150%] w-full lg:h-28 h-20">
              {/* left border */}
              <div className="flex flex-row items-center z-10">
                <div className="ml-4 lg:ml-24 border-l-[3px] border-white lg:h-52 h-16 absolute"></div>
                <div className="ml-4 lg:ml-24 mt-48 lg:mt-64 border-l-[3px] border-white lg:h-2 h-1 absolute"></div>
                <div className="ml-4 lg:ml-24 mt-36 lg:mt-80 border-l-[3px] border-white lg:h-10 h-5 absolute"></div>
              </div>
              <div className="text-4xl font-bold lg:ml-32 ml-8 lg:mt-12 mt-4 text-[#D2D7DF]">Hello,</div>   
            </div>

            <div className=" flex flex-row justify-center lg:items-center w-full lg:h-28  lg:bg-white">
              <ul className="absolute z-10 menu menu-horizontal  lg:text-xl text-[16px] text-[#1E3660]  lg:font-bold  font-semibold">
                <li onClick={() => scrollToSection(skillsRef)} className="lg:px-6 px-2 border-r-2 border-[#768B9C]">Skills</li>
                <li onClick={() => scrollToSection(workflowRef)} className="lg:px-6 px-2 border-r-2 border-[#768B9C]">Workflow</li>
                <li onClick={() => scrollToSection(experiencesRef)}className="lg:px-6 px-2 border-r-2 border-[#768B9C]">Experiences</li>
                <li onClick={() => scrollToSection(contactRef)} className="lg:px-6 px-2">Contact</li>
              </ul>
            </div>
        </div>

        {/* bottom border */}
        <div className="flex items-center ">
          <div className="border-t-[3px] border-white w-5 lg:w-20"></div>
          <div className="border-t-[3px] border-white w-1 lg:w-2 ml-8"></div>
          <div className="border-t-[3px] border-white w-2 lg:w-10 ml-2"></div>
          <div className="border-t-[3px] border-white w-6 lg:w-28 ml-10"></div>
          <div className="border-t-[3px] border-white w-2 lg:w-4 ml-10"></div>
          <div className="border-t-[3px] border-white w-2 lg:w-10 ml-2"></div>
        </div>
      </div>
    );
};

export default Navbar;
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { RiLinksFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';

const SlidingImageText = ({ images, className, liveLink, github, stack }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden border-b-[1px] border-white lg:border-0 ${className}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* ================= MOBILE DESIGN ================= */}
      <div className="lg:hidden relative w-full h-full">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-top"
          style={{ backgroundImage: `url(${images})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-white">
          
          <p className="text-sm mb-2 text-left">
            Tech stack: {stack}
          </p>

          <div className="flex gap-3">
            <Link 
              to={liveLink}
              className="flex items-center  gap-1 bg-[#768B9C] px-3 py-2 rounded-md text-xs"
            >
              <RiLinksFill />
              Live
            </Link>

            <Link 
              to={github}
              className="flex items-center gap-1 bg-[#768B9C] px-3 py-2 rounded-md text-xs"
            >
              <FiGithub />
              Code
            </Link>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP DESIGN ================= */}
      <div className="hidden lg:block w-full h-full">
        
        {/* Image */}
        <div className={`absolute top-0 w-full h-full transition-transform duration-300 ${
          isHovered ? '-translate-x-full' : 'translate-x-0'
        }`}>
          <div 
            className="bg-cover w-full h-full"
            style={{ backgroundImage: `url(${images})` }}
          />
        </div>

        {/* Text */}
        <div className={`absolute top-0 w-full h-full flex justify-center items-center transition-transform duration-300 ${
          isHovered ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="text-center text-white">
            <p className="text-xl my-4 px-4">
              Check out the Live Site and GitHub Repository!
            </p>

            <div className="flex justify-center items-center gap-6 text-xs">
              <Link to={liveLink}>
                <RiLinksFill className='bg-[#768B9C] w-20 h-20 p-4 flex justify-center items-center'/>
                LiveLink
              </Link>

              <Link to={github}>
                <FiGithub className='bg-[#768B9C] w-20 h-20 p-4 flex justify-center items-center'/>
                Github
              </Link>
            </div>

            <p className="text-xl my-4 px-4">
              Tech stack : {stack}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SlidingImageText;
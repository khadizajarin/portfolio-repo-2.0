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
      <div className={`absolute top-0 w-full h-full flex justify-center items-center transition-transform duration-500 ${
        isHovered ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="text-center text-white">
          <p className="lg:text-xl text-sm lg:my-4 my-1 px-4">
            Check out the Live Site and GitHub Repository!
          </p>

          <div className="flex justify-center items-center lg:gap-6 gap-2 text-xs">
            <Link to={liveLink}>
              <RiLinksFill className='bg-[#768B9C] lg:w-20 w-10 lg:h-20 h-10 lg:p-4 p-1 flex justify-center items-center'/>
              LiveLink
            </Link>

            <Link to={github}>
              <FiGithub className='bg-[#768B9C] lg:w-20 w-10 lg:h-20 h-10 lg:p-4 p-1 flex justify-center items-center'/>
              Github
            </Link>
          </div>

          <p className="lg:text-xl text-sm lg:my-4 my-1 px-4">
            Tech stack : {stack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlidingImageText;
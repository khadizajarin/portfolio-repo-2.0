/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { RiLinksFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';

const SlidingImageText = ({ images, intervalDuration, className, liveLink, github }) => {
  const [showImage, setShowImage] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setShowImage(prev => !prev); // Toggle between showing image and text
      }, intervalDuration); // Change every specified interval
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [intervalDuration, isHovered]);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${className}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className={`absolute top-0 -left-1  w-full h-full flex justify-center items-center transition-transform duration-500 ${showImage ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-cover w-full h-full" style={{ 
          backgroundImage: `url(${images})`
        }}>
          {/* Your image content */}
        </div>
      </div>

      {/* Text container */}
      <div className={`absolute top-0 lg:-left-1  w-full h-full flex justify-center items-center transition-transform duration-500 ${showImage ? '-translate-x-full' : 'translate-x-0'}`}>
        {/* Your text content */}
        <div className="text-center text-white">
        <p className=" lg:text-xl text-sm lg:my-4 my-1 lg:px-4 px-4">Check out the Live Site and GitHub Repository!</p>
          <h1 className="flex justify-center items-center lg:gap-6 gap-1 text-xs"> 
            <Link to={liveLink}><RiLinksFill className='border-0 bg-[#768B9C] lg:w-20 w-10 lg:h-20 h-10 lg:p-4 p-1 flex justify-center items-center '/>LiveLink</Link>
            <Link to={github}><FiGithub className='border-0 bg-[#768B9C] lg:w-20 w-10 lg:h-20 h-10 lg:p-4 p-1 flex justify-center items-center'/> Github </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SlidingImageText;

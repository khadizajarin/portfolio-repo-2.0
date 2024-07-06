import PropTypes from 'prop-types';
import './Box.css';
import { useState } from 'react';

const Box = ({ text, subtext }) => {
    const percent = parseInt(text);
    const [percentage] = useState(percent);

    // Calculate the total perimeter of the box
    const width = 350;
    const height = 170;
    const totalPerimeter = 2 * (width + height);
    
    // Calculate the border length based on the percentage
    const borderLength = (totalPerimeter * percentage) / 100;

    // Create a gradient that simulates the filled border
    const gradientPercentage = (borderLength / totalPerimeter) * 100;
    const borderGradient = `linear-gradient(to right, #1E3660 ${gradientPercentage}%, transparent ${gradientPercentage}%)`;

    return (
        <div className="relative flex justify-center items-center lg:w-[350px] w-[120px] lg:h-[170px] h-[85px]">
            {/* Outer border */}
            <div className="absolute w-full h-full lg:rounded-[18px] rounded-[9px] lg:border-[10px] border-[5px] border-[#A8B2C1]"></div>
            
            {/* Gradient border */}
            <div className="absolute w-full h-full lg:rounded-[18px] rounded-[9px]" style={{ background: borderGradient }}></div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col justify-center items-center lg:w-[330px] lg:h-[150px] w-[110px] h-[75px] lg:rounded-[8px] rounded-[4px] bg-[#F4F5F7]">
                <div className="lg:text-5xl text-base font-bold text-[#1E3660]">{text}</div>
                <div className="lg:text-xl text-xs font-bold text-[#1E3660] text-center">{subtext}</div>
            </div>
        </div>
    );
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
};

export default Box;

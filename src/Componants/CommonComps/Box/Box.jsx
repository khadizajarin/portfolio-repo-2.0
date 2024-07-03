import PropTypes from 'prop-types';
import './Box.css'; // Ensure you import the CSS file
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
        <div className="relative flex justify-center items-center w-[350px] h-[170px]">
            {/* Outer border */}
            <div className="absolute w-full h-full rounded-[18px] border-[10px] border-[#A8B2C1]"></div>
            
            {/* Gradient border */}
            <div className="absolute w-full h-full rounded-[18px]" style={{ background: borderGradient, borderRadius: '18px' }}></div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-[330px] h-[150px] rounded-[8px] bg-[#F4F5F7]">
                <div className="text-5xl font-bold text-[#1E3660]">{text}</div>
                <div className="text-xl font-bold text-[#1E3660]">{subtext}</div>
            </div>
        </div>
    );
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
};

export default Box;

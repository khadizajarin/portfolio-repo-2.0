import PropTypes from 'prop-types';
import './Box.css';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Box = ({ text,title, subtext,duration, delay }) => {
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

    useEffect(() => {
        // Force re-animation when percentage changes
        const newBorderLength = (totalPerimeter * percentage) / 100;
        const newGradientPercentage = (newBorderLength / totalPerimeter) * 100;

        // Animate the gradient border
        const timer = setTimeout(() => {
            const element = document.querySelector('.gradient-border');
            if (element) {
                element.style.width = `${newGradientPercentage}%`;
            }
        }, 100); // Delay to ensure animation restarts

        return () => clearTimeout(timer);
    }, [percentage, totalPerimeter, delay]);

    return (
        <div className="relative flex justify-center items-center lg:w-[21.875rem] w-[7.5rem] lg:h-[10.625rem] h-[5.3125rem]">
            {/* Outer border */}
            <div className="absolute inset-0 lg:rounded-[1.125rem] rounded-[0.5625rem] lg:border-[0.625rem] border-[0.3125rem] border-[#A8B2C1] "></div>
            
            {/* Gradient border */}
            <motion.div
                className="absolute inset-0 bg-[#31363F] lg:rounded-[1.125rem] rounded-[0.5625rem] gradient-border"
                style={{ width: `${gradientPercentage+50}%`, background: borderGradient }}
                initial={{ width: 0 }}
                animate={{ width: `${gradientPercentage +50}%` }}
                transition={{ duration: duration , delay: delay, repeat: Infinity,repeatDelay: 8}}
            />
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col justify-center items-center lg:w-[20.6875rem] lg:h-[9.4375rem] w-[6.875rem] h-[4.8125rem] lg:rounded-[0.5rem] rounded-[0.25rem] bg-[#F4F5F7] ">
                <div className="lg:text-5xl text-[1.2rem] font-bold text-[#1E3660]">{title}</div>
                <div className="lg:text-xl text-[0.7635rem] font-bold text-[#1E3660] text-center leading-tight mb-1">{subtext}</div>
            </div>
        </div>  
    );
};

Box.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
    delay: PropTypes.any.isRequired,
    duration: PropTypes.any.isRequired,
};

export default Box;

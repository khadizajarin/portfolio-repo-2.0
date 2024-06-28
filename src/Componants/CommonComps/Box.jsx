import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
import "./Box.css"

const Box = ({ text, subtext }) => {
    // const percentage = parseInt(text);

    return (
        <div className="relative flex flex-col justify-center items-center border-[#A8B2C1] border-[10px] rounded-[18px] w-80 h-36">

                <div className="myButton absolute -inset-[9.6px]  border-[#1E3660] rounded-[18px]" > 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            {/* Main content */}
            <div className= ' bg-[#F4F5F7] flex flex-col justify-center items-center w-full h-full rounded-[8px]'>
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


import PropTypes from 'prop-types';

const ReviewBox = ({name,designation,review}) => {
    return (
        <div className='bg-white text-center lg:shadow-gray-500 shadow-gray-400 lg:shadow-[10px_10px_20px_0_rgba(0,0,0,0.1)] shadow-[5px_5px_5px_0_rgba(0,0,0,0.9)] lg:w-[38.75rem] w-[19.375rem] lg:h-[14.375rem] p-6'>
            <h4 className='text-[#1E3660] font-bold lg:text-3xl text-[1.125rem] pb-[6px]'>{name}</h4>
            <h5 className='text-[#768B9C] font-semibold lg:text-xl text-[0.8rem]'>{designation}</h5>
            <p className='text-[#768B9C] font-normal lg:leading-5 text-xs lg:px-8 lg:pt-4 pt-2 text-justify'>{review}</p>
        </div>
    );
};

 ReviewBox.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
};

export default ReviewBox;
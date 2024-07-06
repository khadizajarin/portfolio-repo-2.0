
import PropTypes from 'prop-types';

const ReviewBox = ({name,designation,review}) => {
    return (
        <div className=' bg-white text-center shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.1)] w-[620px] h-[230px] p-6'>
            <h4 className='text-[#1E3660] font-bold text-3xl'>{name}</h4>
            <h5 className='text-[#768B9C] font-semibold text-xl '>{designation}</h5>
            <p className='text-[#768B9C] font-normal leading-5 text-xs px-8 pt-4'>{review}</p>
        </div>
    );
};

 ReviewBox.propTypes = {
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
};

export default ReviewBox;
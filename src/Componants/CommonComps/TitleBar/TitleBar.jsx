
import PropTypes from 'prop-types';

const TitleBar = ({title}) => {
    return (
        <div>
            <div className="btn lg:h-12 min-h-8 h-8 lg:text-2xl text-base font-bold bg-[#1E3660] text-white hover:bg-[#1E3660] lg:px-6">{title}</div>
        </div>
    );
};
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    
};

export default TitleBar;
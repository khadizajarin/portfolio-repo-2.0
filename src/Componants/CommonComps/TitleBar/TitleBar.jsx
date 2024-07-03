
import PropTypes from 'prop-types';

const TitleBar = ({title}) => {
    return (
        <div>
            <div className="btn text-2xl font-bold bg-[#1E3660] text-white mt-20 px-6">{title}</div>
        </div>
    );
};
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    
};

export default TitleBar;
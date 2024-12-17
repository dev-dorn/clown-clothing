import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Hook to get current location

    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    linkUrl: PropTypes.string.isRequired,
};

// Define default props if needed
MenuItem.defaultProps = {
    size: '',
};

export default MenuItem;


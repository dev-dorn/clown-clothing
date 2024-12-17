
import PropTypes from 'prop-types';
import './preview-collection.scss';
import CollectionItem from "../collection-item/collection-item.jsx";

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>  {/* Use the title prop dynamically */}
        <div className='preview'>
            {items
                .filter((item ,index ) =>index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
        </div>
    </div>
);
//defining prop types for the component
CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};
//default props
CollectionPreview.defaultProps = {
    items: [],
}

export default CollectionPreview;

import React from 'react';
import SHOP_DATA from "./shop.data.jsx";
import CollectionPreview from "../../components/preview-collection/preview-collection.component.jsx";
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        //initialize state
        this.state={
            collections: SHOP_DATA
        }

    }
    render (){
        const {collections}= this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id}{...otherCollectionsProps}/>
                ))
            }

        </div> )
    }
}
export default ShopPage;
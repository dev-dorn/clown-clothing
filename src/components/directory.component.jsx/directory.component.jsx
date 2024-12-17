import React from 'react';
import MenuItem from "../menu-item/menu-items.components.jsx";
import './directory.styles.scss';
class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections : [
                    {
                        title: 'hats',
                        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                        id: 1,
                        linkUrl: 'shop/hats'
                    },
                    {
                        title: 'jackets',
                        imageUrl: 'https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745027.jpg?uid=R162521018&ga=GA1.1.623535132.1734431641&semt=ais_hybrid',
                        id: 2,
                        linkUrl: 'shop/jackets'
                    },
                    {
                        title: 'sneakers',
                        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                        id: 3,
                        linkUrl: 'shop/sneakers'
                    },
                    {
                        title: 'womens',
                        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                        size: 'large',
                        id: 4,
                        linkUrl: 'shop/womens'
                    },
                    {
                        title: 'mens',
                        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                        size: 'large',
                        id: 5,
                        linkUrl: 'shop/mens'
                    },
                {
                    title :"lingerie",
                    imageUrl: 'https://shorturl.at/VgwM0',
                    size: 'large',
                    id: 6,
                    linkUrl:'shop/lingerie'
                },
                {
                    title: "pajamas",
                    imageUrl: 'https://shorturl.at/5xX7J',
                    size: ' all',
                    id: 7,
                    linkUrl:'shop/pajamas'
                }




        ]
        };
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps })=> (
                        <MenuItem  key={id} {...otherSectionProps}  />
                    ))
                }
            </div>
        )
    }

}
export default Directory;
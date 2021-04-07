import React from 'react';

import '../Css/Items.css';
import icShiping from '../img/shipping.png';
import {Link} from 'react-router-dom';


const Item = ({item}) => {
    const {id, picture, title, free_shipping, price, location, decimals } = item;
    return ( 
        <Link to={`/items/${id}`} className="link">
            <div className="containerItems">
                <div>
                    <img src={picture} alt="imagen-producto" className="imgResultado"/>
                </div>
                <div className="containerDescription">
                    <div className="description">
                        <div className="containerPrice">
                            <p className="price">${price.amount}</p>
                          {free_shipping ? <img src={icShiping} className="icShipping" alt="icon_shipping"/> :null}
                        </div>
                        
                        <p className="title">{title}</p>
                    </div>
                    <div className="containerLocation">
                        <p className="location">{location}</p>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default Item;
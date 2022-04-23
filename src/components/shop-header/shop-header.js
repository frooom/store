import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <a className='logo text-dark' href='#'>BookStore</a>
            <div className='shopping-cart'>
                <span className='cart-icon'>
                    <FontAwesomeIcon icon={faCartShopping} transform={{rotate: 0}} beat />
                </span>
                {numItems} items (${total})
            </div>
        </header>
    )
}

export default ShopHeader
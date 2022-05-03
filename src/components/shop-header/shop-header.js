import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header row'>
            <Link to='/'>
                <div className='logo text-dark' href='#'>BookStore</div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <span className='cart-icon'>
                        <FontAwesomeIcon icon={faCartShopping} transform={{rotate: 0}} beat />
                    </span>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, total}}) => {
    return {
        numItems: cartItems.length,
        total: total
    }
}

const mapDispatchToProps = {
       
    }

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader)
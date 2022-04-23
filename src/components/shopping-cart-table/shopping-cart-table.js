import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className='btn btn-outline-danger button'><FontAwesomeIcon icon={faTrashCan} beat /></button>
                            <button className='btn btn-outline-success button'><FontAwesomeIcon icon={faPlusCircle} beat /></button>
                            <button className='btn btn-outline-warning button'><FontAwesomeIcon icon={faMinusCircle} beat /></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='total'>
                Total: $210
            </div>
        </div>
    )
}

export default ShoppingCartTable
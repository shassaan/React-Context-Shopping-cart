import React from 'react'
import { useContext } from 'react';
import CartContext from './Context/CartContext'
const Cart  = prop =>{
    const cartItems = useContext(CartContext)[0]
    return (
        <>
            <h3>Cart Items <span className="badge badge-info">{cartItems.length}</span></h3>
        </>
    )
}

export default Cart;
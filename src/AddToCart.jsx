import React from 'react'
import { useContext } from 'react'
import CartContext from './Context/CartContext'
const AddToCart = prop => {
    const {id = -1} = prop || -1
    const [cartItems , setCartIitem] = useContext(CartContext);
    const addToCart = ()=>{
        setCartIitem(cartItems.concat(id))
    }
    return (
        <>
            <button className="btn btn-info btn-block" onClick={addToCart}>Add to cart</button>
        </>
    )
}

export default AddToCart;
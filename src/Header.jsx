import React from 'react'
import Cart from './Cart'
const Header = prop => {
    return (
        <>
          <div className="conatienr-fluid row">
                <div className="col-md-8 p-5">
                    <h1><span className="text text-info">Shopping</span> Cart</h1>
                </div>

                <div className="col-md-4 p-5">
                     <Cart/>
                </div>
          </div>
        </>
    )
}

export default Header;
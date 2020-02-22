import React from 'react'
import Product from './Product'

const ProductList = prop => {
    
    //const {Products} = prop.products || []
    return (
        <div className="row p-2">
        
        {
                prop.products.map((product,i) => {
                    return(
                        
                            <div className="col-md-3"  key={i}>
                                <Product product = {product}/>
                            </div>
                        
                    )
                })
            }
        </div>
        
    )
}


export default ProductList;
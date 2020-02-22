import React from 'react'
import ProductList from './ProductList'
import Products from './ProductsData'
import Header from './Header';
const MainWall = prop => {
    return(
        <>
            <Header/>
           <ProductList products = {Products}/>
        </>
    )
}

export default MainWall;
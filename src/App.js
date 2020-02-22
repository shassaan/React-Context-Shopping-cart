import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainWall from './MainWall'
import CartContext from './Context/CartContext'

function App() {
  const cartHook = useState([])
  return (
    <CartContext.Provider value={cartHook} >
      <MainWall/>
    </CartContext.Provider>
  );
}

export default App;

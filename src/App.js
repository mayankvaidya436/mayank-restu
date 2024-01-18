import Header from './Components/Layout/Header';
import './App.css';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

import React,{useState} from 'react';

function App() {
  const [cartIsShown, setCartIsShown ]=useState(false)
  const showCartHandler=()=>{
     setCartIsShown(true)
  }
  const hideCartHandler=()=>{
  setCartIsShown(false)
  }
  return (
    <div className='app'>
      <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
      </CartProvider>
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import NavBar from './components/UI/Navbar/NavBar';
import Card from './components/UI/Card/Card';
import Product from './components/Products/Product';
import Cart  from './components/Cart/Cart';
function App() {
  const[cartIsShow , setCartIsShow]=useState(false)

  const showCartHandler =()=>{
    setCartIsShow(true)
  }

  const hideCartHandler =()=>{
    setCartIsShow(false)
  }

  return (
    <div>
      <NavBar onShowCart={showCartHandler} />
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Card />
      <Product />
    </div>
  );
}

export default App;

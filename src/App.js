import { useState } from 'react';
import './App.css';
import Amazon from './components/Amazon/Amazon';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import "./components/Amazon/Amazon.css";
import OrderSummary from './components/OrderSummary/OrderSummary';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClicked = (item) => {
    let isPresent = false;
    cart.forEach(product => {
      if(product.id === item.id){
        isPresent = true;
      }
    })
    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      }, 2000);
      return;
    }
    else {
      setCart([...cart, item]);
    }
    // let isPresent = false;
    // cart.forEach(product => {
    //   if(item.id === product.id){
    //     isPresent = true;
    //   }
    // })
    // if(isPresent){
    //   return;
    // }
    // else {
    //   setCart([...cart, item]);
    // }
  }
  return (
    <div>
      <Navbar size={cart.length} setShow = {setShow}></Navbar>
      <OrderSummary cart = {cart} setCart = {setCart}></OrderSummary>
      {
        show ? <Amazon handleClicked={handleClicked}></Amazon> : <OrderSummary cart = {cart} setCart = {setCart}></OrderSummary>
      }
      

      {
        warning && <div className='warning'>Item already added.</div>
      }
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Amazon from './components/Amazon/Amazon';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar size={cart.length}></Navbar>
      <Amazon></Amazon>
    </div>
  );
}

export default App;

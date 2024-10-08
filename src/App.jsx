import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Menu from './Pages/Menu';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Admin from './Admindashboard/Addproducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Checkout from './Components/Checkout';  // Import the Checkout component

function App() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === newItem.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === newItem.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (item, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map(cartItem =>
          cartItem.name === item.name ? { ...cartItem, quantity: newQuantity } : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0)
    );
  };

  const deletecartItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter(cartItem => cartItem.name !== item.name)
    );
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar deletecart={deletecartItem} cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/menu' element={<Menu handleCart={handleCart} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/checkout' element={<Checkout />} />  {/* Add this route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
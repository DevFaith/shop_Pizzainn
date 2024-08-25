import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`
import Logo from '../assets/logo.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Config';
import { TiShoppingCart } from "react-icons/ti";
import { FaUser, FaTrashAlt } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Config';
import '../Styles/Navbar.css';

const Navbar = ({ cartItems, updateCartItemQuantity, deletecart }) => {
  const [user, setUser] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate(); // Use `useNavigate`

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (cred) => {
      if (cred) {
        const userDoc = await getDoc(doc(db, 'users', cred.uid));
        setUser({ name: userDoc.data().name });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    await signOut(auth);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Replace `history.push` with `navigate`
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='right'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contacts'>Contacts</Link>
        {user ? (
          <>
            <span className='user'>{user.name.charAt(0)}</span>
            <button onClick={logOut}>Logout</button>
          </>
        ) : (
          <Link to='/login'><FaUser /></Link>
        )}
        <div onClick={toggleCart}>
          <TiShoppingCart />
          {cartItems.length > 0 ? (
            <span className='cart-length'>{cartItems.length}</span>
          ) : (
            <span className='cart-length'>0</span>
          )}
        </div>
      </div>

      <div className={cartOpen ? 'cart-container active' : 'cart-container'}>
        <h2>Your Cart</h2>
        <ul className='cartitems'>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className='cartitem'>
                <img src={item.image} alt={item.name} />
                <div className='cartdetails'>
                  <span className='name'>{item.name}</span>
                  <span className='price'>${item.price}</span>
                  <div className='quantityControls'>
                    <button onClick={() => updateCartItemQuantity(item, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartItemQuantity(item, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => deletecart(item)} className='trash'><FaTrashAlt /></button>
              </li>
            ))
          ) : (
            <li>Your cart is empty</li>
          )}
        </ul>
        <div className='total'>
          <h3>Total Amount: ${calculateTotal()}</h3>
        </div>
        <button className='checkout' onClick={handleCheckout}>Checkout</button> {/* Navigate to Checkout */}
        <button className='close' onClick={toggleCart}>Close</button>
      </div>
    </div>
  );
};

export default Navbar;
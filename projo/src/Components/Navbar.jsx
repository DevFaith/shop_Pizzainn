import {React, useState, useEffect} from 'react'
import Logo from '../assets/logo.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/Config'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from 'react-icons/fa'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/Config'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged (async(cred) => {

     if (cred) {
      const user = await getDoc(doc (db, 'users', cred.uid))
      setUser({name : user.data().name})
     }

     else {
      setUser(null)
     }
    })
  }, [])
  const logOut = async () => {
   await signOut(auth) 
  }
const togglecart = () => {
  setCart(!cart)
}
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={Logo} alt="" />
        </div>
        <div className='right'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
            {user ? (<><span className='user'>{user.name.charAt(0)}</span> <button onClick={logOut}>Logout</button></>)  : (<Link to='/login'><FaUser /></Link>) }
            <TiShoppingCart onClick={togglecart}/>
           
            
        </div>
        {/* cart container */}
        <div className={cart? 'cart-container active' : 'cart-container'}>
          <h2>Your Cart</h2>
          <button onClick={togglecart}>close</button>
        </div>
    </div>
  )
}

export default Navbar
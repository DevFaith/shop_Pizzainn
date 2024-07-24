import {React, useState, useEffect} from 'react'
import Logo from '../assets/logo.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/Config'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged ((cred) => {
      console.log(cred);
    })
  })
  const logOut = async () => {
   await signOut(auth) 
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
            <Link to='/login'><FaUser /></Link>
            <button onClick={logOut}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
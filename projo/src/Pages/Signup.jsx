import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Auth.css';
import React, { useState } from 'react';
import { db, auth } from '../Firebase/Config';
import { doc, setDoc } from 'firebase/firestore';
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error,setError] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
     const result = await createUserWithEmailAndPassword(auth, email, password);
     const user = result.user.uid;
     await setDoc(doc(db, 'users', user), {
      name: Name,
      email: email
    })
    navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className='authContainer'>
        <h1>Sign Up</h1>
        <p>{error}</p>

        <form onSubmit={submit}>

            <label htmlFor="name">Name</label>
            <input type='text' placeholder='Enter name...' name="name" required
            onChange={(e) => setName(e.target.value)}/>
            
            <label htmlFor="email">Email</label>
            <input type='email' placeholder='Enter email...' name="email" required
            onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type='password' placeholder='Enter password...' name="password" required
            onChange={(e) => setPassword(e.target.value)}/>

            <button className='btn' >Sign Up</button>
            
            <button className='googleButton'><span><FcGoogle />Or signup with Google</span></button>

        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>

      
    </div>
  )
}

export default Signup

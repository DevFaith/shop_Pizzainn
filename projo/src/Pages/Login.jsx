import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Auth.css';
import React, { useState } from 'react';
import { auth } from '../Firebase/Config';
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate ('/');
    } catch (error) {
      setError (error.message);
    }
  };

  return (
    <div className='authContainer'>
      <h1>Login</h1>
      <p>{error}</p>

      <form onSubmit={submit} >
        <label htmlFor="email">Email</label>
        <input
          type='email'
          placeholder='Enter email...'
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type='password'
          placeholder='Enter password...'
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button >Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;

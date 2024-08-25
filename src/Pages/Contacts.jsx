import React from 'react'
import '../Styles/Contacts.css'

const Contacts = () => {
  return (
    <div className='contact'>
      <div className='leftSide'></div>
      <div className='rightSide'>
        <h1>Contact us</h1>
<form>
          <label htmlFor="name">Full Name</label>
          <input type='text' placeholder='Enter full name...' name="name"/>
          <label htmlFor="email">Email</label>
          <input type='email'placeholder='Enter email...' name="email"/>
          <label htmlFor="message"></label>
          <textarea name="message" rows="6" placeholder='Enter Message....'required></textarea>
          <button type='submit'>Send Message</button>
        </form>
</div>
    </div>
  )
}

export default Contacts
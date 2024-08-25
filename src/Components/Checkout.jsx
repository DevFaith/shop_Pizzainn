import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import '../Styles/Checkout.css';


const Checkout = () => {
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleOrder = () => {
    // Handle order processing here
    console.log('Order placed:', billingInfo);
    // Redirect or show order confirmation
  };

  return (
    <div className='checkout'>
      <h2>Billing Information</h2>
      <form>
        <div className='form-group'>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={billingInfo.fullName} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Address:</label>
          <input type="text" name="address" value={billingInfo.address} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>City:</label>
          <input type="text" name="city" value={billingInfo.city} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>State:</label>
          <input type="text" name="state" value={billingInfo.state} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Postal Code:</label>
          <input type="text" name="postalCode" value={billingInfo.postalCode} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={billingInfo.phoneNumber} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email" name="email" value={billingInfo.email} onChange={handleChange} required />
        </div>
        <button type="button" onClick={handleOrder}>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;

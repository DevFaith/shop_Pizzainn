import React from 'react';
import '../Styles/About.css'; // Assuming you're styling through CSS import

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Pizza Hut</h1>
      <p className="about-description">
        Welcome to Pizza Hut, where we serve up mouth-watering pizzas, delicious sides, and tasty desserts that have delighted pizza lovers for decades. Whether you're craving a classic Margherita, a spicy Pepperoni, or something more adventurous, our menu has something for everyone.
      </p>
      <p className="about-mission">
        Our mission is simple: to bring families and friends together over great food. We believe that every meal should be a celebration, and we’re here to make every occasion special. From dine-in to delivery, we’re committed to providing quality, convenience, and most importantly, happiness.
      </p>
      <p className="about-vision">
        At Pizza Hut, we don’t just make pizza – we create experiences. We strive to innovate and stay ahead of the curve, ensuring that every bite is as memorable as the last. Join us on our journey as we continue to serve up smiles one slice at a time!
      </p>
      <p className="about-thanks">
        Thank you for choosing Pizza Hut. We look forward to serving you!
      </p>
    </div>
  );
}

export default About;

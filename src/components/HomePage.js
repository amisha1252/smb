import React from 'react';
import './HomePage.css'; // Ensure this path is correct
import img1 from '../images/img1.png'; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="text-section">
        <h1>Welcome to ZapBILL</h1>
        <p>Manage your billing efficiently and effectively with our smart billing system.
        billing efficiently bill billing efficiently and effectively with our smart billing system.th our smart billing system. and effectively with our smart billing system.</p>
        <button className='btn'>
        sign up
      </button>
      </div>
      <div className="image-section">
        <img src={img1} alt="Billing System" />
      </div>
      
    </div>
  );
};

export default HomePage;

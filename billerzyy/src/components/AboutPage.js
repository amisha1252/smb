import React, { useState } from 'react';
import './AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className='main-abt'>
       <div className="about-page">
      <h1>About Us</h1>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection(0)}>
            Our Policies
          </button>
          <div className={`accordion-content ${activeSection === 0 ? 'active' : ''}`}>
            <p>
            Our policies are designed to ensure that our clients receive the best service and support. We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financiaOur policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support. We prioritize security, accuracy, and efficiency in all our operations.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection(1)}>
            Data Privacy
          </button>
          <div className={`accordion-content ${activeSection === 1 ? 'active' : ''}`}>
            <p>
              We adhere to strict data privacy regulations to protect your personal and financial infor We adhere to strict data privacy regulations to protect your personal and financial infor We adhere to strict data privacy regulationsOur policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support.Our policies are designed to ensure that our clients receive the best service and support. to protect your personal and financial infor We adhere to strict data privacy regulations to protect your personal and financial infor We adhere to strict data privacy regulations to protect your personal and financial information. Our systems are designed to secure your data against unauthorized access and misuse.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection(2)}>
            Customer Support
          </button>
          <div className={`accordion-content ${activeSection === 2 ? 'active' : ''}`}>
            <p>
            Our dedicated customer support team is available 24/7 to assist you with any queriur dedicated customer support team is available 24/7 to assist you with any queriur dedicated customer support team is available 24/7 to assist you with  We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia We adhere to strict data privacy regulations to protect your personal and financia you with any queries or issues. We strive to provide timely and effective solutions to ensure your satisfaction.
            `</p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default AboutPage;

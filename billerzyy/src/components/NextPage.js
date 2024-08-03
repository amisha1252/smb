import React, { useEffect, useRef } from 'react';
import './NextPage.css'; // Import the CSS file for styling
import invv from '../images/invv.png'
import exp from '../images/exp.png'
import img2 from '../images/img2.png'
const NextPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="next-page">
      <h1>Features of ZapBILL</h1>
      <div className="card-container">
        <div className="card" ref={(el) => cardsRef.current.push(el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={exp} alt="Feature 1" />
            </div>
            <div className="card-back">
              <h2>EXPENSE TRACKER</h2>
              <p>Auto-Categorization: Automatically categorize and track expenses.
Real-Time Monitoring: View expenses in real-time.
Custom Reports: Generate detailed expense reports.
Bank Integration: Sync with bank accounts for accurate tracking.</p>
            </div>
          </div>
        </div>
        <div className="card" ref={(el) => cardsRef.current.push(el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={img2} alt="Feature 2" />
            </div>
            <div className="card-back">
              <h2>INVOICE GENERATOR</h2>
              <p>Automated Invoices: Automatically create and send invoices.
Custom Templates: Use customizable templates for professional invoices.
Real-Time Tracking: Monitor invoice status and payments in real-time.
Integrated Payments: Include payment links for quick processing.</p>
            </div>
          </div>
        </div>
        <div className="card" ref={(el) => cardsRef.current.push(el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={invv} alt="Feature 3" />
            </div>
            <div className="card-back">
              <h2>INVENTORY MANAGEMENT</h2>
              <p>Real-Time Tracking: Monitor inventory levels instantly.
Automated Alerts: Get notified when stock is low.
Centralized Management: Manage inventory from one platform.
Insightful Reports: Access detailed reports for better planning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPage;












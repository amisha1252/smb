import React from 'react';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="sidebar">
      <div 
        className={`sidebar-item ${activeSection === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveSection('profile')}
      >
        Profile
      </div>
      <div 
        className={`sidebar-item ${activeSection === 'inventory' ? 'active' : ''}`}
        onClick={() => setActiveSection('inventory')}
      >
        Inventory Management
      </div>
      <div 
        className={`sidebar-item ${activeSection === 'invoices' ? 'active' : ''}`}
        onClick={() => setActiveSection('invoices')}
      >
        Invoices
      </div>
      <div 
        className={`sidebar-item ${activeSection === 'expense' ? 'active' : ''}`}
        onClick={() => setActiveSection('expense')}
      >
        Expense Tracker
      </div>
    </div>
  );
};

export default Sidebar;

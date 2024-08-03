// import React, { useState } from 'react';
// import './Dashboard.css';
// import Profile from './Profile';
// import Inventory from './Inventory';
// import Invoices from './Invoices';
// import ExpenseTracker from './ExpenseTracker';

// const Dashboard = () => {
//   const [activeSection, setActiveSection] = useState('profile');

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'profile':
//         return <Profile />;
//       case 'inventory':
//         return <Inventory />;
//       case 'invoices':
//         return <Invoices />;
//       case 'expense':
//         return <ExpenseTracker />;
//       default:
//         return <div>Work in Progress</div>; // Default message
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <ul>
//           <li className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>
//             Profile
//           </li>
//           <li className={activeSection === 'inventory' ? 'active' : ''} onClick={() => setActiveSection('inventory')}>
//             Inventory 
//           </li>
//           <li className={activeSection === 'invoices' ? 'active' : ''} onClick={() => setActiveSection('invoices')}>
//             Invoices
//           </li>
//           <li className={activeSection === 'expense' ? 'active' : ''} onClick={() => setActiveSection('expense')}>
//             Expense Tracker
//           </li>
//         </ul>
//       </div>
//       <div className="content">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className={`dashboard-container ${!sidebarVisible ? 'shifted' : ''}`}>
//       <div className={`sidebar ${!sidebarVisible ? 'hidden' : ''}`}>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {sidebarVisible ? 'Hide' : 'Show'}
//         </button>
//         <ul>
//           <li>
//             <Link to="/services/profile" className={location.pathname === '/services/profile' ? 'active' : ''}>Profile</Link>
//           </li>
//           <li>
//             <Link to="/services/inventory" className={location.pathname === '/services/inventory' ? 'active' : ''}>Inventory Management</Link>
//           </li>
//           <li>
//             <Link to="/services/invoices" className={location.pathname === '/services/invoices' ? 'active' : ''}>Invoices</Link>
//           </li>
//           <li>
//             <Link to="/services/expenses" className={location.pathname === '/services/expenses' ? 'active' : ''}>Expense Tracker</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="content">
//         <Outlet /> {/* Render the nested routes here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className={`dashboard-container ${!sidebarVisible ? 'shifted' : ''}`}>
//       <div className={`sidebar ${!sidebarVisible ? 'hidden' : ''}`}>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {sidebarVisible ? 'Hide' : 'Show'}
//         </button>
//         <ul>
//           <li>
//             <Link to="/services/profile" className={location.pathname === '/services/profile' ? 'active' : ''}>Profile</Link>
//           </li>
//           <li>
//             <Link to="/services/inventory" className={location.pathname === '/services/inventory' ? 'active' : ''}>Inventory Management</Link>
//           </li>
//           <li>
//             <Link to="/services/invoices" className={location.pathname === '/services/invoices' ? 'active' : ''}>Invoices</Link>
//           </li>
//           <li>
//             <Link to="/services/expenses" className={location.pathname === '/services/expenses' ? 'active' : ''}>Expense Tracker</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="content">
//         <Outlet /> {/* Render the nested routes here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   return (
//     <div className={`dashboard-container ${!sidebarVisible ? 'shifted' : ''}`}>
//       <div className={`sidebar ${!sidebarVisible ? 'hidden' : ''}`}>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {sidebarVisible ? 'Hide' : 'Show'}
//         </button>
//         <button className="close-btn" onClick={() => setSidebarVisible(false)}>
//           Close
//         </button>
//         <ul>
//           <li>
//             <Link to="/services/profile" className={location.pathname === '/services/profile' ? 'active' : ''}>Profile</Link>
//           </li>
//           <li>
//             <Link to="/services/inventory" className={location.pathname === '/services/inventory' ? 'active' : ''}>Inventory Management</Link>
//           </li>
//           <li>
//             <Link to="/services/invoices" className={location.pathname === '/services/invoices' ? 'active' : ''}>Invoices</Link>
//           </li>
//           <li>
//             <Link to="/services/expenses" className={location.pathname === '/services/expenses' ? 'active' : ''}>Expense Tracker</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="content">
//         <Outlet /> {/* Render the nested routes here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`dashboard-container ${!sidebarVisible ? 'shifted' : ''}`}>
      <div className={`sidebar ${!sidebarVisible ? 'hidden' : ''}`}>
        <ul>
          <li>
            <Link to="/services/profile" className={location.pathname === '/services/profile' ? 'active' : ''}>Profile</Link>
          </li>
          <li>
            <Link to="/services/inventory" className={location.pathname === '/services/inventory' ? 'active' : ''}>Inventory Management</Link>
          </li>
          <li>
            <Link to="/services/invoices" className={location.pathname === '/services/invoices' ? 'active' : ''}>Invoices</Link>
          </li>
          <li>
            <Link to="/services/expenses" className={location.pathname === '/services/expenses' ? 'active' : ''}>Expense Tracker</Link>
          </li>
       
        </ul>
        <ul>
          
        </ul>
        {/* Removed the separate hide button */}
      </div>
      <div className="content">
       
        <Outlet /> {/* Render the nested routes here */}
      </div>
      
    </div>
    
  );
};

export default Dashboard;

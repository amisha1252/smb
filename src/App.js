// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage'; // Assuming you have HomePage component
// import Dashboard from './components/Dashboard'; 
// import Inventory from './components/Inventory'; 
// import Profile from './components/Profile'; 
// import Invoices from './components/Invoices'; 
// import ExpenseTracker from './components/ExpenseTracker'; 
// import NextPage from './components/Page';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
      
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="inventory" element={<Inventory />} />
//           <Route path="invoices" element={<Invoices />} />
//           <Route path="expenses" element={<ExpenseTracker />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;





















// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Dashboard from './components/Dashboard';
// import WorkInProgress from './components/WorkInProgress';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<Dashboard />} />
//         <Route path="/work-in-progress" element={<WorkInProgress />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Dashboard from './components/Dashboard';
// import WorkInProgress from './components/WorkInProgress';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<Dashboard />} />
//         <Route path="/work-in-progress" element={<WorkInProgress />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Dashboard from './components/Dashboard';
// import InventoryManagement from './components/Inventory'; // Import InventoryManagement
// import Profile from './components/Profile';
// import Invoices from './components/Invoices';
// import ExpenseTracker from './components/ExpenseTracker';
// import NextPage from './components/Page';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/services" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="inventory" element={<InventoryManagement />} /> {/* Updated route */}
//           <Route path="invoices" element={<Invoices />} />
//           <Route path="expenses" element={<ExpenseTracker />} />
//         </Route>
//         <Route path="/nextpage" element={<NextPage />} /> {/* Add this if NextPage is needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import Dashboard from './components/Dashboard';
// import Inventory from './components/Inventory';
// import Profile from './components/Profile';
// import Invoices from './components/Invoices';
// import ExpenseTracker from './components/ExpenseTracker';
// import NextPage from './components/NextPage';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="./NextPage" element={<NextPage />} />
//         <Route path="/services" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="inventory" element={<Inventory />} />
//           <Route path="invoices" element={<Invoices />} />
//           <Route path="expenses" element={<ExpenseTracker />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Profile from './components/Profile';
import Invoices from './components/Invoices';
import ExpenseTracker from './components/ExpenseTracker';
import NextPage from './components/NextPage'; // Import NextPage
import AboutPage from './components/AboutPage'; 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />       {/* Home page */}
        <Route path="/features" element={<NextPage />} />  
        <Route path="/AboutPage" element={<AboutPage />} />  
         {/* Next page */}
        <Route path="/services" element={<Dashboard />}> {/* Dashboard with nested routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="expenses" element={<ExpenseTracker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

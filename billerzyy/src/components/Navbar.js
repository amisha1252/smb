// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <ul className='nav-links'>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#About">About</a></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><a href="#Contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;











import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a></li>
        <li><Link to="/features">features</Link></li>
        <li><Link to="/AboutPage">AboutPage</Link></li>
        
        {/* <li><a href="#features" onClick={(e) => { e.preventDefault(); window.location.href = '/NextPage'; }}>Features</a></li> */}
        <li><Link to="/services">Services</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;

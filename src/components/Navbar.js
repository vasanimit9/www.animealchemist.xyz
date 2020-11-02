import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <button className='btn btn-action' onClick={props.toggleSidebar}>
        <span className='sr-only'>Toggle Sidebar</span>
        <i className='fas fa-bars'></i>
      </button>
      <span className='navbar-brand carter-one'>
        {props.brand}
      </span>
    </nav>
  );
}

export default Navbar;
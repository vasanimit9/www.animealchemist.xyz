import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar justify-content-between'>
      <button className='btn btn-action' onClick={props.toggleSidebar}>
        <span className='sr-only'>Toggle Sidebar</span>
        <i className='fas fa-bars'></i>
      </button>
      <span className='navbar-brand carter-one m-0'>
        {props.brand}
      </span>
      <button className='btn btn-action' onClick={props.toggleDarkMode}>
        <span className='sr-only'>Toggle Dark Mode</span>
        {
          props.darkModeOn ?
            (
              <i className='fas fa-sun'></i>
            ) :
            (
              <i className='fas fa-moon'></i>
            )
        }
      </button>
    </nav>
  );
}

export default Navbar;
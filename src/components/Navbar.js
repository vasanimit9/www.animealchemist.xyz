import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar justify-content-between justify-content-md-start'>
      <button className='btn btn-action hidden-sm-and-down' onClick={props.toggleSidebar}>
        <i className='fas fa-bars'></i>
      </button>
      <span className='navbar-brand carter-one'>
        {props.brand}
      </span>
      <button className='btn hidden-md-and-up mr-10' onClick={props.toggleSidebar}>
        <i className='fas fa-bars'></i> Menu
      </button>
    </nav>
  );
}

export default Navbar;
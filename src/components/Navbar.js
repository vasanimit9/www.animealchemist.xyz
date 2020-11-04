import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <button className='btn btn-action' onClick={props.toggleSidebar}>
        <i className='fas fa-bars'></i>
      </button>
      <div className='navbar-brand carter-one'>
        {props.brand}
      </div>
    </nav>
  );
}

export default Navbar;
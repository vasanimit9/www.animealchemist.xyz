import React from 'react';

const Sidebar = (props) => {

  return (
    <div className='sidebar'>
      {props.pages.map((page, index) => {
        let classList = [
          'sidebar-link',
          'sidebar-link-with-icon'
        ];
        if (index === props.currentPageIndex) {
          classList.push('active');
        }
        return (
          <a
            key={index}
            className={classList.join(' ')}
            href='#link'
            onClick={event => props.updatePageIndex(event, index)}
          >
            <span className='sidebar-icon'>
              {page.icon}
            </span>
            <strong>
              {page.name}
            </strong>
          </a>
        );
      })}
      <div className='sidebar-link mt-5'>
        <div className='custom-switch'>
          <input type='checkbox' id='darkMode'
            checked={props.darkModeOn}
            onChange={props.toggleDarkMode} />
          <label for='darkMode'>Dark Mode</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
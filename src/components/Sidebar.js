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
    </div>
  );
}

export default Sidebar;
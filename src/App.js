import React, { useEffect, useState } from 'react';
import halfmoon from 'halfmoon';
import 'halfmoon/css/halfmoon.min.css';

import canUseWEBP from './webpSupport';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Quotes from './components/Quotes';
import News from './components/News';
import About from './components/About';

const App = () => {

  const canUseWebP = canUseWEBP();
  const pages = [
    {
      name: 'Home',
      icon: <i className='fas fa-home'></i>,
      component: <Quotes webp={canUseWebP} />
    },
    {
      name: 'News',
      icon: <i className='fas fa-newspaper'></i>,
      component: <News />
    },
    {
      name: 'About',
      icon: <i className='fas fa-info'></i>,
      component: <About />
    },
  ];

  // states
  const [darkModeOn, updateDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [sidebarOpen, updateSidebar] = useState(
    window.innerWidth >= 576
  );
  const [currentPageIndex, updateCPI] = useState(0);

  // effects
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);
  useEffect(() => {
    if (darkModeOn) {
      document.querySelector('body').classList.add('dark-mode');
    } else {
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [darkModeOn]);
  useEffect(() => {
    if (sidebarOpen) {
      document.querySelector('.page-wrapper')
        .removeAttribute('data-sidebar-hidden');
    } else {
      document.querySelector('.page-wrapper')
        .setAttribute('data-sidebar-hidden', 'hidden');
    }
  }, [sidebarOpen]);

  // handlers and methods
  const toggleDarkMode = () => updateDarkMode(!darkModeOn);
  const toggleSidebar = () => updateSidebar(!sidebarOpen);
  const updatePageIndex = (event, index) => {
    event.preventDefault();
    updateCPI(index);
  }

  return (
    <div className='page-wrapper with-navbar with-sidebar open-sans'>
      <Navbar
        darkModeOn={darkModeOn}
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
        brand={'AnimeAlchemist'}
      />
      <Sidebar
        pages={pages}
        currentPageIndex={currentPageIndex}
        updatePageIndex={updatePageIndex}
      />
      <div className='content-wrapper'>
        {pages.map((page, index) => {
          let display = (
            index === currentPageIndex ?
              'block' :
              'none'
          );
          return (
            <span style={{ display: display }} key={index}>
              {page.component}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import React, { Fragment, useEffect, useState } from 'react';
import halfmoon from 'halfmoon';
import 'halfmoon/css/halfmoon.min.css';
import Axios from 'axios';

import './App.css';
import NewsCard from './components/NewsCard';

const App = () => {

  // states
  const [darkMode, updateDarkMode] = useState(
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [newsList, updateNewsList] = useState([]);

  // effects
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    fetchNews();
  });
  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    }
    else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // handlers
  const fetchNews = () => {
    Axios.get('/api/news')
      .then(res => res.data)
      .then(data => updateNewsList(data))
      .catch(e => console.error("Couldn't fetch news.\n", e));
  }

  return (
    <div className='page-wrapper with-navbar'>
      <nav className='navbar shadow justify-content-between'>
        <span className='navbar-brand'>
          <img className='m-0' src='logo.png' alt='logo' />nime
          <img className='m-0' src='logo.png' alt='logo' />lchemist
        </span>
        <div className='nav-content'>
          <button className='btn btn-primary mr-20' id='installButton'
            style={{display: 'none'}}>
            <span className='sr-only'>
              Install
          </span>
            <i className='fas fa-download'></i>
          </button>
          <button className='btn' onClick={() => updateDarkMode(!darkMode)}>
            <span className='sr-only'>Toggle Dark Mode</span>
            {
              darkMode ?
                (<i className='fas fa-sun'></i>) :
                (<i className='fas fa-moon'></i>)
            }
          </button>
        </div>
      </nav>
      <div className='content-wrapper'>
        <div className='container-fluid'>
          <div className='row hidden-sm-and-down'>
            <div className='col-4'>
              {newsList.map((newsItem, index) => {
                if (index % 3 === 0)
                  return (
                    <NewsCard item={newsItem} key={index} />
                  );
                return <Fragment key={index} />
              })}
            </div>
            <div className='col-4'>
              {newsList.map((newsItem, index) => {
                if (index % 3 === 1)
                  return (
                    <NewsCard item={newsItem} key={index} />
                  );
                return <Fragment key={index} />
              })}
            </div>
            <div className='col-4'>
              {newsList.map((newsItem, index) => {
                if (index % 3 === 2)
                  return (
                    <NewsCard item={newsItem} key={index} />
                  );
                return <Fragment key={index} />
              })}
            </div>
          </div>
          <div className='row hidden-md-and-up'>
            <div className='col-12'>
              {newsList.map((newsItem, index) => (
                <NewsCard item={newsItem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

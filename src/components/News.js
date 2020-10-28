import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {

  // states
  const [newsList, updateNewsList] = useState([]);

  // effects
  useEffect(() => {
    fetchNews();
    setInterval(() => {
      fetchNews();
    }, 900000);
  }, []);

  // functions
  const fetchNews = () => {
    axios.get('/api/news')
      .then(res => res.data)
      .then(data => updateNewsList(data))
      .catch(err => console.error(err));
  }

  return (
    <div className='container'>
      <div className='row'>
        {newsList.map((news, index) => (
          <div className='col-md-4' key={index}>
            <div className='card h-200'>
              <div className='card-title mb-10'>
                {news.feed_provider}
              </div>
              {news.title}<br />
              <a href={news.link} alt='article-link'
                target='_blank' rel='noopener noreferrer'>
                Read
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
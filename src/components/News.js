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
    axios.get('/api/news?t=' + Date.now())
      .then(res => res.data)
      .then(data => updateNewsList(data))
      .catch(err => console.error(err));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='offset-md-4 col-md-4'>
          <div className='card text-center'>
            <div className='card-title'>
              Anime News
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        {newsList.map((news, index) => (
          <div className='col-lg-4 col-md-6' key={index}>
            <div className='card'>
              <div className='card-title mb-10'>
                {news.feed_provider}
              </div>
              <div className='h-100 mb-10 d-flex align-content-center'>
                <span className='align-self-center align-middle'>{news.title}</span>
              </div>
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
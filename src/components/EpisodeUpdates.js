import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeUpdates = () => {

  // states
  const [updates, updateUpdates] = useState([]);

  // effects
  useEffect(() => {
    fetchUpdates();
    setInterval(fetchUpdates, 900000);
  }, []);

  // methods
  const fetchUpdates = () => {
    axios.get('/api/time_table?t=' + Date.now())
      .then(res => res.data)
      .then(data => updateUpdates(data))
      .catch(console.error);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='card m-10 text-center'>
            <div className='card-title'>
              Anime Updates
            </div>
            Powered by&nbsp;
            <a
              href='https://livechart.me/'
              target='_blank'
              rel='noopener noreferrer'
              alt='Livechart url'
            >
              livechart.me
            </a>
          </div>
        </div>
      </div>
      <div className='row'>
        {updates.map((update, index) => (
          <div className='col-md-4 col-12' key={index}>
            <div className='row card m-15'>
              <div
                className='col-5 d-flex align-items-center'
                style={{ height: '175px' }}>
                <img
                  src={
                    update.media_thumbnail[0].url !== '' ?
                      update.media_thumbnail[0].url :
                      'logo.png'
                  }
                  style={{ width: '100%' }}
                  alt='anime cover'
                />
              </div>
              <div className='col-7 p-10 text-center d-flex align-items-center'
                style={{ height: '175px' }}>
                {update.title}
                <br />
                &nbsp;
                <br />
                {update.published.split('+').join('UTC+')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeUpdates;
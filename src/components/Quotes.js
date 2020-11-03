import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quotes = (props) => {

  const ext = (props.webp ? 'webp' : 'png')

  // state
  const [currentImg, updateImg] = useState('./logo.png');

  // effects
  useEffect(() => {
    axios.get('/api/last_quote?t=' + Date.now())
      .then(res => res.data)
      .then(data => updateImg(data + '/image.' + ext))
      .catch(err => console.error(err));
  }, [ext]);

  // methods
  const getRandomImage = () => axios.get('/api/random_quote?t=' + Date.now())
    .then(res => res.data)
    .then(data => updateImg(data + '/image.' + ext))
    .catch(err => console.error(err));

  const convertExtToPNG = (image) => image.split('.')[0] + '.png';

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 offset-lg-3
          col-md-8 offset-md-2 p-10 text-center'>
          <img
            src={currentImg}
            alt='quote'
            style={{ width: '100%' }}
            className='card mx-0 mt-0 p-0 mb-10'
          />
          <button
            className='btn mx-5 w-150 btn-primary'
            onClick={getRandomImage}
          >
            Random <i className='fas fa-random'></i>
          </button>
          <a
            className='btn mx-5 w-150 btn-primary'
            href={convertExtToPNG(currentImg)}
            alt='download'
            rel='noopener noreferrer'
            download
          >
            Download <i className='fas  fa-download'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
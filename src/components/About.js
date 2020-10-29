import React, { useEffect, useRef } from 'react';

const About = () => {

  // refs
  const installCard = useRef();

  // effects 
  useEffect(() => {
    setInterval(() => {
      if (window.installPWA) {
        installCard.current.style.display = 'block';
      } else {
        installCard.current.style.display = 'none';
      }
    }, 1000);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-title'>
              About me
            </div>
            <p>
              I'm Mit. You can find more about me on&nbsp;
              <a href='https://vasanimit9.github.io'
                target='_blank'
                rel='noopener noreferrer'
                alt='portfolio'
              >
                vasanimit9.github.io
              </a>.
            </p>
          </div>
        </div>
      </div>
      <div
        className='row'
        ref={installCard}
      >
        <div className='col-md-6 offset-md-3' >
          <div className='card'>
            <div className='card-title'>
              Add to Home Screen
            </div>
            <p>
              You can install this website as a PWA.<br />
              <a
                href='#install'
                onClick={event => {
                  event.preventDefault();
                  window.installPWA();
                }}
                alt='install'
              >
                Install
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
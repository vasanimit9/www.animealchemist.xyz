import React from 'react';

const About = () => {
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
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
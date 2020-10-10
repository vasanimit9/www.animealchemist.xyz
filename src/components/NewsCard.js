import React, { useEffect, useRef } from 'react';

const NewsCard = (props) => {

  // refs
  const imgRef = useRef();

  // effects 
  useEffect(() => {
    if (props.item.image === '') {
      imgRef.current.setAttribute('src', 'logo.png');
    }
    else {
      imgRef.current.setAttribute('src', props.item.image);
    }
  }, [props.item.image]);

  return (
    <div className='card p-0 shadow'
    onClick={() => window.open(props.item.link, '_blank')}>
      <img src='logo.png'
        className='rounded-top'
        alt='Article img'
        ref={imgRef}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '300px'
        }} />
      <div className='content'>
        <div className='content-title'>
          {props.item.heading}
        </div>
        <hr />
        <div>
          {props.item.news_provider}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
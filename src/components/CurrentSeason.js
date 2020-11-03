import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentSeason = () => {

  // state
  const [animeList, updateAnimeList] = useState([]);

  // effects
  useEffect(() => {
    fetchCurrentSeason();
    setInterval(fetchCurrentSeason, 1200000);
  }, []);

  // methods
  const fetchCurrentSeason = () => {
    axios.get('/api/current_season?t=' + Date.now())
      .then(res => res.data)
      .then(data => {
        data.sort((a, b) => {
          return (
            - (new Date(a.airing_start)).getTime()
            + (new Date(b.airing_start)).getTime()
          )
        });
        return data
      })
      .then(data => updateAnimeList(data))
      .catch(console.error)
  }

  const AnimeCard = ({ anime }) => (
    <div className='card p-25 text-center'>
      <div
        className='d-flex align-items-center mx-auto mb-20'
        style={{
          height: '250px',
          width: '140px'
        }}
      >
        <img
          src={anime.image_url}
          alt='anime cover'
          style={{
            width: '100%'
          }} />
      </div>
      <div
        alt={anime.title}
        className='w-full text-truncate'
        style={{
          fontSize: '1.75rem'
        }}
      >
        {anime.title}
      </div>
      <br />
      <span>MAL:&nbsp;</span>
      {
        anime.score != null ?
          anime.score :
          'NA'
      }
      <br />
      <span>Air date:&nbsp;</span>
      {
        anime.airing_start != null ?
          anime.airing_start.split('T')[0] :
          'NA'
      }
      <br />
    </div>
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 col-lg-4'></div>
        <div className='col-md-6 col-lg-4'>
          <div className='card m-5 text-center'>
            <div className='card-title'>
              Ongoing Anime
            </div>
            <span>
              Of the current season
            </span>
            <hr />
            <span>
              Powered by&nbsp;
              <a
                href='https://jikan.moe'
                target='_blank'
                rel='noopener noreferrer'
                alt='jikan'
              >
                Jikan
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        {animeList.map((anime, index) => {
          if (!anime.r18) {
            return (
              <div className='col-lg-4 col-md-6' key={index}>
                <AnimeCard anime={anime} />
              </div>
            );
          } else {
            return <span key={index}></span>;
          }
        })}
      </div>
    </div>
  );
}

export default CurrentSeason;
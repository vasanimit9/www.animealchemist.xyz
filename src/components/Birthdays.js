import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Birthdays = () => {

  // refs
  const monthRef = useRef();
  const dateRef = useRef();

  // states
  const [date, updateDate] = useState({
    mm: (new Date()).getMonth() + 1,
    dd: (new Date()).getDate()
  });
  const [birthdayList, updateBirthdays] = useState({
    birth_date: null,
    characters: []
  });

  // effects
  useEffect(() => {
    monthRef.current.innerHTML = '';
    monthRef.current.innerHTML +=
      '<option style="display: none">Month</option>';
    for (let i of Array(12).keys()) {
      monthRef.current.innerHTML
        +=
        "<option value='" + (i + 1) + "'>" + (i + 1) + "</option>";
    }
    dateRef.current.innerHTML = '';
    dateRef.current.innerHTML +=
      '<option style="display: none">Date</option>';
    for (let i of Array(31).keys()) {
      dateRef.current.innerHTML
        +=
        "<option value='" + (i + 1) + "'>" + (i + 1) + "</option>";
    }
    fetchBirthdays(date);
  }, [monthRef, dateRef, date]);

  // methods
  const fetchBirthdays = (date) => {
    axios.get('/api/birthdays/' + date.mm + '/' + date.dd + '?t=' + Date.now())
      .then(res => res.data)
      .then(data => {
        if (data !== -1) {
          updateBirthdays(data);
        }
        else {
          updateBirthdays({
            birth_date: null,
            characters: []
          });
        }
        updateDate(date);
      })
      .catch(console.error);
  }

  const BirthdayCard = (props) => (
    <div className='card'>
      <div className='row'>
        <div className='col-12 text-center'>
          <img
            src={props.character.character_image}
            style={{
              minWidth: '150px',
            }}
            alt='character'
          />
        </div>
        <div className='col-12 h-50 text-center pb-10'>
          <span style={{ fontSize: '1.6rem' }}>{props.character.name}</span>
          <br />
          {props.character.origin.split('').splice(0, 50).join('')}
          {props.character.origin.length > 50 ? '...' : null}
        </div>
      </div>
    </div>
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 col-lg-4'></div>
        <div className='col-md-6 col-lg-4'>
          <div className='card mx-15 text-center'>
            <div className='card-title mb-5'>
              Powered by&nbsp;
            <a
                href='https://www.animecharactersdatabase.com/'
                target='_blank'
                rel='noopener noreferrer'
                alt='Anime Characters Database'
              >
                ACDB
            </a>
            </div>
            <div className='row mb-5'>
              <div className='col-5 pr-10'>
                <select className='form-control' ref={monthRef}>
                </select>
              </div>
              <div className='col-5 pr-10'>
                <select className='form-control' ref={dateRef}>
                </select>
              </div>
              <div className='col-2'>
                <button
                  className='btn btn-primary w-full'
                  onClick={() => {
                    updateDate({
                      mm: monthRef.current.value,
                      dd: dateRef.current.value,
                    });
                  }}
                >
                  <i className='fas fa-chevron-right'></i>
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                {birthdayList.birth_date}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        {birthdayList.characters.map((character, index) => (
          <div className='col-md-6 col-lg-4' key={index}>
            <BirthdayCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Birthdays;
import React from 'react';
import {useEffect, useState} from 'react';
const key = '7xAWzkjCCFHcghBOlvkimEL6oxuzyF9qJaNNKGht';
const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;


const Nasa = () => {
  const [info, setInfo] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
    
  const initInfo = async () => {
    const url = `${baseURL}?${long}&${lat}&api_key=${key}`

    fetch(url)
    .then(res => res.json())
    .then(data => setInfo(data))
    .catch(err => console.log(err))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    initInfo();
};

  
  useEffect(() => {
     initInfo(); 
  })

  return (
    <div className='main'>
      <div className='mainDiv'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Input longitude</span>
          <input type='float' name='longitude' onSubmit={setLong} required></input>
          <br />
          <span>Input latitude</span>
          <input type='float' name='latitude' onSubmit={setLat} required></input>
          <br />
          <button className='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};


// export default Nasa;
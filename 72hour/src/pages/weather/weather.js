import React from 'react';
import {useEffect, useState } from 'react';

const Weather = () => {
  const apiKey = '709b4d67be69a88a41a25cb2e37c43b5' ;
  
  const [location, setLocation] = useState('');
  const [degrees, setDegrees] = useState('');
  const [temp, setTemp] = useState('');
  const [forecast, setForecast] = useState('');
  const [today, setToday] = useState('');
  


  useEffect (() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid=709b4d67be69a88a41a25cb2e37c43b5")
   .then(res => {
      res.json();
      console.log(res.url);
      fetch(res.url)
      .then(res=> console.log(res.json()))
  
   
 
    
   
   }
   );
   

}, []);
 return(
  <div>
  
        </div>
     )
   } 

   export default Weather;
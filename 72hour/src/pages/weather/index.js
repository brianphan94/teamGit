import {useEffect, useState} from 'react';

const Weather = () => { 
  const [info, setInfo] = useState();
    const url = "api.openweathermap.org/data/2.5/weather?q=Indianapolis&appid={709b4d67be69a88a41a25cb2e37c43b5}";
    
  const initInfo = async () => {
   const response = await fetch(url, {
       headers: {
           'Content-Type': 'application/json',
       },
   });
 const json = await response.json();
 setInfo(json);
};
  
useEffect(() => {
     initInfo(); 
  });   
    return (
        <div>
           {info&&info?.results.map((weather) => {
               return (
                   <div>
                    <h2>{weather.main}</h2>
                    </div>
     );
           })}

    </div>
    );
};



export default Weather;
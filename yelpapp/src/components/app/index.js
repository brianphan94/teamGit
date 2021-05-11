
import './styles.scss';

import {useEffect, useState} from 'react';


const App = () => {

  const [data, setData] = useState();
  const url= 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete/'
  const initData = async () => {
   
    const response = await fetch(url, {
      headers: {
        Authorization:'Bearers AtTFds-n5sze9A3wI6KpSOCnPnOODl-cdMqBJ7WWTX4UQMPuX2dlxW7Putt1tzYGtQnEL4gtAloptSlfdlApOsgZUHlx3vSkqhH7ZpQtTDxPozNmfUASB4mOx4OaYHYx',
    
      },
    });
    const json = await response.json();
    setData(json)
    console.log(json);

    setData(json); 
  };

  useEffect(() => {
   initData();
  });

  return <div className="App">
    
    {data && data.terms.map(autocomplete => {
      return(
      <div> 
        <h3>{autocomplete.businesses}</h3>
        </div>
        );
    })
    }
  </div>
  ;
};


export default App;

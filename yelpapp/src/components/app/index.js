
import './styles.scss';

import {useEffect, useState} from 'react';


const App = () => {

  const [data, setData] = useState();
  const url= 'https://api.yelp.com/v3/autocomplete/'
  const initData = async () => {
   
    const response = await fetch(url, {
      headers: {
        Bearers: YqvoyaNvtoC8N5dA8pD2JA
        'Conotent-Type': "application/json",
      },
    });
    const json = await response.json();
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

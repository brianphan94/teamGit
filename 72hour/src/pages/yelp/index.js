import './styles.scss';

import {useEffect, useState} from 'react';


const Yelp = () => {
  const [data, setData] = useState();
  const url= 'https://api.yelp.com/v3/autocomplete/'
  const initData = async () => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    setData(json); 
  };

  useEffect(() => {
   initData();
  });

  return <div className="Yelp">
    
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


export default Yelp;
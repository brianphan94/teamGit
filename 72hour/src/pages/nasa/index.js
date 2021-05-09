import {useEffect, useState} from 'react';

const Nasa = () => { 
  const [info, setInfo] = useState();
    const url = "https://api.nasa.gov/planetary/earth/imagery";
    
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
           {info && info.results.map((nasa) => {
               return (
                   <div>
                    <h2>{nasa.image}</h2>
                    </div>
     );
           })}

    </div>
    );
};



export default Nasa;
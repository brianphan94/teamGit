
import React from 'react';
import './App.scss';
import Title from '../../components/weather/title';
import Input from '../../components/weather/inputs';
import Weather from '../../components/weather/weather';






const App = () => {
  
    return(
      <div>
      <Title />
      <Input />
      <Weather />
    </div>
    )
}
  
 


export default App;
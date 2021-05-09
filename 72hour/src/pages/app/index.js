import './App.scss';


import Nasa from '../nasa';
import Weather from '../weather';
  
  

const App = () => {
  return (
    <div className="Api">
      <Nasa />
      <Weather />
    </div>
  )
    
};

export default App;

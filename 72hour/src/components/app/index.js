import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Sidebar from '../Sidebar';

  
  

const App = () => {
  return (
    <div className='div'>
      <Router>
        <Sidebar />
      </Router>
    </div>
  )
    
};

export default App;
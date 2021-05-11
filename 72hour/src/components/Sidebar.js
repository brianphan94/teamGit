import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Nasa from '../pages/nasa/Nasa';
import Yelp from '../pages/yelp/index';
import WeatherApp from '../pages/weather/weatherApp';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/nasa'>Nasa</Link></li>
                <li><Link to='/yelp'>Yelp</Link></li>
                <li><Link to='/weather'>Weather</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/nasa'><Nasa /></Route>
                    <Route exact path='/yelp'><Yelp /></Route>
                    <Route exact path='/weather'><WeatherApp /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;
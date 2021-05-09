import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './app/Home';
import Nasa from '../pages/nasa/Nasa';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/nasa'>Nasa</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/nasa'><Nasa /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;
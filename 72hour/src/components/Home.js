import React from 'react';
import Logo from '../logo.svg';

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>HOME FOR REACT APP</h1>
                <h2>Created by: Brian, Rachel, and Janay</h2>
                <img src={Logo} />
            </div>
        </div>
    )
}


export default Home;
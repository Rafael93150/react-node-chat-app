import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <h1>Free Online Chat With No Registration</h1>
            <p>
                This web site is an online free chat. <br/>
                With him, you can meet new friends from all over the world. For that, u dont need to registrate or download the application. <br/>
            </p>
            <div className="home-mobile">
                <h3>Mobile</h3>
                <p>This web site also supports mobile, so you can chat from where u want. </p>
            </div>
                He was developped to learn React and NodeJS basics.
            
            <NavLink className="button" to="/chat">
                Start Chat Now
            </NavLink>
        </div>
        
    );
};

export default Home;
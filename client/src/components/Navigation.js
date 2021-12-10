import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className='first-link' to="/">
                Home
            </NavLink>
            <NavLink to="/chat">
                Chat
            </NavLink>
        </div>
    )
};

export default Navigation;
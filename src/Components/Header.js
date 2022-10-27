import React from 'react';

import { Link } from 'react-router-dom';

import './Header.modules.css';

export default function Header() {
    return (
       <div>
        <header>
            <img src="logo.svg" alt="" />
            <nav>
                <ul>
                    <Link to="/">00 Home</Link>
                    <Link to="/Destination">01 Destination</Link>
                    <Link to="/Crew">02 Crew</Link>
                    <Link to="/Technology">03 Technology</Link>
                </ul>
            </nav>
        </header>
       </div>
    );
}
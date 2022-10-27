import React from 'react';

import Logo from '../imagens/logo.svg';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
       <div>
        <header>
        <img src={ Logo } />
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
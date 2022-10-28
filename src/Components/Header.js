import React from 'react';
import { Component } from 'react';
import Logo from '../imagens/logo.svg';
import { Link } from 'react-router-dom';
import { Cabeça, Ul} from '../Styles/Styles';


export default function Header() {
    return (
       <div>
        <Cabeça>
        <img src={ Logo } />
            <nav>
                <Ul>
                    <Link to="/">00 Home</Link>
                    <Link to="/Destination">01 Destination</Link>
                    <Link to="/Crew">02 Crew</Link>
                    <Link to="/Technology">03 Technology</Link>
                </Ul>
            </nav>
        </Cabeça>
       </div>
    );
}
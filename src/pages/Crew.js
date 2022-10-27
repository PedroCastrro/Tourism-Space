import React from 'react';
import Header from '../Components/Header';
import background from "../imagens/background-crew-desktop.jpg";

export default function Crew() {
    return (
        <div style={{ backgroundImage: `url(${background})`,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <Header />
            <h1>Crew</h1>
        </div>
    );
}
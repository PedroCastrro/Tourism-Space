import React from 'react';
import Header from '../Components/Header';
import background from "../imagens/background-destination-desktop.jpg";

export default function Destination() {
    return (
        <div style={{ backgroundImage: `url(${background})`,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <Header />
            <body>
        <main>
          <h2>01 Pick your destination</h2>
        </main>
        <aside>
        </aside>
      </body>
        </div>
    );
}
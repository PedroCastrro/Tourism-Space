import React from 'react';
import Header from '../Components/Header';
import background from "../imagens/background-home-desktop.jpg";

export default function Home() {
  return (
      <div style={{ backgroundImage: `url(${background})`,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' } }>
        <Header />
      <body>
        <main>
          <h3> So, you want to travel to</h3>
          <h2>Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore{' '}
          </p>
        </main>

        <aside>
          <h2>Explorer</h2>
        </aside>
      </body>
      </div>
        
  )
}

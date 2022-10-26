import React from 'react';

import './Home.modules.css';

import Header from '../Components/Header';

export default function Home() {
  return (
    <div>
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

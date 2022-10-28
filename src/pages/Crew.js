import React from 'react'
import Header from '../Components/Header'
import Ansari from '../imagens/image-anousheh-ansari.png'
import background from '../imagens/background-crew-desktop.jpg'

import {} from '../Styles/Styles'

export default function Crew() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <body>
        <main>
          <h2>02 Meet your crew</h2>
          <h3>Flight Engineer</h3>
          <h3>Anousheh Ansari</h3>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-
            <br />
            founder of Prodea Systems. Ansari was the fourth self-
            <br />
            funded space tourist, the first self-funded woman to fly
            <br />
            to the ISS, and the first Iranian in space.
          </p>
          <section>

          </section>
        </main>
        <aside>
            <img src={Ansari} alt="" />
        </aside>
      </body>
    </div>
  )
}

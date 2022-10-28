import React from 'react'
import Header from '../Components/Header'
import Ansari from '../imagens/image-anousheh-ansari.png'
import background from '../imagens/background-crew-desktop.jpg'

import {Body2, Main2, H5, H6, H7, P4, Divisao, Divisao1, Divisao2, Divisao3, Section2, Aside2, Img1} from '../Styles/Styles'

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
      <Body2>
        <Main2>
          <H5>02 Meet your crew</H5>
          <H6>Flight Engineer</H6>
          <H7>Anousheh Ansari</H7>
          <P4>
            Anousheh Ansari is an Iranian American engineer and co-
            <br />
            founder of Prodea Systems. Ansari was the fourth self-
            <br />
            funded space tourist, the first self-funded woman to fly
            <br />
            to the ISS, and the first Iranian in space.
          </P4>
          <Section2>
            <Divisao></Divisao>
            <Divisao1></Divisao1>
            <Divisao2></Divisao2>
            <Divisao3></Divisao3>
          </Section2>
        </Main2>

        <Aside2>
            <Img1 src={Ansari} alt="" />
        </Aside2>
      </Body2>
    </div>
  )
}

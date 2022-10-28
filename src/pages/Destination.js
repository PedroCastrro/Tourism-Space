import React from 'react'
import Header from '../Components/Header'
import Mars from '../imagens/image-mars.png'

import background from '../imagens/background-destination-desktop.jpg'

import { H2, Body1, Main1, Img, Aside1, Li , Li1, H1, P1, H3, P2, H4, P3, Section, Section1} from '../Styles/Styles'

export default function Destination() {
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
      <Body1>
        <Main1>
          <H2>01 Pick your destination</H2>
          <Img src={Mars} alt="" />
        </Main1>
        <Aside1>
          <ul>
            <Li>moon</Li>
            <Li1>mars</Li1>
            <Li>europa</Li>
            <Li>titan</Li>
          </ul>
          <H1>mars</H1>
          <P1>
            Don’t forget to pack your hiking boots. You’ll need them<br/>
            to tackle Olympus Mons, the tallest planetary mountain in<br />
            our solar system.It’s two and a half times the size of<br />
            Everest!
          </P1>
          <Section>
          <H3>Avg. distance</H3>
          <P2>225 mil. km</P2>
          </Section>
          <Section1>
          <H4>Est. travel time</H4>
          <P3>9 months</P3>
          </Section1>
          
        </Aside1>
      </Body1>
    </div>
  )
}

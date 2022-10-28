import React from 'react'
import Header from '../Components/Header'
import background from '../imagens/background-technology-desktop.jpg'
import Veiculo from '../imagens/image-launch-vehicle-portrait.jpg'

import { Body3, Main3, H8, Section3, Section4, Img2, H9, H10, P5 ,Li2, Li3, Li4, UL2} from '../Styles/Styles';

export default function Technology() {
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
      <Body3>
        <Main3>
          <H8>03 Space launch 101</H8>
          <Section3>
            <UL2>
              <Li2>1</Li2>
              <Li3>2</Li3>
              <Li4>3</Li4>
            </UL2>
          </Section3>
          <Section4>
            <H9>The terminology...</H9>
            <H10>Launch vehicle</H10>
            <P5>
              A launch vehicle or carrier rocket is a rocket-propelled
              <br />
              vehicle used to carry a payload from Earth's surface to
              <br />
              space, usually to Earth orbit or beyond. Our WEB-X
              <br />
              carrier rocket is the most powerful in operation.
              <br />
              Standing 150 metres tall, it's quite an awe-inspiring sight
              <br />
              on the launch pad!
            </P5>
          </Section4>
        </Main3>
        <aside>
            <Img2 src={ Veiculo } alt="" />
        </aside>
      </Body3>
    </div>
  )
}

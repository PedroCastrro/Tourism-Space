import React from "react";
import Header from '../Components/Header';
import background from "../imagens/background-home-desktop.jpg";

import { Title, Title1, Paragrafo, Title3, Body, Aside} from '../Styles/Styles';
import { Component } from 'react';

export default function Home() {
  return (
      <div style={{ backgroundImage: `url(${background})`,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' } }>
        <Header />
      <Body>
        <main>
          <Title> So, you want to travel to</Title>
          <Title1>Space</Title1>
          <Paragrafo>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore{' '}
          </Paragrafo>
        </main>

        <Aside>
          <Title3>Explorer</Title3>
        </Aside>
      </Body>
      </div>
        
  )
}

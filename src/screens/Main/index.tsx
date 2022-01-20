import React, { useEffect, useState } from 'react';
import {Container, MapContainer} from './styles';
import {Header,Footer,Map} from '../../components'
import { playWelcomeSound } from '../../utils';

const Main: React.FC = () => {
  const [playWelcome, setPlayWelcome] = useState(true);

  useEffect(()=>{
    if(playWelcome){
      playWelcomeSound();
      setPlayWelcome(false)
    } 
  },[])

    return (
    <Container>
      <Header title='Pedalada'/>
      <MapContainer>
         <Map/>
      </MapContainer>
      <Footer/>
    </Container>
  );
};
export default Main;
import React from 'react';
import {Container, MapContainer} from './styles';
import {Header,Footer,Map} from '../../components'

const Ride: React.FC = () => {
  
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
export default Ride;
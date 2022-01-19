import React from 'react';
import {Container, FloatButtomContainer, CurrentPositionButton} from './styles';
import {Header,Footer} from '../../components'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import MapView from 'react-native-maps';


const Main: React.FC = () => {

  return (
    <Container>
      <Header title='Pedalada'/>

      <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.00999,
          longitudeDelta: 0.00999,
        }
      }
  />
   

   <FloatButtomContainer>
    <CurrentPositionButton>
        <MaterialCommunityIcons name='checkbox-multiple-blank-outline' size={30} color='black'/>
      </CurrentPositionButton>

      <CurrentPositionButton>
        <MaterialCommunityIcons name='crosshairs-gps' size={30} color='black'/>
      </CurrentPositionButton>
   </FloatButtomContainer>
     
     
      <Footer/>
    </Container>
  );
};
export default Main;
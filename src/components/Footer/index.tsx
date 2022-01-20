import React from 'react';
import {Container, IconsContainer, IconImage, RideContainer,VelocityAndDistanceContainer,DistanceContainer,DistanceLabel,DistanceText, VelocityLabel, VelocityText, VelocityContainer} from './styles';
import RideButtonComponent from '../../components/RideButtom';
import StopRideButtom from '../../components/StopRideButtom';
import Cronometer from '../Cronometer';
import * as Icon from '../../../assets'
import { useRoute } from '@react-navigation/native';

const Footer : React.FC = ()=>{
    const {name} = useRoute();           

    return (

        name !== 'Ride' ? 
        (
            <Container>
                <IconsContainer>
                    <IconImage source={Icon.Icon1}/>
                    <IconImage source={Icon.Icon2}/>
                    <IconImage source={Icon.Icon3}/>
                    <IconImage source={Icon.Icon4}/>
                </IconsContainer>
                <RideButtonComponent title='Iniciar Atividade'/>
            </Container>
        ) : 
        (

            <RideContainer>      
                <Cronometer/>

                <VelocityAndDistanceContainer>
               
                  <DistanceContainer>
                        <DistanceLabel>Distância</DistanceLabel>
                        <DistanceText>00:00:11</DistanceText>
                  </DistanceContainer>
               
                  <VelocityContainer>
                        <VelocityLabel>Velocidade (Km/h)</VelocityLabel>
                        <VelocityText>31.1</VelocityText>
                  </VelocityContainer>
               
                </VelocityAndDistanceContainer>
               
                <StopRideButtom title='Parar'/>
            </RideContainer>
        )

       
    )
}

export default  Footer;
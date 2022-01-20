import React from 'react';
import {Container, IconsContainer, IconImage, RideContainer,TimeContainer,VelocityAndDistanceContainer,TimeText, TimeTextLabelContainer, TimeTextLabel,DistanceContainer,DistanceLabel,DistanceText, VelocityLabel, VelocityText, VelocityContainer} from './styles';
import RideButtonComponent from '../../components/RideButtom';
import StopRideButtom from '../../components/StopRideButtom';
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
               
                <TimeContainer>
                    <TimeTextLabelContainer>
                        <TimeTextLabel>Tempo</TimeTextLabel>
                    </TimeTextLabelContainer>
                    <TimeText>00:00:11</TimeText>
                </TimeContainer>
               
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
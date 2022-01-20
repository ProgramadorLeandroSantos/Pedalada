import React from 'react';
import {Container, IconsContainer, IconImage, RideContainer,VelocityAndDistanceContainer,DistanceContainer,DistanceLabel,DistanceText, VelocityLabel, VelocityText, VelocityContainer} from './styles';
import RideButtonComponent from '../../components/RideButtom';
import StopRideButtom from '../../components/StopRideButtom';
import Cronometer from '../Cronometer';
import * as Icon from '../../../assets';
import { useRoute } from '@react-navigation/native';
import {distance,velocity} from '../../utils/dbFake';
import {useCronometer} from '../../hook/cronometer'

const Footer : React.FC = ()=>{
    const {name} = useRoute();  
    const {status} =  useCronometer();    
    const emptyData = '----'     

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
                        <DistanceText>
                            { status ? emptyData:
                            distance[Math.floor(Math.random() * distance.length)]}
                        </DistanceText>
                  </DistanceContainer>
               
                  <VelocityContainer>
                        <VelocityLabel>Velocidade (Km/h)</VelocityLabel>
                        <VelocityText>
                            {status ? emptyData:
                            velocity[Math.floor(Math.random() * velocity.length)]}
                        </VelocityText>
                  </VelocityContainer>
               
                </VelocityAndDistanceContainer>
               
                <StopRideButtom title='Parar'/>
            </RideContainer>
        )

       
    )
}

export default  Footer;
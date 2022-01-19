import React from 'react';
import {Container, IconsContainer, IconImage} from './styles';
import {RideButtonComponent} from '../../components';
import * as Icon from '../../../assets'

const Footer : React.FC = ()=>{
    return (
        <Container>
            <IconsContainer>
                <IconImage source={Icon.Icon1}/>
                <IconImage source={Icon.Icon2}/>
                <IconImage source={Icon.Icon3}/>
                <IconImage source={Icon.Icon4}/>
            </IconsContainer>
            <RideButtonComponent title='Iniciar Atividade'/>
        </Container>
    )
}

export default  Footer;
import React from 'react';
import {Container,Title, SettingsButtom} from './styles';

import {Feather} from '@expo/vector-icons';

interface HeaderProps {
    title: string;
}


const Header : React.FC<HeaderProps> = ({title})=>{
    return (
        <Container>
            <Title>{title}</Title>
            <SettingsButtom>
                <Feather  name='settings' size={30} color='black'/>
            </SettingsButtom>
        </Container>
    )
}

export default Header;
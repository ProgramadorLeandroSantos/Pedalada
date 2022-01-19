import React from 'react';
import {Title, RideButtomComponente} from './styles';

import {MaterialCommunityIcons} from '@expo/vector-icons';

interface RideBTNProps{
    title: string;
}

const RideButtom : React.FC<RideBTNProps> = ({title})=>{
    return (
        <RideButtomComponente onPress={()=> console.log('Start clicked!')}>
                <Title>{title}</Title>
                <MaterialCommunityIcons name='arrow-right' size={30} color='white' />
        </RideButtomComponente>
    )
}

export default RideButtom;
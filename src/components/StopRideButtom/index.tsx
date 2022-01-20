import React from 'react';
import {Title, RideButtomComponente} from './styles';

interface RideBTNProps{
    title: string;
}

const StopRideButtom : React.FC<RideBTNProps> = ({title})=>{
    return (
        <RideButtomComponente onPress={()=> console.log('PAROU')}>
                <Title>{title}</Title>
        </RideButtomComponente>
    )
}

export default StopRideButtom;
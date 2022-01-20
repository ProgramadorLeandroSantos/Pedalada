import React from 'react';
import {Title, RideButtomComponente} from './styles';
import {useCronometer} from '../../hook/cronometer';
interface RideBTNProps{
    title: string;
}

const StopRideButtom : React.FC<RideBTNProps> = ({title})=>{

    const {stop } = useCronometer();
    return (
        <RideButtomComponente onPress={()=> stop()}>
                <Title>{title}</Title>
        </RideButtomComponente>
    )
}

export default StopRideButtom;
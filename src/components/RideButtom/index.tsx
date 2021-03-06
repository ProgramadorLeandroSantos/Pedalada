import React from 'react';
import {Title, RideButtomComponente} from './styles';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useCronometer} from '../../hook/cronometer';
interface RideBTNProps{
    title: string;
}

const RideButtom : React.FC<RideBTNProps> = ({title})=>{
    const {startTimer
    } = useCronometer();
    const navigation = useNavigation()
    return (
        <RideButtomComponente onPress={()=> {
            navigation.navigate('Ride' as any)
            startTimer()    
        }}>
                <Title>{title}</Title>
                <MaterialCommunityIcons name='arrow-right' size={30} color='white' />
        </RideButtomComponente>
    )
}

export default RideButtom;
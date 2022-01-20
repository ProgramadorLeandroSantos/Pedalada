import React from 'react';
import {Title, RideButtomComponente} from './styles';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

interface RideBTNProps{
    title: string;
}

const RideButtom : React.FC<RideBTNProps> = ({title})=>{

    const navigation = useNavigation()
    return (
        <RideButtomComponente onPress={()=> navigation.navigate('Ride' as any)}>
                <Title>{title}</Title>
                <MaterialCommunityIcons name='arrow-right' size={30} color='white' />
        </RideButtomComponente>
    )
}

export default RideButtom;
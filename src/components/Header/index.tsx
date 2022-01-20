import React from 'react';
import {
    Container,
    Title, 
    SettingsButtom, 
    BackButtom, 
    BackButtomEmpty
} from './styles';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {useCronometer} from  '../../hook/cronometer'
interface HeaderProps {
    title: string;
}

const Header : React.FC<HeaderProps> = ({title})=>{
    const {reset} = useCronometer();
    const {name} = useRoute();
    const { goBack} = useNavigation();

    return (
        <Container>
            {name === 'Ride' ? 
                (
                    <BackButtom onPress={()=> {
                        reset()
                        goBack()
                    }}>
                        <MaterialCommunityIcons  name='arrow-left' size={30}  color='black'/>
                    </BackButtom>
                ) : 
                (
                    <BackButtomEmpty />
                )
            }
           
            <Title>{title}</Title>
            <SettingsButtom>
                    <Feather  name='settings' size={30} color='black'/>
            </SettingsButtom>
        </Container>
    )
}

export default Header;
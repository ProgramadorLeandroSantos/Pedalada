import styled from "styled-components/native";;
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Container = styled.View`
    width: 100%;
    height: 140px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 33px;
    font-weight: bold;
`;

export const SettingsButtom = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: absolute;
    left: ${width - 80}px;
`;
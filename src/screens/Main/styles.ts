import styled  from 'styled-components/native'
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
  background-color: grey;
`;


export const Text = styled.Text`
    font-size: 30px;
`;

export const FloatButtomContainer = styled.View`
  height: 100px;
  width: 50px;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: ${height - 370}px;
  left: ${width - 70}px;
  /* background-color: red; */
`;


export const CurrentPositionButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;
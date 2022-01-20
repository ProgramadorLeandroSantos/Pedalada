import styled from "styled-components/native";;


export const Container = styled.View`
    width: 100%;
    height: 140px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;

export const SettingsButtom = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;
export const BackButtom = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;
export const BackButtomEmpty = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;
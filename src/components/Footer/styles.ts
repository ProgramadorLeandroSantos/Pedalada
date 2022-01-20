import styled from "styled-components/native";;

export const Container = styled.View`
    width: 100%;
    height: 150px;
    background-color: #FFFF;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const IconsContainer = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const IconImage = styled.Image`
    width:20px;
    height: 18px;
`;

// ride screen
export const RideContainer = styled.View`
    background-color: #FFF;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 400px;
`;

export const VelocityAndDistanceContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export const DistanceContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



export const VelocityContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DistanceLabel = styled.Text`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
`;
export const DistanceText = styled.Text`
   font-size: 32px;
   font-weight: bold;
   text-align: center;
`;

export const VelocityLabel = styled.Text`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
`;
export const VelocityText = styled.Text`
   font-size: 32px;
   font-weight: bold;
   text-align: center;
`;




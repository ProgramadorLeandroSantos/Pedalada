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

export const TimeContainer = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TimeTextLabelContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-width: 4px;
    border-top-color: black;
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


export const TimeText = styled.Text`
   font-size: 64px;
   font-weight: bold;
   text-align: center;
`;
export const TimeTextLabel = styled.Text`
   font-size: 24px;
   text-align: center;
   padding-top: 20px;
   padding-left: 25px;
   padding-right: 25px;
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




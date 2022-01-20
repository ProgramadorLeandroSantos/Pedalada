import styled from "styled-components/native";;


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

export const TimeTextClear = styled.Text`
   font-size: 15px;
   text-align: center;
   color: red;
`;

export const TimeTextClearBtn = styled.TouchableOpacity`
`;
import React  from 'react';
import {
   TimeContainer,
   TimeText,
   TimeTextClear,
   TimeTextClearBtn,
   TimeTextLabel,
   TimeTextLabelContainer
} from './styles';
import {useCronometer} from '../../hook/cronometer'

const Cronometer : React.FC = ()=>{
    const {hour,minutes,seconds, reset, startTimer} = useCronometer();

    return (
        <TimeContainer>
            <TimeTextLabelContainer>
                <TimeTextLabel>Tempo</TimeTextLabel>
            </TimeTextLabelContainer>
             <TimeText>{hour > 9 ? hour : `0${hour}`}:{minutes > 9 ? minutes :  `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}</TimeText>
            
             <TimeTextClearBtn onPress={()=>{
                 reset()
                 startTimer()
             }}> 
                <TimeTextClear>Zerar tempo</TimeTextClear>
             </TimeTextClearBtn>
            
        </TimeContainer>
    )
}

export default Cronometer;
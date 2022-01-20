import React, {
    createContext,
    useState,
    useContext,
  } from 'react';

  
  interface CronometerProviderContext {
    seconds: number;
    minutes: number;
    hour: number;
    status: boolean;
    startTimer: ()=> void;
    stop: ()=> void;
    reset: ()=> void;
  }
  
  const CronometerConText = createContext<CronometerProviderContext>(
    {} as CronometerProviderContext,
  );
  
  export const CronometerProvider: React.FC = ({children}) => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hour, setHour] = useState(0)
    const [myInterval, setMyInterval] = useState<NodeJS.Timer>()
    const [status, setStatus] = useState(false)

    const startTimer = ()=>{
        setMyInterval(
            setInterval(()=>{
                changeTimeLogic();
            },1000)
        )
    }

    const stop = ()=>{
       clearInterval(myInterval as any);
       setStatus(false)
    }

    const reset = ()=>{
        stop();
        setHour(0);
        setMinutes(0);
        setSeconds(0);
        setStatus(false)
    }

    const changeTimeLogic = ()=>{
        setStatus(true)
        setSeconds((prevSeconds)=>{
            if(prevSeconds + 1 === 60){
                if(minutes + 1 === 60){
                    setHour(hour + 1)
                    return 0
                }
                setMinutes(minutes + 1)
                return 0
            }
            return prevSeconds + 1
        })
        
    }
    return (
      <CronometerConText.Provider
        value={{
           reset,
           startTimer,
           stop,
           hour,
           minutes,
           seconds,
           status,
        }}>
        {children}
      </CronometerConText.Provider>
    );
  };
  
  export function useCronometer(): CronometerProviderContext {
    const context = useContext(CronometerConText);
    return context;
  }
import React from 'react';
import {CronometerProvider} from './cronometer'

const AppProvider: React.FC = ({children}) => {
    return (
      <CronometerProvider>
        {children}
      </CronometerProvider>
    )
}   

export default AppProvider;
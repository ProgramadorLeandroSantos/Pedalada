import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Routes from './routes';


const App: React.FC = () => {

  return (
    <NavigationContainer>
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor="transparent"
            translucent
        />
        <Routes />
    </NavigationContainer>
  );
};

export default App;
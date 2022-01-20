import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Routes from './routes';
import AppProvider from './hook'

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar
              barStyle={'dark-content'}
              backgroundColor="transparent"
              translucent
          />
          <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
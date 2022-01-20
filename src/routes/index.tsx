import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const App = createNativeStackNavigator();

const AppRoute: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Main" component={Screens.Main} />
      <App.Screen name="Ride" component={Screens.Ride} />
    </App.Navigator>
  );
};

export default AppRoute;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Pages/Login/Login';
import Home from './src/Components/Pages/Home/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={{Login}}
        />
        <Stack.Screen 
          name='Home'
          component={{Home}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

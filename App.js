import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import AnaClara from './AnaClara';
import Cauan from './Cauan';
import Mateus from './Mateus';
import Savila from './Savila';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AnaClara" component={AnaClara} />
        <Stack.Screen name="Cauan" component={Cauan} />
        <Stack.Screen name="Mateus" component={Mateus} />
        <Stack.Screen name="Savila" component={Savila} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
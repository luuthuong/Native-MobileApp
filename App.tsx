import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import Intro from './screens/Intro';
import Profile from './screens/Profile';
const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>

    <Stack.Navigator
      initialRouteName="/">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="/"
        component={Intro}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
        name="home"
        component={Profile}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

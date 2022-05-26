import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'mobx-react';
import React from 'react';
import Intro from './screens/Intro';
import Profile from './screens/Profile';
import store from './store/store';

const Stack = createNativeStackNavigator();
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
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
  </Provider>
);

export default App;

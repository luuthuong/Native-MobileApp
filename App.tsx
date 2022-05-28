import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'mobx-react';
import React from 'react';
import Intro from './screens/Intro';
import store from './store/store';
import Profile from './screens/Profile1';
import Home from './screens/Profile';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="/" >
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
            }}
            name="home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerTitle:'PROFILE'
            }}
            name="profile"
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

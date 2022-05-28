import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from './../components/Header';
import Popup from './../components/Popup';
import Body from '../components/Body';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home({navigation}:any) {
  const [active, setActive] = useState(false);
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableNativeFeedback
        touchSoundDisabled={true}
        onPress={() => {
          setActive(false);
        }}>
        <ScrollView>
          <Header action={setActive} />
          <Body style={{flex: 1}} />
        </ScrollView>
      </TouchableNativeFeedback>
      {active && <Popup navigation={navigation} style={styleHome.Popup} />}
    </SafeAreaView>
  );
}
const styleHome = StyleSheet.create({
  Popup: {
    position: 'absolute',
    top: 60,
    right: 5,
    width: 150,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
export default Home;

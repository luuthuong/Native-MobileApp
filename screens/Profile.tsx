import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from './../components/Header';
import Popup from './../components/Popup';
import Body from '../components/Body';

const navigationView = () => {
  return (
    <SafeAreaView>
      <Text>123</Text>
    </SafeAreaView>
  );
};

function Profile() {
  const drawer = useRef(null);
  const [active, setActive] = useState(false);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}>
        <TouchableNativeFeedback  onPress={()=>{
          setActive(false)
        }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={150}
        drawerPosition="left"
        renderNavigationView={navigationView}
        >
          <ScrollView >
          <Header action={setActive} />
          <Body/>
        </ScrollView>
        {active && <Popup  style={styleProfile.Popup} />}
      </DrawerLayoutAndroid>
        </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
const styleProfile = StyleSheet.create({
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
export default Profile;

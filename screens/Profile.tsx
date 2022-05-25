import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {Component, useRef} from 'react';
import Header from './../components/Header';

const navigationView = () => {
  return (
    <SafeAreaView>
      <Text>123</Text>
    </SafeAreaView>
  );
};

function Profile() {
  const drawer = useRef(null);
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
      }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={150}
        drawerPosition="left"
        renderNavigationView={navigationView}>
        <ScrollView>
          <Header />
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

export default Profile;

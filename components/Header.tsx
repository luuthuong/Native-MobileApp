import React from 'react';
import {Image, SafeAreaView, Text, View, StyleSheet, TouchableHighlightBase, TouchableHighlight} from 'react-native';
import Popup from './Popup';
import FadeAnimation from './FadeAnimated';

function Header(props:any): JSX.Element {
  return (
    <SafeAreaView style={headerStyle.Header}>
        <View onTouchEnd={()=>props.action((prev:any)=>!prev)} style={headerStyle.Absolute}>
        <Image
          style={headerStyle.styleAvatar}
          source={require('../assets/avatar.jpg')}
        />
        </View>
    </SafeAreaView>
  );
}
const headerStyle = StyleSheet.create({
  styleAvatar: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  Header:{
      height:60,
      backgroundColor:'#093028',
      position:'relative',
      justifyContent:'center'
  },
  Absolute:{
    position:'absolute',
    right:5,
    borderRadius:50,
  },

});
export default Header;

import React from 'react';
import {Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';

function Header() {
  return (
    <SafeAreaView style={headerStyle.Header}>
      <View>
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
      height:'auto',
      paddingVertical:5,
      backgroundColor:'#093028'
  }
});
export default Header;

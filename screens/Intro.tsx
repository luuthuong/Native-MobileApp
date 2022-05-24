import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from './../styles/style';

const image = {uri: 'https://images.pexels.com/photos/1061623/pexels-photo-1061623.jpeg?cs=srgb&dl=pexels-vlad-bagacian-1061623.jpg&fm=jpg'};
export class Intro extends Component {
  render() {
    return (
      <View style={styles.FullSrcreen}>
        <ImageBackground style={styles.FullSrcreen} source={image} resizeMode="cover" >
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default Intro;

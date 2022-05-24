import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {Component, useState} from 'react';
import {styles} from './../styles/style';
import SignIn  from './SignIn';
import { image } from '../data/data';


const Intro = () => {
  const [isLoading,setLoading]=useState(false);

  return (
    <View style={styles.FullSrcreen}>
      <ImageBackground
        style={styles.FullSrcreen}
        source={image}
        resizeMode="cover"
        blurRadius={10}
        >
        {
          isLoading?<ActivityIndicator size="large" color="#6DD5FA" />:<SignIn/>
        }
      </ImageBackground>
    </View>
  );
};
export default Intro

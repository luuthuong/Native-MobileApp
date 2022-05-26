import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './../styles/style';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {image} from '../data/data';
import FadeAnimation from './../components/FadeAnimated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();
const Intro = ({navigation, children}) => {
  const [isLoading, setLoading] = useState(true);
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <View style={styles.FullSrcreen}>
      <ImageBackground
        style={styles.FullSrcreen}
        source={image}
        resizeMode="cover"
        blurRadius={isLoading ? 0 : 5}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1f4037" />
        ) : (
          <View style={styles.FullSrcreen}>
            <FadeAnimation styles={styles.FullSrcreen}>
              {isLogin ? (
                <SignIn nav={navigation} action={setLogin} />
              ) : (
                <SignUp action={setLogin} />
              )}
            </FadeAnimation>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Intro;

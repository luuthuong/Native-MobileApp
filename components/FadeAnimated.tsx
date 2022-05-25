import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

function FadeAnimation(props) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver:true
    }).start();
  }, [fadeAnimation]);
  return (
    <Animated.View
      style={{
        ...props.styles,
        opacity: fadeAnimation,
      }}>
      {props.children}
    </Animated.View>
  );
}

export default FadeAnimation;

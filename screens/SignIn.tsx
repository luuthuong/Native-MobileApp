import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import FormCustom from '../components/FormCustom';

function SignIn() {
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView>
      <StatusBar animated={true} hidden={show} showHideTransition="slide" />
      <Button
        onPress={() => {
          console.log(show);
          setShow(!show);
        }}
        title={show ? 'show' : 'hide'}
      />
      <FormCustom/>
    </SafeAreaView>
  );
}

export default SignIn;

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
import {styles} from '../styles/style';
import {FormContent} from '../data/data';

function SignIn() {
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      <FormCustom
        Action={() => {
          console.log('action');
        }}
        title="Sign Up"
        data={FormContent.signUp}
      />
    </SafeAreaView>
  );
}

export default SignIn;

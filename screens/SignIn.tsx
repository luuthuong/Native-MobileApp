import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import FormCustom from '../components/FormCustom';
import {styles} from '../styles/style';
import {FormContent} from '../data/data';

function SignIn() {
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      <Text>Sign</Text>
      <FormCustom
        action={() => {
          console.log('action');
        }}
        title="Sign Up"
        data={FormContent.signUp}>
        <View>
          <TouchableHighlight style={signInStyle.Button}>
            <Text style={styles.TextCenter}>Have Account? Sign In</Text>
          </TouchableHighlight>
        </View>
      </FormCustom>
    </SafeAreaView>
  );
}
const signInStyle = StyleSheet.create({
  Button: {
    backgroundColor: '#0F2027',
    paddingVertical: 10,
    marginTop: 10,
  },
});
export default SignIn;

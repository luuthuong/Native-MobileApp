import {Text, TouchableHighlight, View, SafeAreaView} from 'react-native';
import React from 'react';
import FormCustom from './../components/FormCustom';
import {FormContent} from '../data/data';
import {styles} from '../styles/style';

export default function SignUp({action}) {
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      <FormCustom
        action={() => {
          console.log('action sign up');
        }}
        title="Sign Up"
        data={FormContent.signUp}>
        <View>
          <TouchableHighlight
            onPress={() => console.log('sign up')}
            style={{...styles.Button, backgroundColor: '#1f4037'}}>
            <Text style={styles.TextCenter}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => action(true)}
            style={styles.Button}>
            <Text style={styles.TextCenter}>Back to Sign In</Text>
          </TouchableHighlight>
        </View>
      </FormCustom>
    </SafeAreaView>
  );
}

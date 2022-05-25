import React from 'react';
import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlightBase,
  TouchableHighlight,
  Text
} from 'react-native';
import {styles} from '../styles/style';

function FormCustom(props: {title: string; action: any; data: any}) {
  return (
    <KeyboardAvoidingView style={Formstyles.Container} behavior="padding">
      <View>
        {props.data &&
          props.data.map((item, id) => {
            return (
              <TextInput style={Formstyles.Input} key={id} placeholder={item} />
            );
          })}
        <TouchableHighlight>
          <Text style={Formstyles.TextCenter}>{props.title}</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAvoidingView>
  );
}

export default FormCustom;

const Formstyles = StyleSheet.create({
  Input: {
    width: '100%',
  },
  Container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // alignItems:'center'
  },
  TextCenter:{
    textAlign:'center',
  },
  Button:{

  }
})

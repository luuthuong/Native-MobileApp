import React from 'react';
import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlightBase,
  TouchableHighlight,
  Text,
} from 'react-native';
import {styles} from '../styles/style';

function FormCustom(props: {
  title: string;
  action: any;
  data: any;
  children: any;
}) {
  return (
    <KeyboardAvoidingView style={Formstyles.Container} behavior="padding">
      <Text style={Formstyles.Header}>{props.title.toUpperCase()}</Text>
      <View>
        {props.data &&
          props.data.map((item, id) => {
            return (
              <TextInput style={Formstyles.Input} key={id} placeholder={item} />
            );
          })}
        <TouchableHighlight onPress={props.action} style={Formstyles.Button}>
          <Text style={styles.TextCenter}>{props.title}</Text>
        </TouchableHighlight>
        {props.children}
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
  Button: {
    backgroundColor: '#1f4037',
    paddingVertical: 10,
    marginTop: 10,
  },
  ButtonPrimary: {
    backgroundColor: '#0F2027',
    paddingVertical: 10,
    marginTop: 10,
  },
  Header:{
    textAlign:'center',
    fontSize:30,
    color:'#203A43',
    fontWeight:'900'
  }
});

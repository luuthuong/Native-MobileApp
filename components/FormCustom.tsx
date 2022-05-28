import { inject, observer } from 'mobx-react';
import React from 'react';
import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
} from 'react-native';
function FormCustom(props: {
  title: string;
  data: any;
  children: any;
}) {
  return (
    <KeyboardAvoidingView style={Formstyles.Container} behavior="padding">
      <Text style={Formstyles.Header}>{props.title.toUpperCase()}</Text>
      <View>
        {props.data &&
          props.data.map((item:any, id:number) => {
            return (
              <TextInput onChangeText={text=>{
                item.action(text)
              }} style={Formstyles.Input} key={id} placeholder={item.title} />
            );
          })}
        {props.children}
      </View>
    </KeyboardAvoidingView>
  );
}

export default inject('store')(observer(FormCustom)) ;
const Formstyles = StyleSheet.create({
  Input: {
    width: '100%',
  },
  Container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  Header: {
    textAlign: 'center',
    fontSize: 30,
    color: '#203A43',
    fontWeight: '900',
  },
});

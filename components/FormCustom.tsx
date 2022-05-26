import { inject, observer } from 'mobx-react';
import React from 'react';
import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import {styles} from '../styles/style';

function FormCustom(props: {
  title: string;
  action: any;
  data: any;
  children: any;
  store:any
}) {

  const user=props.store.user
  return (
    <KeyboardAvoidingView style={Formstyles.Container} behavior="padding">
      <Text style={Formstyles.Header}>{props.title.toUpperCase()}</Text>
      <View>
        {props.data &&
          props.data.map((item, id) => {
            return (
              <TextInput onChange={()=>console.log(user)} style={Formstyles.Input} key={id} placeholder={item} />
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

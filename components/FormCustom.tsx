import React from 'react';
import {TextInput, View} from 'react-native';
import {FormContent} from '../data/data';

function FormCustom() {
  return (
    <View>
      {FormContent.signUp.map((item, id) => {
        return <TextInput key={id} placeholder={item} />;
      })}
    </View>
  );
}

export default FormCustom;

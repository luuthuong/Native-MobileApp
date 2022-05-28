import {
  Alert,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import FormCustom from '../components/FormCustom';
import {styles} from '../styles/style';
import {FormContent, HOST} from '../data/data';
import { inject ,observer} from 'mobx-react';
import storage from './../storage/storage';

const options=(json:any)=>({
  method:"POST",
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  },
  body:JSON.stringify(json)
})


function SignIn({action, nav,store}:any) {

  const onSignIn=async()=>{
    const res=await fetch(`${HOST}users/usr`,options(store.user))
    const json= await res.json()
    if(json._id){
    Alert.alert("Notification","Login Success!",[
      {
        text:"Ok",
        onPress:async()=>{
          await storage.setStoreAsync(JSON.stringify({
            id:json._id,
            information:json.information
          }))
          nav.navigate("home")
        }
      }
    ])
    }else{
      Alert.alert("Error","User Invalid\nTry Again!",[
        {
          text:"Ok",
        }
      ])
    }
  }
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      <FormCustom
        title="Sign In"
        data={FormContent.signIn}
        >
        <View>
          <TouchableHighlight
            onPress={async()=>await onSignIn()}
            style={{...styles.Button, backgroundColor: '#1f4037'}}
            >
            <Text style={styles.TextCenter}>Sign In</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => action(false)}
            style={styles.Button}>
            <Text style={styles.TextCenter}>Have Account? Sign Up</Text>
          </TouchableHighlight>
        </View>
      </FormCustom>
    </SafeAreaView>
  );
}
export default inject('store')(observer(SignIn)) ;

import {Text, TouchableHighlight, View, SafeAreaView, Alert, ActivityIndicator} from 'react-native';
import React, { useState } from 'react';
import FormCustom from './../components/FormCustom';
import {FormContent, HOST} from '../data/data';
import {styles} from '../styles/style';
import { observer, inject } from 'mobx-react';



const options=(json:any)=>({
  method:"POST",
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  },
  body:JSON.stringify(json)
})

function SignUp({action,store}:any) {
  const [wait,setWait]=useState(false)
  const onSignUp=async()=>{
    setWait(true)
    const res=await fetch(`${HOST}users`,options(store.newUser))
    const json= await res.json()
    let message=json.message==='sucess'?'New User is created !':'Existed user !'
    setWait(false)
      Alert.alert("Notification",message,[
        {
          text:"Ok",
        }
      ])
  }
  
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      {wait&&<ActivityIndicator style={{position:'absolute'}} size="large" color="#1f4037" /> }
      <FormCustom
        title="Sign Up"
        data={FormContent.signUp}>
        <View>
          <TouchableHighlight
            onPress={async() => onSignUp()}
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
export default inject('store')(observer(SignUp)) ;